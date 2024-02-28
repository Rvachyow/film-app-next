import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "~/widgets/Header/Header";
import { Footer } from "~/widgets/Footer/Footer";
import { Providers } from "./providers";

import "~/shared/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "film-app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="purple-dark" lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <div>
            <div className="max-w-screen-xl m-auto flex-1 mt-32 px-6">
              {children}
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
