import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import About from "@/components/About";
import Member from "@/components/Member";
import Gallery from "@/components/Gallery";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Members",
  description: "Doing my best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          <Gallery/>
        </body>
    </html>
  );
}
