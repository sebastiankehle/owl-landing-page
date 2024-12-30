import { Actions } from "./actions/actions";
import { Logo } from "./logo";
import { Nav } from "./nav";

interface HeaderProps {
  dictionary: {
    header: {
      logo: string;
      nav: {
        home: string;
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
    <header className="fixed left-0 right-0 top-2 z-50">
      <div className="container">
        <div className="rounded-full bg-background/60 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto px-4">
            <div className="grid h-12 grid-cols-[10rem,1fr,10rem] items-center">
              <div>
                <Logo text={dictionary.header.logo} />
              </div>

              <div className="flex justify-center">
                <Nav dictionary={dictionary.header.nav} />
              </div>

              <div className="flex justify-end">
                <Actions
                  dictionary={{
                    getQuote: dictionary.header.actions.getQuote,
                    nav: dictionary.header.nav,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
