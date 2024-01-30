import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
      <h1 className="text-4xl font-bold mb-5 border-4 border-pink-400 p-10">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="text-lg">
      <li className="hover:text-pink-400 hover:border-hover">
      <Link href={"/week-2"}>Week 2</Link>
      </li>
      </div>
    </div>
    </main>
  )
}
