import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page - Title",
  description: "About Page - Description",
  keywords: ["About Page", "About", "Page", "Next"],
};

export default function AboutPage() {
  return (
    <div>
      <span className="text-7xl">About Page</span>
    </div>
  );
}
