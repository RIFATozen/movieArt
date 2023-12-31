import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import "@/styles/reset.css";
import "@/styles/global.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "movieArt",
  description: "A Next.js App",
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang");
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="container">
          <Header lang={lang} />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
