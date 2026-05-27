import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { QueryProvider } from "@/app/providers/QueryProvider";
import { AuthProvider } from "@/app/providers/AuthProvider";
import { I18nProvider } from "@/app/providers/I18nProvider";
import { router } from "@/app/router";
import { PageLoader } from "@/components/shared/PageLoader";

export function App() {
  const shouldSkipInitialLoader = new URLSearchParams(window.location.search).has("skipLoader");
  const [isLoading, setIsLoading] = useState(!shouldSkipInitialLoader);

  useEffect(() => {
    if (shouldSkipInitialLoader) {
      return;
    }
    const timer = window.setTimeout(() => setIsLoading(false), 1650);
    return () => window.clearTimeout(timer);
  }, [shouldSkipInitialLoader]);

  return (
    <I18nProvider>
      <QueryProvider>
        <AuthProvider>
          <AnimatePresence mode="wait">
            {isLoading ? <PageLoader key="page-loader" /> : null}
          </AnimatePresence>
          <RouterProvider router={router} />
          <Toaster richColors position="top-right" />
        </AuthProvider>
      </QueryProvider>
    </I18nProvider>
  );
}
