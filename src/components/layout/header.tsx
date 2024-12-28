import { Actions } from "./actions";
import { Logo } from "./logo";
import { Nav } from "./nav";

interface HeaderProps {
  dict: {
    header: {
      logo: string;
      nav: {
        features: string;
        pricing: string;
        about: string;
      };
      actions: {
        getQuote: string;
      };
    };
  };
}

export function Header({ dict }: HeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Logo text={dict.header.logo} />
          </div>

          <div className="flex items-center">
            <Nav dict={dict.header.nav} />
          </div>

          <div className="flex items-center">
            <Actions dict={dict.header.actions} />
          </div>
        </div>
      </div>
    </header>
  );
}
