import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page - Title',
  description: 'Contact Page - Description',
  keywords: ['Contact Page', 'Contact', 'Page', 'Next'],
};

export default function ContactPage() {
  return (
    <div>
      <span className="text-7xl">Contact Page</span>
    </div>
  );
}
