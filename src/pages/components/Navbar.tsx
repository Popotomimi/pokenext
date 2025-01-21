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
        <h1 className="m-4">PokeNext</h1>
      </div>
      <ul className="flex m-4 ml-auto space-x-4">
        <li className="m-4">
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li className="m-4">
          <Link href="/about" legacyBehavior>
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
