import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SessionProvider from "./SessionProvider";
import "./../globals.css";

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
    <SessionProvider>
      <Header />
      {children}
      <Footer />
      <Sidebar />
    </SessionProvider>
  );
}
