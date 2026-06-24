import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Draftly | Blog App",
  description: "A full stack blog app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">
        <ThemeContextProvider>
          <div className="min-h-screen w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto flex flex-col px-0 lg:px-8 xl:px-16">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
