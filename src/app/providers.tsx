"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            marginTop: "70px",
          },
        }}
      />
    </ThemeProvider>
  );
}
