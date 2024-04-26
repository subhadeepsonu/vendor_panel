"use client"
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export default function SidebarButton(props: SidebarItem) {
  const router = useRouter();
  const pathname = usePathname();
  const isPageActive = props.href === pathname;

  return (
    <Link href={props.href.toString()}>
      <div
        className={`lg:w-[250px] w-[75px]  h-16 text-lg font-semibold text-white flex gap-2 justify-start items-center pl-4 ${
          isPageActive ? "bg-white" : "hover:bg-white hover:text-black "
        } ${isPageActive ? "font-bold text-black" : ""} transition-all`}
      >
        <div>{props.icon}</div>
        <div className="hidden lg:flex">{props.label}</div>
      </div>
    </Link>
  );
}
