import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // If pathname doesn't start with a locale
  if (!/^\/(?:en|es|de)(?:\/|$)/.test(pathname)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
