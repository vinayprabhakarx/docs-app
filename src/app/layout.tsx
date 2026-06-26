import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({
  subsets: ['latin'],
});

import { ScrollToTop } from '@/components/ScrollToTop';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
