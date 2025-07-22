export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <span className="text-lg">About Layout</span>
      {children}
    </div>
  );
}
