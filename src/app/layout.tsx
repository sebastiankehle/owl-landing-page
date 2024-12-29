import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Old World Labs",
  description: "Advanced Additive Solutions | Robotics & Unreal Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
