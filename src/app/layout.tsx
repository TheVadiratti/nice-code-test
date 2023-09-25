"use client";

import { Header } from "@/components/widgets/header";
import { Provider } from "react-redux/es/exports";
import store from "@/store";
import "../styles/globals.scss";
import "../styles/vars.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <Provider store={store}>
        <body>
          <Header />
          {children}
        </body>
      </Provider>
    </html>
  );
}
