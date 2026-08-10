import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corridor Hub",
  description: "Plateforme de gestion centralisée",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${hankenGrotesk.variable} antialiased`}>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
