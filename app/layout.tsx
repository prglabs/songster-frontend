import type { Metadata } from "next";
import "../styles/globals.css";
import { inter, openSans } from "./font";

export const metadata: Metadata = {
  title: "Songster Capital",
  description:
    "A global investment firm with subject matter expertise in cloud computing, artificial intelligence, and quantum mechanics",
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
