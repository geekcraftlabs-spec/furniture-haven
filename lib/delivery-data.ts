export interface DeliveryRoute {
  id: string;
  province: string;
  cities: string[];
  status: "available" | "scheduled" | "pending";
  dates?: string;
  nextDelivery?: string;
}

export const deliveryRoutes: DeliveryRoute[] = [
  {
    id: "gp",
    province: "Gauteng",
    cities: ["Johannesburg", "Pretoria", "Midrand", ".etc"],
    status: "available",
    dates: "Always Available",
    nextDelivery: "Daily"
  },
  {
    id: "kzn",
    province: "KwaZulu-Natal",
    cities: ["Durban", "Pietermaritzburg", "Umhlanga"],
    status: "scheduled",
    dates: "30 July – 1 August",
    nextDelivery: "30 July"
  },
  {
    id: "wc",
    province: "Western Cape",
    cities: ["Cape Town", "Stellenbosch", "Paarl"],
    status: "pending",
    dates: "Dates TBC",
    nextDelivery: "Check back soon"
  },
  {
    id: "ec",
    province: "Eastern Cape",
    cities: ["Gqeberha", "East London", "Makhanda"],
    status: "pending",
    dates: "Dates TBC",
    nextDelivery: "Check back soon"
  },
  {
    id: "mp",
    province: "Mpumalanga",
    cities: ["Nelspruit", "Witbank", "Middelburg"],
    status: "pending",
    dates: "Dates TBC",
    nextDelivery: "Check back soon"
  },
  {
    id: "fs",
    province: "Free State",
    cities: ["Bloemfontein", "Welkom", "Bethlehem"],
    status: "pending",
    dates: "Dates TBC",
    nextDelivery: "Check back soon"
  },
  {
    id: "nw",
    province: "North West",
    cities: ["Rustenburg", "Mahikeng", "Potchefstroom"],
    status: "pending",
    dates: "Dates TBC",
    nextDelivery: "Check back soon"
  },
  {
    id: "lp",
    province: "Limpopo",
    cities: ["Polokwane", "Tzaneen", "Mokopane"],
    status: "pending",
    dates: "Dates TBC",
    nextDelivery: "Check back soon"
  },
  {
    id: "nc",
    province: "Northern Cape",
    cities: ["Kimberley", "Upington", "Springbok"],
    status: "pending",
    dates: "Dates TBC",
    nextDelivery: "Check back soon"
  },
];