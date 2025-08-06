import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/providers/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Rhythm Bhatia - Full Stack Developer',
  description: 'Passionate full-stack developer crafting innovative solutions with modern technologies. Specializing in React, Node.js, and cloud architecture.',
  keywords: 'full stack developer, react developer, node.js, web development, software engineer, rhythm bhatia',
  authors: [{ name: 'Rhythm Bhatia' }],
  creator: 'Rhythm Bhatia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rhythmbhatia.dev',
    title: 'Rhythm Bhatia - Full Stack Developer',
    description: 'Passionate full-stack developer crafting innovative solutions with modern technologies.',
    siteName: 'Rhythm Bhatia Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhythm Bhatia - Full Stack Developer',
    description: 'Passionate full-stack developer crafting innovative solutions with modern technologies.',
    creator: '@rhythmbhatia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0066ff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}