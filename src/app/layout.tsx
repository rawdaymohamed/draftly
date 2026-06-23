import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {/* Wrapper */}
        <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-7xl  mx-auto flex flex-col px-8 lg:px-16 bg-amber-600">
          {children}
        </div>
      </body>
    </html>
  );
}
