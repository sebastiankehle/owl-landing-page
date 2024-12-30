import { Nav } from "./nav";

interface FooterProps {
  dictionary: {
    footer: {
      nav: {
        home: string;
        about: string;
        blog: string;
        contact: string;
      };
      copyright: string;
    };
  };
}

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="border-t border-border/10 bg-background">
      <div className="container flex flex-col items-center py-16">
        <Nav dictionary={dictionary.footer.nav} variant="footer" />
        <div className="mt-8 text-sm text-muted-foreground">
          {dictionary.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
