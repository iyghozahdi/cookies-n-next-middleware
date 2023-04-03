import { NextResponse } from "next/server";

export async function middleware(request) {
  const authPage = ["/about", "/profile"];
  const nonAuthPage = ["/login", "/register"];
  const hasCookie = request.cookies.has("cookies-n-nm");
  // const valueCookie = request.cookies.get("cookies-n-nm")?.value;
  if (
    !hasCookie &&
    authPage.some((item) => item === request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(
      new URL(`/login?from=${request.nextUrl.pathname}`, request.url)
    );
  } else if (
    hasCookie &&
    nonAuthPage.some((item) => item === request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/about", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/login:path*", "/about/:path*", "/profile/:path*"],
};
