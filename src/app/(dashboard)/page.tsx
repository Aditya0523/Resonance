import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <SidebarTrigger/>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
