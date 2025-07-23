/* Como estructurar el proyecto en Next JS: https://nextjs.org/docs/app/getting-started/project-structure */
/* ************************************************************************************************************************ */

export default function WrapperLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-col items-center p-24 border-2 border-amber-500 m-2">
        <span className="text-lg">Wrapper Layout</span>
        {children}
      </main>
    </>
  );
}
