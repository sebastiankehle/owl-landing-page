import { Actions } from "./actions/actions";
import { Logo } from "./logo";
import { Nav } from "./nav";

interface HeaderProps {
  dictionary: {
    header: {
      logo: string;
      nav: {
        about: string;
        blog: string;
        contact: string;
      };
      actions: {
        getQuote: string;
      };
    };
  };
}

export function Header({ dictionary }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-2 z-50 mx-4 rounded-full bg-background/60 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60 sm:mx-6 lg:mx-8">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center">
            <Logo text={dictionary.header.logo} />
          </div>

          <div className="flex items-center">
            <Nav dictionary={dictionary.header.nav} />
          </div>

          <div className="flex items-center">
            <Actions
              dictionary={{
                getQuote: dictionary.header.actions.getQuote,
                nav: dictionary.header.nav,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
