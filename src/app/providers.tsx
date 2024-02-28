"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useRouter();
  return (
    <NextUIProvider navigate={navigate.push}>
      <div className="flex justify-between flex-col min-h-screen min-w-fit">{children}</div>
    </NextUIProvider>
  );
}
