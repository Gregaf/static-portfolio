import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import Link from "./link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-800 py-10">
      <div className="container mx-auto px-4">
        <span className="text-2xl">Gregory Freitas</span>
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="flex gap-2">
            <a
              href="https://github.com/gregaf"
              className="transition opacity-60 hover:opacity-100"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gregory-freitas-b7068011b"
              className="transition opacity-60 hover:opacity-100"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/projects">Portfolio</Link>
            <Link href="/about">About</Link>
          </div>
          <div>
            <a
              className="transition opacity-60 hover:opacity-100"
              href="/files/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex">
                <FaRegFilePdf size={24} />
                <p className="ml-2">Download Resume</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
