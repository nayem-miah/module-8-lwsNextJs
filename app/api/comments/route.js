import comments from "@/app/comments/data"


export async function GET(request){


   const searchParams = request.nextUrl.searchParams;
   const query = searchParams.get("query");

   if(query){
    const filteredComments = comments.filter((comment) =>
     comment.text.toLocaleLowerCase().includes(query));

     return Response.json(filteredComments);

   }
   return Response.json(comments);
} 



export async function POST(request){

    const commnent = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: commnent.text
    }
    comments.push(newComment);

    return new Response(JSON.stringify(newComment),{
        headers: {
            "content-type": "application/json"
        },
        status: 201,
    })
}