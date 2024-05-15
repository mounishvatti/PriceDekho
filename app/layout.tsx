import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const space_Grotesk = Space_Grotesk({
  subsets:["latin"], 
  weight: ['300','400','500','600','700']
});


export const metadata: Metadata = {
  title: "PriceDekho",
  description: "Track products effortlessly and save money on your online shopping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
