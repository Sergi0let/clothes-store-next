import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import "./globals.css";

const mulish = Mulish({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "The cutting-edge technology store",
  description: "The store that will blow your mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${mulish.className} relative antialiased`}>
        {children}
      </body>
    </html>
  );
}
