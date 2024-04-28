import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SessionProvider from "./SessionProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${poppins.className} relative antialiased`}>
        <SessionProvider>
          <Header />
          {children}
          <Footer />
          <Sidebar />
        </SessionProvider>
      </body>
    </html>
  );
}
