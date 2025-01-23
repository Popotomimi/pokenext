// Next.js Link
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 text-white flex md:flex-row justify-content items-center border-b border-red-500">
      <div className="flex justify-content items-center">
        <Image
          className="m-4"
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1 className="m-4 font-bold">PokeNext</h1>
      </div>
      <ul className="flex m-4 ml-auto space-x-4">
        <li className="m-4">
          <Link href="/" className="hover:border-b-2 hover:border-red-500 pb-1">
            Home
          </Link>
        </li>
        <li className="m-4">
          <Link
            className="hover:text-bolder hover:border-b-2 hover:border-red-500 pb-1"
            href="/about">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
