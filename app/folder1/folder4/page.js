

  import Link from "next/link";


export default function Folder4() {
  return (
    <div className='p-20 flex-col gap-10'>
      <h1 className='text-2xl '>Folder4</h1>
      <Link className="text-blue-400" href="/folder1/folder3"> Folder3</Link>
    </div>
  )
}
