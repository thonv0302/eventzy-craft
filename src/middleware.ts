import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // --- Your custom auth logic ---
  const url = new URL(request.url);
  console.log("response: ", url.pathname);
  //   const token = request.headers.get("cookie")?.includes("auth-token");

  if (url.pathname.startsWith("/blog")) {
    console.log("vao day");
  }

  return response;
}

// export function middleware(request: NextRequest) {
//   console.log("vao day");

//   return NextResponse.next();
// }

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
