/* si no se coloca dará un error similar a -- You're importing a component that needs `usePathname`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive. -- */
"use client";

import Link from "next/link";
import style from "./index.module.css";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  path: string;
  name: string;
}

export const ActiveLink = ({ name, path }: ActiveLinkProps) => {
  const pathname = usePathname(); // returns "/dashboard" on /dashboard?foo=bar
  // console.log({ pathname });

  return (
    <Link
      className={`${style.link} ${
        pathname === path ? style["active-link"] : ""
      }`}
      href={path}
    >
      {name}
    </Link>
  );
};
