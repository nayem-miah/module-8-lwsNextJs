import { NextResponse } from 'next/server'
 
// // redirect------------------------------------------------
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {

//     console.log('Hello Im from midddleware')
//   return NextResponse.redirect( new URL('/', request.url))
// }
 
// // if path is '/profile' or '/about' then redirect to '/'
// export const config = {
//   matcher: ['/profile', '/about']
// }




// rewrite------------------------------------------------
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    console.log('Hello Im from midddleware')
  return NextResponse.rewrite( new URL('/', request.url))
}
 
// if path is '/profile' or '/about' then redirect to '/'
export const config = {
  matcher: ['/profile', '/about']
}