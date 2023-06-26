// 1: Standard matcher -------------------------------------------
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   console.log('Middleware invoked at time:' + new Date());
//   console.log({ url: request.url });
//   console.log({ pathname: request.nextUrl.pathname });
//   console.log({ method: request.method });
    // Your Logic
    // Authentication,....
// }

// export const config = {
//   matcher: '/about/:path*',
// };
// 1: Standard matcher -------------------------------------------
//
//
//
// 2: Conditional matching with includes() -------------------------------------------
// export function middleware(request) {
//   if (request.url.includes('/auth/')) {
//     console.log('Middleware invoked at time:' + new Date());
//     console.log({ url: request.url });
//     console.log({ pathname: request.nextUrl.pathname });
//     console.log({ method: request.method });
       // Your Logic
       // Authentication,....
//   }
// }
// 2: Conditional matching with includes() -------------------------------------------
//
//
//
// 3: Conditional matching with Regex -------------------------------------------
export function middleware(request) {
  const authRegexChecker = new RegExp('/auth/*');

  if (authRegexChecker.test(request.url)) {
    console.log('Middleware invoked at time:' + new Date());
    console.log({ url: request.url });
    console.log({ pathname: request.nextUrl.pathname });
    console.log({ method: request.method });
    // Your Logic
    // Authentication,....
  }
}
// 3: Conditional matching with Regex -------------------------------------------
