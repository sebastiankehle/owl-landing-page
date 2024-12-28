import { getDictionary } from "@/lib/dictionary";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import { MobileMenu } from "@/components/layout/mobile-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default async function Layout({ children, params }: LayoutProps) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header dict={dict} />
          <MobileMenu dict={dict} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
