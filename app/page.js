import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className="items-center justify-between text-sm">
      <h1 className="text-5xl font-bold mb-4 border-4 border-black p-10">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="text-3xl border-4 border-black p-10 mb-4">
      <li className="hover:text-pink-400">
      <Link href={"/week-2"}>Week 2</Link>
      </li>
      </div>
      <div className="text-3xl border-4 border-black p-10 mb-4 ">
      <li className="hover:text-pink-400">
        <Link href={"/week-3"}>Week 3</Link>
        </li>
      </div>
      <div className="text-3xl border-4 border-black p-10 mb-4 ">
      <li className="hover:text-pink-400">
        <Link href={"/week-4"}>Week 4</Link>
        </li>
      </div>
      <div className="text-3xl border-4 border-black p-10 mb-4 ">
      <li className="hover:text-pink-400">
        <Link href={"/week-5"}>Week 5</Link>
        </li>
      </div>
    </div>
    </main>
  )
}