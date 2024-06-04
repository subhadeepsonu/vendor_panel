"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavbarcompProps {
  href: string;
  name: string;
}
export default function Navbarcomp({ href, name }: NavbarcompProps) {
  const pathname = usePathname();
  const isPageActive = href === pathname;
  return (
    <Link href={href}>
      <div className={`text-zinc-400 hover:text-zinc-950 font-semibold ${isPageActive ? 'text-gray-900 font-bold' : ''} transition-all`}>
        {name}
      </div>
    </Link>
  );
}
