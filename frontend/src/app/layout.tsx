import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Docent AI",
  description: "Chat with your documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white h-screen flex overflow-hidden`}>
        <Sidebar />
        
        <main className="flex-1 relative h-full">
          {children}
        </main>
      </body>
    </html>
  );
}