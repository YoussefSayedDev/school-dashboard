import CustomScrollbar from "@/components/CustomScrollbar";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youssef Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <SideBar />
      </div>
      <div className="w-[86px] md:w-[92%] lg:w-[84%] xl:w-[86%]">
        <Navbar className="h-[80px]" />
        <CustomScrollbar
          variant="rounded"
          thumbColor="bg-primary"
          trackWidth="w-2"
          trackHoverWidth="hover:w-3"
          trackWidthOnScroll="w-3"
          className="h-[calc(100vh-80px)] overflow-hidden"
        >
          <div className="relative h-full px-2">{children}</div>
        </CustomScrollbar>
      </div>
    </div>
  );
}
