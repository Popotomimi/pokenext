// Next.js Link
import Link from "next/link";

// Icons
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const year = new Date();

  return (
    <footer className="bg-zinc-800 mt-10 p-5 py-10 text-white border-t border-red-500 flex flex-col md:flex-row justify-between items-center">
      <div>
        <p>Veja mais projetos no meu Linkedin:</p>
        <Link
          href="https://www.linkedin.com/in/roberto-de-oliveira-35976621b/"
          legacyBehavior>
          <a>
            <BsLinkedin className="linkedin" />
          </a>
        </Link>
      </div>
      <div>
        <span>PokeNext &copy; {year.getFullYear()} </span>
      </div>
      <div>
        <p>Veja meus repositórios:</p>
        <Link href="https://github.com/Popotomimi" legacyBehavior>
          <a>
            <BsGithub className="github" />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
