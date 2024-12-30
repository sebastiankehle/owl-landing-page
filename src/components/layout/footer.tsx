import { Nav } from "./nav";

interface FooterProps {
  dictionary: {
    header: {
      nav: {
        home: string;
        about: string;
        blog: string;
        contact: string;
      };
    };
    footer: {
      copyright: string;
    };
  };
}

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="border-t border-border/10 bg-background">
      <div className="container flex flex-col items-center py-16">
        <Nav dictionary={dictionary.header.nav} variant="footer" />
        <div className="mt-8 text-sm text-muted-foreground">
          {dictionary.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
