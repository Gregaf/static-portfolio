import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

interface TagProps {
  children: React.ReactNode;
}

function Tag({ children }: TagProps) {
  return (
    <div className="inline-block shadow-md my-1 mx-1 px-4 bg-slate-500 rounded-full">
      {children}
    </div>
  );
}

interface ProjectCardProps {
  projectData: Project;
}

export default function ProjectCard({ projectData }: ProjectCardProps) {
  return (
    <a
      href={`/projects/${projectData.ID}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group transition py-4 px-5 rounded-xl bg-zinc-600 border-2 border-transparent hover:bg-teal-600">
        <h2 style={inter.style}>
          {projectData.name} <span>-&gt;</span>
        </h2>
        <Image
          className="block mx-auto mt-2 border-2 border-white"
          src="/placeholder-image.png"
          alt="project img"
          width={165}
          height={165}
        />
        <p className="transition m-0 mt-2 opacity-60 group-hover:opacity-100">
          {projectData.description}
        </p>
        <div>
          {projectData.tags.map((val, index) => {
            return <Tag key={index}>{val}</Tag>;
          })}
        </div>
      </div>
    </a>
  );
}
