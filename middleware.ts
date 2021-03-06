import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// Next Auth
import { getToken } from "next-auth/jwt";

const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  if (req.nextUrl.pathname.startsWith("/auth")) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (session) {
      const url = req.nextUrl.clone();
      url.pathname = "/home";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/home")) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }
};

export { middleware };
