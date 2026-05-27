import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { ContactPage } from "@/features/contact/pages/ContactPage";
import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { ProjectDetailPage } from "@/features/portfolio/pages/ProjectDetailPage";
import { PortfolioPage } from "@/features/portfolio/pages/PortfolioPage";

function ShellRoute() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShellRoute />,
    children: [
      { index: true, element: <PortfolioPage /> },
      { path: "projects/:slug", element: <ProjectDetailPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "*", element: <Navigate to="/" replace /> }
    ]
  }
]);
