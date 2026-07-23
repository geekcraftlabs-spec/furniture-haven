"use client";
import { motion } from "framer-motion";
import { deliveryRoutes, DeliveryRoute } from "@/lib/delivery-data";
import Link from "next/link";

export default function DeliveryTracker() {
  // Show only first 4 on homepage (will link to full page)
  const displayRoutes = deliveryRoutes.slice(0, 4);

  const getStatusBadge = (status: DeliveryRoute["status"]) => {
    switch (status) {
      case "available":
        return (
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available Now
          </span>
        );
      case "scheduled":
        return (
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Scheduled
          </span>
        );
      case "pending":
        return (
          <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full" />
            Pending
          </span>
        );
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {displayRoutes.map((route: DeliveryRoute, index: number) => (
          <motion.div
            key={route.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            className={`relative p-4 rounded-xl border ${
              route.status === "available"
                ? "bg-green-50/80 backdrop-blur-sm border-green-200"
                : route.status === "scheduled"
                ? "bg-blue-50/80 backdrop-blur-sm border-blue-200"
                : "bg-gray-50/80 backdrop-blur-sm border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-[#4a3520] text-sm md:text-base">
                {route.province}
              </h3>
              {getStatusBadge(route.status)}
            </div>
            <p className="text-xs text-[#6b4c3b] mb-1">
              {route.cities.join(", ")}
            </p>
            <p className="text-xs font-semibold text-[#8b6914] mt-1">
              {route.dates}
            </p>
            {route.status === "available" && (
              <div className="mt-2 text-xs text-green-600 font-medium">
                🚚 Delivering today
              </div>
            )}
            {route.status === "scheduled" && route.nextDelivery && (
              <div className="mt-2 text-xs text-blue-600 font-medium">
                📅 Next: {route.nextDelivery}
              </div>
            )}
            {route.status === "pending" && (
              <div className="mt-2 text-xs text-gray-400 font-medium">
                ⏳ Check back soon
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          href="/delivery"
          className="inline-block text-sm font-medium text-[#8b6914] hover:text-[#6b4c1e] transition"
        >
          View full delivery schedule →
        </Link>
      </div>
    </div>
  );
}