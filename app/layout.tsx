import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "../styles/globals.css";
import { inter, openSans } from "./font";

export const metadata: Metadata = {
  title: "Songster Capital",
  description:
    "We invest in cloud computing, artificial intelligence, and the commercialization of quantum mechanics",
};

@@ -15,13 +14,12 @@ export default function RootLayout({
}) {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-slate-950 text-slate-50 scroll-smooth" lang="en">
    <html className="bg-black text-white scroll-smooth" lang="en">
      <body
        className={`${inter.variable} ${openSans.variable} flex flex-col items-center min-h-dvh`}
        suppressHydrationWarning
      >
        {children}
        <Footer darkMode />
      </body>
    </html>
  );
}
