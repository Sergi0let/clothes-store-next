import React from "react";
import Header from "./_components/Header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="min-h-[400px] p-6">{children}</div>
    </div>
  );
}
