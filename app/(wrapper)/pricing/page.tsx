import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Pricing Page - Description',
  keywords: ['Pricing Page', 'Pricing', 'Page', 'Next'],
  title: 'Pricing Page - Title',
};

export default function PricingPage() {
  return (
    <div>
      <span className="text-7xl">Pricing Page</span>
    </div>
  );
}
