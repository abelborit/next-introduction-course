export default function WrapperLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center p-24 border-2 border-amber-500">
      <span className="text-lg">Wrapper Layout</span>
      {children}
    </main>
  );
}
