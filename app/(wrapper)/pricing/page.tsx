import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page - Title",
  description: "Pricing Page - Description",
  keywords: ["Pricing Page", "Pricing", "Page", "Next"],
};

export default function PricingPage() {
  return (
    <div>
      <span className="text-7xl">Pricing Page</span>
    </div>
  );
}
