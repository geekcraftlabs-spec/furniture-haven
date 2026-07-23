"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioCategories, PortfolioCategory } from "@/lib/portfolio-data";
import TiltCard from "./TiltCard";

const featuredCategories = portfolioCategories.slice(0, 6);

export default function CategoryShowcase() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndexes, setCurrentIndexes] = useState<Record<string, number>>(
    () => {
      const init: Record<string, number> = {};
      featuredCategories.forEach((cat: PortfolioCategory) => {
        init[cat.slug] = 0;
      });
      return init;
    }
  );

  useEffect(() => {
    // Detect mobile screen width (or touch device) for performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Longer interval on mobile for better performance
    const interval = setInterval(() => {
      setCurrentIndexes((prev) => {
        const next = { ...prev };
        featuredCategories.forEach((cat: PortfolioCategory) => {
          const total = cat.items.reduce(
            (acc: number, item: { images: string[] }) => acc + item.images.length,
            0
          );
          next[cat.slug] = (next[cat.slug] + 1) % total;
        });
        return next;
      });
    }, isMobile ? 6000 : 5000); // Slower on mobile
    return () => clearInterval(interval);
  }, [isMobile]);

  const getCurrentImage = (category: PortfolioCategory) => {
    const idx = currentIndexes[category.slug] || 0;
    const allImages = category.items.flatMap((item) => item.images);
    return allImages[idx % allImages.length];
  };


  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {featuredCategories.map((category: PortfolioCategory, index: number) => {
        const imageName = getCurrentImage(category);
        const isFirst = index === 0;
        return (
          <Link
            key={category.slug}
            href={`/portfolio#${category.slug}`}
            className="block"
          >
            <TiltCard glowColor="#d4b896">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#4a3520]/80 backdrop-blur-sm border border-white/20 shadow-lg group will-change-transform">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imageName}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: isMobile ? 0.6 : 0.8, 
                      ease: "easeInOut" 
                    }}
                    style={{ willChange: 'opacity' }}
                  >
                    <Image
                      src={`/images/${imageName}`}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={isFirst ? "eager" : "lazy"}
                      priority={isFirst}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white text-xs md:text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    {category.name}
                  </span>
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm text-white/80 text-[10px] px-2 py-0.5 rounded-full">
                  ⟳
                </div>
              </div>
            </TiltCard>
          </Link>
        );
      })}
    </div>
  );
}