import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Contact Page - Description',
  keywords: ['Contact Page', 'Contact', 'Page', 'Next'],
  title: 'Contact Page - Title',
};

export default function ContactPage() {
  return (
    <div>
      <span className="text-7xl">Contact Page</span>
    </div>
  );
}
