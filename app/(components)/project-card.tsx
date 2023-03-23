import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TagProps {
  children: React.ReactNode;
}

function Tag({ children }: TagProps) {
  return (
    <div className="inline-block shadow-md mx-1 px-4 bg-slate-500 rounded-full">
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
      <div className="group transition py-4 px-5 rounded-xl border-2 border-transparent hover:border-white">
        <h2 style={inter.style}>
          {projectData.name} <span>-&gt;</span>
        </h2>
        <p className="transition m-0 opacity-60 group-hover:opacity-100">
          {projectData.description}
        </p>
        {projectData.tags.map((val, index) => {
          return <Tag key={index}>{val}</Tag>;
        })}
      </div>
    </a>
  );
}
