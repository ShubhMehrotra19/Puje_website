import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
  style: "normal",
});



export const metadata: Metadata = {
  title: "Puje Website",
  description: "Real estate website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollbarWidth: "none", userSelect: "none"}}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}