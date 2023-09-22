"use client";

import { Header } from "@/components/widgets/header";
import { Provider } from "react-redux/es/exports";
import store from "@/store";
import "../styles/globals.scss";
import "../styles/vars.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Provider store={store}>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </Provider>
    </html>
  );
}
