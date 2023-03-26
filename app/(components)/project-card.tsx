"use client";
import Image from "next/image";

interface TagProps {
  children: React.ReactNode;
}

function Tag({ children }: TagProps) {
  return (
    <div className="inline-block shadow-md my-1 mx-1 px-4 bg-amber-500 rounded-full">
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
      <div className="group transition duration-300 py-4 px-5 rounded-xl bg-slate-600 border-2 border-transparent hover:bg-rose-400">
        <h2>
          {projectData.name} <span>-&gt;</span>
        </h2>
        <Image
          className="block mx-auto mt-2 border-2 border-white"
          src={projectData.thumbnailSrc}
          alt={`Thumbnail for ${projectData.name}`}
          width={310}
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
