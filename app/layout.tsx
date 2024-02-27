import type { Metadata } from "next";
import "../styles/globals.css";
import { inter, openSans } from "./font";

export const metadata: Metadata = {
  title: "Songster Capital",
  description:
    "We invest in cloud computing, artificial intelligence, and the commercialization of quantum mechanics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-black text-white scroll-smooth" lang="en">
      <body
        className={`${inter.variable} ${openSans.variable} flex flex-col items-center min-h-dvh`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
