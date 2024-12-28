import { Actions } from "./actions/actions";
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
    <header className="fixed left-0 right-0 top-2 z-50 mx-4 rounded-full border bg-background/60 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60 sm:mx-6 lg:mx-8">
      <div className="mx-auto max-w-screen-xl px-3">
        <div className="flex h-11 items-center justify-between">
          <div className="flex items-center">
            <Logo text={dict.header.logo} />
          </div>

          <div className="flex items-center">
            <Nav dict={dict.header.nav} />
          </div>

          <div className="flex items-center">
            <Actions
              dict={{
                getQuote: dict.header.actions.getQuote,
                nav: dict.header.nav,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
