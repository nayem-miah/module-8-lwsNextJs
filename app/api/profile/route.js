import { cookies, headers } from "next/headers";


// // row way to bring header of request
// export async function GET(request){
//    const requestHeaders = new Headers(request.headers);
//    console.log(requestHeaders.get('Authorization'));

//    return new Response("Profile API")
// }



// // nextJs way to bring header of request
// export async function GET(request){
//        const headerList = headers()
//        console.log(headerList.get('Authorization'));

//        return new Response("Profile API")
//     }




// to set and get cookies
export async function GET(request) {




    //nextjs way to set cookie
    cookies().set("page", "2");
    //nextjs way to get cookie
    console.log(cookies().get("page",));



    // row way to get cookie 
    console.log(request.cookies.get('theme'))
    //   row way to set cookie
    return new Response("Profile API", {
        headers: {
            "Set-Cookie": "theme=dark"
        }
    })
}




