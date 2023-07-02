import Link from "next/link"

const Home = () => {
  return (
    <div className="flex w-full h-screen  bg-slate-400 ">
      <nav className="flex w-full h-12 bg-slate-100 items-center p-3 gap-2">

        <Link href={"/generate"}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ساخت qr code</Link>
        <Link href={"/read"}  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">خواندن qr code</Link>
      </nav>
    </div>
  )
}

export default Home