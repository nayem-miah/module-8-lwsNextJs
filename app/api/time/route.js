// by default nextJs cashes all the get request except 
//dyanmic page event though get request and if we use Headers and cookies in any get request
// but we can stop it if it required


// to stop cashing
export const dynamic = 'force-dynamic'


export async function GET(request){
    return new Response(new Date().toLocaleTimeString())
}





