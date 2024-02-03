"use client";
import { Header } from "~/widgets/Header/Header";
import { NextUIProvider } from "@nextui-org/react";

import "~/shared/styles/globals.css";
import { Footer } from "~/widgets/Footer/Footer";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useRouter();
  return (
    <NextUIProvider navigate={navigate.push}>
      <div className="wrapper">
        <Header />
        <div className="main">{children}</div>
        {/* <Footer /> */}
      </div>
    </NextUIProvider>
  );
}
