import { Header } from "@/components/layout/header";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/layout/preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <Header dictionary={dictionary} />
          <MobileMenu dictionary={dictionary} />
          <main className="bg-zinc-100 dark:bg-black">{children}</main>
          <Footer dictionary={dictionary} />
        </ThemeProvider>
      </body>
    </html>
  );
}
