import type { Metadata } from 'next';
import { bebas } from '@/app/ui/fonts';

export const metadata: Metadata = {
  description: 'About Page - Description',
  keywords: ['About Page', 'About', 'Page', 'Next'],
  title: 'About Page - Title',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-7xl mb-4">About Page</span>
      <p className={`text-xl ${bebas.className} mb-4`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ratione ab
        iusto modi odio quaerat cupiditate voluptate incidunt nobis? Minus!
      </p>
      <p className={`text-xl ${bebas.className} mb-4`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ratione ab
        iusto modi odio quaerat cupiditate voluptate incidunt nobis? Minus!
      </p>
    </div>
  );
}
