export interface ReviewItem {
  id: string;
  code: string; // NEW: Unique code like "FH-RV-001"
  title: string;
  caption: string;
  image: string;
  video?: string;
  location: string;
  date: string;
  category: string;
}

export const deliveryReviews: ReviewItem[] = [
  {
    id: "review1",
    code: "FH-RV-001",
    title: "Couch & Coffee Table Delivery – Cape Town",
    caption: "Client ordered a custom Couch & Coffee Table. Delivered in Cape Town on 15 July 2025.",
    image: "reviewscontent/review1.png",
    video: "reviewscontent/review1.mp4",
    location: "Cape Town, Western Cape",
    date: "15 July 2026",
    category: "Couch & Coffee Table",
  },
  {
    id: "review2",
    code: "FH-RV-002",
    title: "Tv Back-drop Installation Delivery – Durban",
    caption: "Custom Tv Back-drop Installation delivered to a happy client in Durban.",
    image: "reviewscontent/review2.png",
    video: "reviewscontent/review2.mp4",
    location: "Durban, KwaZulu-Natal",
    date: "20 May 2026",
    category: "Tv Back-drop Installation",
  },
  {
    id: "review3",
    code: "FH-RV-003",
    title: "Wine Rack Installation – Sandton",
    caption: "Beautiful Wine Rack Installated in Sandton. Client loved the finish!",
    image: "reviewscontent/review3.png",
    video: "reviewscontent/review3.mp4",
    location: "Sandton, Gauteng",
    date: "14 February 2026",
    category: "Wine Rack Installation",
  },
  {
    id: "review4",
    code: "FH-RV-004",
    title: "TV Stand Combo Delivery – Pretoria",
    caption: "Solid wood TV Stand Combo delivered to a family in Pretoria.",
    image: "reviewscontent/review4.png",
    video: "reviewscontent/review4.mp4",
    location: "Pretoria, Gauteng",
    date: "28 July 2026",
    category: "TV Stand Combo",
  },
  {
    id: "review5",
    code: "FH-RV-005",
    title: "TV Stand Combo Delivery – Gqeberha",
    caption: "TV Stand Combo delivered in Gqeberha.",
    image: "reviewscontent/review5.png",
    video: "reviewscontent/review5.mp4",
    location: "Gqeberha, Eastern Cape",
    date: "1 April 2026",
    category: "TV Stand Combo",
  },
  {
    id: "review6",
    code: "FH-RV-006",
    title: "Tv Back-drop Installation – Bloemfontein",
    caption: "Tv Back-drop Installation delivered to a happy client in Bloemfontein.",
    image: "reviewscontent/review6.png",
    video: "reviewscontent/review6.mp4",
    location: "Bloemfontein, Free State",
    date: "5 February 2026",
    category: "Tv Back-drop Installation",
  },
  {
    id: "review7",
    code: "FH-RV-007",
    title: "Dining Room Table Delivery – Nelspruit",
    caption: "Dining Room Table delivered in Nelspruit.",
    image: "reviewscontent/review7.png",
    video: "reviewscontent/review7.mp4",
    location: "Nelspruit, Mpumalanga",
    date: "10 July 2026",
    category: "Dining Room Table",
  },
];