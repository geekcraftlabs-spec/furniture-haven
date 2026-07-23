import { NextResponse } from "next/server";
import { portfolioCategories } from "@/lib/portfolio-data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;

  // Search for the product by code
  let foundProduct = null;
  let foundCategory = null;

  for (const category of portfolioCategories) {
    const item = category.items.find((item) => item.productCode === code);
    if (item) {
      foundProduct = item;
      foundCategory = category;
      break;
    }
  }

  if (!foundProduct) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    product: foundProduct,
    category: foundCategory?.name,
    slug: foundCategory?.slug,
  });
}