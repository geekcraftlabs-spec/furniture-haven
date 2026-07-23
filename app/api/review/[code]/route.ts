import { NextResponse } from "next/server";
import { deliveryReviews } from "@/lib/review-data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;

  // Search for the review by code
  const foundReview = deliveryReviews.find((review) => review.code === code);

  if (!foundReview) {
    return NextResponse.json(
      { error: "Review not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    review: foundReview,
  });
}