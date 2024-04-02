import { getDictionary } from "../dictionaries/dictionaries"


export default async function contact({params: {langs}}) {
  const dic = await getDictionary(langs)

  return (
    <div className="p-20">

      <h1 className="text-2xl">{dic.contact}</h1>
  
    </div>
  )
}
