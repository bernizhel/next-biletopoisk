import { Inter } from "next/font/google";

import styles from "./styles.module.css";
import "./globals.css";
import { Header } from "@/ui/widgets/Header";
import { Footer } from "@/ui/widgets/Footer";
import { StoreProvider } from "@/redux/StoreProvider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Билетопоиск",
  description: "Покупайте билеты на ваши любимые фильмы здесь!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className={styles.page}>
          <StoreProvider>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
