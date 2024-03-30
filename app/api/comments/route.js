import comments from "@/app/comments/data"


export async function GET(){
    return Response.json(comments)
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