import { notFound } from "next/navigation"



export default function productDetail({params: {id}}) {
    if (id>5){
        notFound()
    }
  return (
    <div>
      product number is {id}
    </div>
  )
}
