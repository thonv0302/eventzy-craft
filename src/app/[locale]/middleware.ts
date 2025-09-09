import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
console.log("vao day 1");

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("vao day");

  return NextResponse.next();
}

export const config = {
  matcher: ["/[locale]/(authenticated)/:path*"],
};
