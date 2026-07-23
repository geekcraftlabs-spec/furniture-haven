export interface PortfolioItem {
  id: string;
  productCode: string; // NEW
  images: string[];
  videos?: string[];
}

export interface PortfolioCategory {
  name: string;
  slug: string;
  items: PortfolioItem[];
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    name: "TV Backdrops",
    slug: "backdrops",
    items: [
      { id: "backdrop1", productCode: "FH-BD-001", images: ["Work.PNG", "Work.1.PNG"] },
      { id: "backdrop2", productCode: "FH-BD-002", images: ["Work2.jpg"] },
      { id: "backdrop3", productCode: "FH-BD-003", images: ["Work19.PNG", "Work19.1.PNG"] },
      { id: "backdrop4", productCode: "FH-BD-004", images: ["work8.1.PNG", "work8.PNG"] },
      { id: "backdrop5", productCode: "FH-BD-005", images: ["work3.jpg", "work3.1.PNG", "Work16.jpg"] },
      { id: "backdrop6", productCode: "FH-BD-006", images: ["workninetn.png"], videos: ["WorkNIneTN.1.mp4", "WorkNIneTN.2.mp4"] },
      { id: "backdrop7", productCode: "FH-BD-007", images: ["Work6.jpg"] },
      { id: "backdrop8", productCode: "FH-BD-008", images: ["Work7.jpg"] },
      { id: "backdrop9", productCode: "FH-BD-009", images: ["work4.jpg"] },
      { id: "backdrop10", productCode: "FH-BD-010", images: ["Work9.jpg"] },
    ],
  },
  {
    name: "TV Stands",
    slug: "tv-stands",
    items: [
      { id: "tv1", productCode: "FH-TV-001", images: ["tv1.jpg"] },
      { id: "tv2", productCode: "FH-TV-002", images: ["tv2.PNG", "tv2.1.PNG"] },
      { id: "tv3", productCode: "FH-TV-003", images: ["tv3.1.PNG", "tv3.PNG"] },
      { id: "tv4", productCode: "FH-TV-004", images: ["tv4.jpg", "tv4.1.jpg", "tv4.2.jpg"] },
      { id: "tv5", productCode: "FH-TV-005", images: ["tv5.PNG", "tv5.1.PNG", "tv5.2.PNG"] },
      { id: "tv6", productCode: "FH-TV-006", images: ["tv6.PNG"] },
      { id: "tv7", productCode: "FH-TV-007", images: ["tv7.jpg"] },
      { id: "tv8", productCode: "FH-TV-008", images: ["tv8.PNG"] },
      { id: "tv9", productCode: "FH-TV-009", images: ["tv9.jpg"] },
      { id: "tv10", productCode: "FH-TV-010", images: ["tv10.jpg"] },
    ],
  },
  {
    name: "Couches",
    slug: "couches",
    items: [
      { id: "couch1", productCode: "FH-CN-001", images: ["couch1.jpg", "couch1.1.jpg", "couch1.2.jpg"] },
      { id: "couch2", productCode: "FH-CN-002", images: ["couch2.jpg", "couch2.1.jpg", "couch2.2.jpg", "couch2.3.jpg"] },
      { id: "couch3", productCode: "FH-CN-003", images: ["couch3.jpg", "couch3.1.jpg"] },
      { id: "couch4", productCode: "FH-CN-004", images: ["couch4.jpg", "couch4.1.jpg", "couch4.2.jpg"] },
      { id: "couch5", productCode: "FH-CN-005", images: ["couch5.jpg", "couch5.1.jpg", "couch5.2.jpg", "couch5.5.jpg", "couch5.4.jpg", "couch5.6.jpg"] },
      { id: "couch6", productCode: "FH-CN-006", images: ["couch6.jpg", "couch6.1.jpg"] },
      { id: "couch7", productCode: "FH-CN-007", images: ["couch7.jpg", "couch7.1.jpg"] },
      { id: "couch8", productCode: "FH-CN-008", images: ["couch8.jpg", "couch8.1.jpg"] },
      { id: "couch9", productCode: "FH-CN-009", images: ["couch9.jpg", "couch9.1.jpg"] },
      { id: "couch10", productCode: "FH-CN-010", images: ["couch10.jpg", "couch10.1.jpg", "couch10.2.jpg"] },
    ],
  },
  {
    name: "Headboards",
    slug: "headboards",
    items: [
      { id: "headboard1", productCode: "FH-HB-001", images: ["hboard1.jpg", "hboard1.1.jpg"] },
      { id: "headboard2", productCode: "FH-HB-002", images: ["hboard2.jpg", "hboard2.1.jpg", "hboard2.2.jpg"] },
      { id: "headboard3", productCode: "FH-HB-003", images: ["hboard3.PNG", "hboard3.1.PNG", "hboard3.2.PNG"] },
      { id: "headboard4", productCode: "FH-HB-004", images: ["hboard4.jpg", "hboard4.1.jpg", "hboard4.2.jpg", "hboard4.3.jpg"] },
      { id: "headboard5", productCode: "FH-HB-005", images: ["hboard5.jpg", "hboard5.1.jpg", "hboard5.3.jpg"] },
      { id: "headboard6", productCode: "FH-HB-006", images: ["hboard6.jpg", "hboard6.1.jpg"] },
      { id: "headboard7", productCode: "FH-HB-007", images: ["hboard7.PNG", "hboard7.1.PNG", "hboard7.2.PNG"] },
      { id: "headboard8", productCode: "FH-HB-008", images: ["hboard8.PNG", "hboard8.1.PNG"] },
      { id: "headboard9", productCode: "FH-HB-009", images: ["hboard9.PNG", "hboard9.1.PNG"] },
      { id: "headboard10", productCode: "FH-HB-010", images: ["hboard10..PNG", "hboard10.1.PNG"] },
    ],
  },
  {
    name: "Bedside Tables",
    slug: "bedside",
    items: [
      { id: "bedside1", productCode: "FH-BS-001", images: ["bed1.PNG", "bed1.1.PNG", "bed1.2.PNG"] },
      { id: "bedside2", productCode: "FH-BS-002", images: ["bed2.PNG", "bed2.1.PNG", "bed2.2.PNG"] },
      { id: "bedside3", productCode: "FH-BS-003", images: ["bed3.jpg", "bed3.1.jpg"] },
      { id: "bedside4", productCode: "FH-BS-004", images: ["bed4.jpg", "bed4.1.jpg", "bed4.2.jpg"] },
      { id: "bedside5", productCode: "FH-BS-005", images: ["bed5.PNG", "bed5.1.PNG", "bed5.2.PNG"] },
      { id: "bedside6", productCode: "FH-BS-006", images: ["bed6.PNG", "bed6.1.PNG"] },
      { id: "bedside7", productCode: "FH-BS-007", images: ["bed7.PNG", "bed7.1.PNG"] },
      { id: "bedside8", productCode: "FH-BS-008", images: ["bed8.PNG", "bed8.1.PNG", "bed8.2.PNG"] },
      { id: "bedside9", productCode: "FH-BS-009", images: ["bed9.PNG", "bed9.1.PNG"] },
      { id: "bedside10", productCode: "FH-BS-010", images: ["bed10.PNG", "bed10.1.PNG"] },
    ],
  },
  {
    name: "Coffee Tables",
    slug: "coffee",
    items: [
      { id: "coffee1", productCode: "FH-CF-001", images: ["coffee1.PNG", "coffee1.2.PNG", "coffee1.3.PNG"] },
      { id: "coffee2", productCode: "FH-CF-002", images: ["coffee2.jpg", "coffee2.1.jpg"] },
      { id: "coffee3", productCode: "FH-CF-003", images: ["coffee3.PNG", "coffee3.1.PNG", "coffee3.2.PNG"] },
      { id: "coffee4", productCode: "FH-CF-004", images: ["coffee4.PNG", "coffee4.2.PNG"] },
      { id: "coffee5", productCode: "FH-CF-005", images: ["coffee5.jpg", "coffee5.1.jpg"] },
      { id: "coffee6", productCode: "FH-CF-006", images: ["coffee6.PNG", "coffee6.1.PNG"] },
      { id: "coffee7", productCode: "FH-CF-007", images: ["coffee7.jpg"], videos: ["coffee7vid.mp4"] },
      { id: "coffee8", productCode: "FH-CF-008", images: ["coffee8.PNG", "coffee8.1.PNG", "coffee8.2.PNG"] },
      { id: "coffee9", productCode: "FH-CF-009", images: ["coffee9.PNG", "coffee9.1.PNG", "coffee9.2.jpg"] },
      { id: "coffee10", productCode: "FH-CF-010", images: ["coffee10.jpg", "coffee10.1.jpg", "coffee10.2.jpg"] },
    ],
  },
  {
    name: "Dining Tables",
    slug: "dining",
    items: [
      { id: "dining1", productCode: "FH-DT-001", images: ["dining1.PNG", "dining1.1.jpg"] },
      { id: "dining2", productCode: "FH-DT-002", images: ["dining2.jpg"] },
      { id: "dining3", productCode: "FH-DT-003", images: ["dining3.jpg"] },
      { id: "dining4", productCode: "FH-DT-004", images: ["dining4.jpg"] },
      { id: "dining5", productCode: "FH-DT-005", images: ["dining5.PNG"] },
      { id: "dining6", productCode: "FH-DT-006", images: ["dining6.jpg"], videos: ["dining6vid.mp4"] },
      { id: "dining7", productCode: "FH-DT-007", images: ["dining7.PNG", "dining7.1.PNG"] },
      { id: "dining8", productCode: "FH-DT-008", images: ["dining8.jpg", "dining8.1.jpg", "dining8.2.jpg", "dining8.3.jpg"] },
      { id: "dining9", productCode: "FH-DT-009", images: ["dining9.jpg", "dining9.1.jpg", "dining9.2.jpg"] },
      { id: "dining10", productCode: "FH-DT-010", images: ["dining10.jpg", "dining10.1.jpg", "dining10.2.jpg"] },
    ],
  },
  {
    name: "Kitchen Sets & Wardrobes",
    slug: "kitchens",
    items: [
      { id: "kitchen1", productCode: "FH-KS-001", images: ["kich1.PNG", "kich1.2.PNG"] },
      { id: "kitchen2", productCode: "FH-KS-002", images: ["kich2.jpg", "kich2.1.PNG", "kich2.2.PNG", "kich2.3.PNG"] },
      { id: "kitchen3", productCode: "FH-KS-003", images: ["kich3.jpg"] },
      { id: "kitchen4", productCode: "FH-KS-004", images: ["kich4.jpg"] },
      { id: "kitchen5", productCode: "FH-KS-005", images: ["kich5.PNG", "kich5.1.PNG", "kich5.2.PNG"] },
      { id: "kitchen6", productCode: "FH-KS-006", images: ["kich6.jpg", "kich6.1.jpg"] },
      { id: "kitchen7", productCode: "FH-KS-007", images: ["kich7.jpg", "kich7.1.JPG"] },
      { id: "kitchen8", productCode: "FH-KS-008", images: ["kich8.jpg", "kich8.1.jpg"] },
      { id: "kitchen9", productCode: "FH-KS-009", images: ["kich9.jpg", "kich9.1.jpg"] },
      { id: "kitchen10", productCode: "FH-KS-010", images: ["kich10.jpg"] },
    ],
  },
];

// Pricing ranges per category (min - max in ZAR)
export const categoryPriceRanges: Record<string, { min: number; max: number }> = {
  backdrops: { min: 7000, max: 18000 },
  "tv-stands": { min: 4000, max: 8500 },
  couches: { min: 4500, max: 12000 },
  headboards: { min: 2000, max: 7500 },
  bedside: { min: 2500, max: 6000 },
  coffee: { min: 3000, max: 7000 },
  dining: { min: 6000, max: 15000 },
  kitchens: { min: 8000, max: 25000 },
};