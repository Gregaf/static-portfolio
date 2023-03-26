import {
  LoadFileData,
  LoadJSONData,
  LoadYAMLData,
} from "@/utilities/data-loading";
import fs from "fs";
import path from "path";
import MainPage from "../(components)/main-page";
import ProjectCard from "../(components)/project-card";
import { PROJECT_DATA_PATH } from "@/types/projects-constants";

async function getProjects(): Promise<Project[]> {
  const files = await fs.promises.readdir(PROJECT_DATA_PATH);

  const projects = await LoadYAMLData<Project>(PROJECT_DATA_PATH, files);

  return projects;
}

export default async function PortfolioBoard() {
  const projects = await getProjects();

  return (
    <MainPage>
      <div className="animate-fade">
        <h1 className="mb-2 text-4xl font-bold text-center lg:text-left">
          Projects
        </h1>
        <hr className="mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            return <ProjectCard key={project.ID} projectData={project} />;
          })}
        </div>
      </div>
    </MainPage>
  );
}
