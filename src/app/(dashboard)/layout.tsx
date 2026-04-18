import { cookies } from "next/headers";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";

/**
 * Layout wrapper that provides a dashboard sidebar and main content area.
 *
 * The initial open state of the sidebar is derived from the `sidebar_state` cookie
 * (open unless the cookie value is exactly `"false"`). Renders a `SidebarProvider`
 * with the dashboard sidebar and a main region that hosts the provided `children`.
 *
 * @param children - The page content to render inside the dashboard's main area
 * @returns The dashboard layout element that wraps `children` with sidebar controls
 */
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value !== "false";

  return (
    <SidebarProvider defaultOpen={defaultOpen} className="h-svh">
      <DashboardSidebar/>
      <SidebarInset className="min-h-0 min-w-0">
        <main className="flex flex-1 min-h-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
