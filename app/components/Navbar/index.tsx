import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";

const navItems = [
  { path: "/about", name: "About" },
  { path: "/pricing", name: "Pricing" },
  { path: "/contact", name: "Contact" },
];

export const Navbar = () => {
  console.log("Server log");

  return (
    <nav className="flex bg-blue-900 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon size={16} className="mr-1" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {/* -- https://nextjs.org/docs/pages/api-reference/components/link#prefetch -- Quiere decir que el "prefetch" estaría habilitado solo para producción "Prefetching is only enabled in production." */}
      {navItems.map((element) => (
        <Link key={element.name} className="mr-2" href={element.path}>
          {element.name}
        </Link>
      ))}
    </nav>
  );
};
