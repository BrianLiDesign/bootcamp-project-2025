import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Brian Li's Portfolio",
  description: "Code with Precision. Circuits with Purpose.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: 72 }}>{children}</main>
      </body>
    </html>
  );
}
