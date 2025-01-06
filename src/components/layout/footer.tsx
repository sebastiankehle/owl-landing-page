import { Navigation } from "@/types/nav";
import { Nav } from "./nav";

interface FooterProps {
  dictionary: {
    header: {
      nav: Navigation;
    };
    footer: {
      copyright: string;
    };
  };
}

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="bg-background">
      <div className="container flex flex-col items-center py-16">
        <Nav dictionary={dictionary.header.nav} variant="footer" />
        <div className="mt-8 text-sm text-muted-foreground">
          {dictionary.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
