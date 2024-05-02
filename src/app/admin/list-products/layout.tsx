import Navbar from "../_components/Navbar";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[400px] overflow-x-auto">
      <Navbar />
      {children}
    </div>
  );
}
