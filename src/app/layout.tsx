import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/Background';

// Poppins font for headings
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// Inter font for body text
const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Disha A | Portfolio",
  description: "Personal portfolio of Disha A, a Software Innovation Enthusiast",
  keywords: ["developer", "portfolio", "software engineer", "web developer", "frontend", "backend", "full-stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider>
          <>
            <Background />
            <Navbar />
            <main className="min-h-screen selection:bg-pink-500/20 selection:text-pink-800 dark:selection:bg-pink-500/30 dark:selection:text-pink-200">
              {children}
            </main>
            <Footer />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
