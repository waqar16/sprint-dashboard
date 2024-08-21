import DashboardHeader from "@/components/dashboard/dashboard-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Dashboard",
  //   description: "Vinecalc dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#161b37] w-full min-h-screen">
      {/* left side */}
      <DashboardHeader />
      {/* right content */}
      <main className="h-[calc(100vh-74px)]">{children}</main>
    </div>
  );
}
