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
        className={`lg:w-[250px] w-[75px]  h-16 text-lg font-semibold  flex gap-2 justify-start items-center pl-4 ${
          isPageActive ? "bg-gray-900" : "hover:bg-gray-900 hover:text-white "
        } ${isPageActive ? "font-bold text-white" : ""} transition-all`}
      >
        <div>{props.icon}</div>
        <div className="hidden lg:flex">{props.label}</div>
      </div>
    </Link>
  );
}
