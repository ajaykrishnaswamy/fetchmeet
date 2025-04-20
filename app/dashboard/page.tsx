import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/dashboard-sidebar"
import DashboardContent from "@/components/dashboard-content"

export default function DashboardPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </SidebarProvider>
  )
}
