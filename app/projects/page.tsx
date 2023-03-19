import { LoadJsonData } from "@/utilities/data-loading";
import fs from "fs";
import path from "path";

async function getProjects(): Promise<Project[]> {
  const dataPath = process.cwd() + `/assets/data/projects/`;

  const files = await fs.promises.readdir(dataPath);

  const projects = await LoadJsonData<Project>(dataPath, files);

  return projects;
}

export default async function PortfolioBoard() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto">
      <div>
        {projects.map((project) => {
          return (
            <div key={project.ID}>
              <h1>{project.name}</h1>
              <h2>{project.description}</h2>
            </div>
          );
        })}
      </div>
    </main>
  );
}
