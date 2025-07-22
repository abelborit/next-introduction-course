import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page - Title",
  description: "About Page - Description",
  keywords: ["About Page", "About", "Page", "Next"],
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-24 border-2 border-amber-500">
      <span className="text-lg">Layout</span>
      <span className="text-7xl">About Page</span>
    </main>
  );
}
