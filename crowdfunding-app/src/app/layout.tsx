import type { Metadata } from "next";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Crowdfunding Web3 using thirdweb SDK + Next starter",
  description:
    "Crowdfunding using starter template from thirdweb SDK with Next.js App router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-700">
        <ThirdwebProvider>
          <Navbar />
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
