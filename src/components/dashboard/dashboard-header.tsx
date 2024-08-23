import { cn } from "@/lib/utils";
import {
  ChevronDown,
  LayoutDashboard,
  Settings,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TABS = [
  {
    text: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-auto" />,
    url: "/dashboard",
    disabled: true,
  },
  {
    text: "Generate",
    icon: <Star className="fill-white w-5 h-auto" />,
    url: "/dashboard/generate",
    disabled: false,
  },
  {
    text: "Account",
    icon: <User className="w-5 h-auto" />,
    url: "/dashboard/account",
    disabled: true,
  },
  {
    text: "Favorite",
    icon: <Star className="w-5 h-auto" />,
    url: "/dashboard/favorite",
    disabled: true,
  },
  {
    text: "Setting",
    icon: <Settings className="w-5 h-auto" />,
    url: "/dashboard/setting",
    disabled: true,
  },
];

const DashboardHeader = () => {
  return (
    <div className="flex  items-center  justify-between text-black py-4 px-10">
      {/* logo */}
      <Image src={"/logo.png"} width={130} height={130} alt="logo" />

      {/* links */}
      <div className="flex gap-32">
        {TABS.map((tab, index) => {
          return (
            <Link
              href={tab.url}
              key={index}
              className={cn(
                "flex items-center gap-2 text-white",
                tab.disabled && "pointer-events-none opacity-50"
              )}
            >
              {tab.icon}
              {tab.text}
            </Link>
          );
        })}
      </div>

      {/* profile info */}
      <div className="flex items-center gap-3">
        <div className="text-white">
          {/* name */}
          <h3 className="text-sm font-bold text-end">Tomas Baker</h3>
          <p className="text-sm">baker@tomas.com</p>
        </div>
        <Image
          src={"/generate/profile3.png"}
          width={130}
          height={130}
          alt="logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <ChevronDown className="text-white" />
      </div>
    </div>
  );
};

export default DashboardHeader;
