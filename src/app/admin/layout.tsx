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

      <div className="p-6">{children}</div>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, earum
        accusamus saepe aliquid, alias inventore fugit laborum quae eius ipsam
        voluptas. Velit ex sed minima recusandae sapiente, reprehenderit quod
        delectus.
      </footer>
    </div>
  );
}
