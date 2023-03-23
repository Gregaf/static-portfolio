import { LoadJsonData } from "@/utilities/data-loading";
import fs from "fs";
import path from "path";
import MainPage from "../(components)/main-page";
import ProjectCard from "../(components)/project-card";

async function getProjects(): Promise<Project[]> {
  const dataPath = process.cwd() + `/assets/data/projects/`;

  const files = await fs.promises.readdir(dataPath);

  const projects = await LoadJsonData<Project>(dataPath, files);

  return projects;
}

export default async function PortfolioBoard() {
  const projects = await getProjects();

  return (
    <MainPage>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((project) => {
          return <ProjectCard key={project.ID} projectData={project} />;
        })}
      </div>
    </MainPage>
  );
}
