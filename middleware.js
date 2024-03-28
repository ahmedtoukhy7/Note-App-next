import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";

export function middleware(request){
    const { pathname } = request.nextUrl;
    console.log(pathname)
    let url =request.url
    let isAuth = getCookie("noteToken", { cookies });
    let publicPath = "/";

    if(!isAuth && publicPath.includes(pathname)){
        return NextResponse.redirect(new URL("/Login", request.url));
    }
    // if(isAuth && url==NextResponse.redirect("/Login")){
    //     return NextResponse.redirect("/");
    // }
}

export const config = {
    matcher: ["/", "/Login", "/Register"],
  };