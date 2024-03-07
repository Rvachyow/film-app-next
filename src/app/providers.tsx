"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import { useRef } from "react";
import { AppStore, makeStore } from "../store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useRouter();
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <NextUIProvider navigate={navigate.push}>
        <div className="flex justify-between flex-col min-h-screen min-w-fit">
          {children}
        </div>
      </NextUIProvider>
    </Provider>
  );
}
