export default async function FovoriteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="m-auto max-w-7xl px-4">
      <div>{children}</div>
    </main>
  );
}
