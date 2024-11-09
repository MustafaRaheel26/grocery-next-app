import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
    <nav className="p-4">
      <ul className="container mx-auto flex flex-row md:flex-row items-center justify-center gap-4 md:gap-8 text-lg font-semibold text-gray-800">
        <li className="group">
          <Link
            className="px-6 py-2 border border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-100 hover:shadow-lg transform hover:-translate-y-1" href="/"
          >
            <span className="transition-all duration-300 ease-in-out text-gray-700 group-hover:text-blue-500">
              HOME
            </span>
          </Link>
        </li>
        <li className="group">
          <Link
            className="px-6 py-2 border border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-green-500 hover:bg-green-100 hover:shadow-lg transform hover:-translate-y-1" href="/vegetables"
          >
            <span className="transition-all duration-300 ease-in-out text-gray-700 group-hover:text-green-500">
              VEGIES
            </span>
          </Link>
        </li>
        <li className="group">
          <Link
            className="px-6 py-2 border border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-red-100 hover:shadow-lg transform hover:-translate-y-1" href="/fruits"
          >
            <span className="transition-all duration-300 ease-in-out text-gray-700 group-hover:text-red-500">
              FRUITS
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  



  )
} 