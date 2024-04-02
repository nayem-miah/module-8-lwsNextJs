import Image from "next/image";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({params: {langs}}) {
  const dic = await getDictionary(langs)
  return (
    <> 
         <h1 className="text-2xl" >{dic.hello}</h1>
    </>
 
  );
}
