import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Old World Labs",
  description: "Old World Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
