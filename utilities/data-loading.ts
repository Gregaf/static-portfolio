import path from "path";
import fs from 'fs';
import { PROJECT_DATA_PATH } from "@/types/projects-constants";
import { parse } from "yaml";



export async function LoadFileData(absoluteDirPath: string, fileNames: string[]): Promise<string[]> {
    const absolutePaths = fileNames.map((file) => path.join(absoluteDirPath, file));

    const dataList = await Promise.all(absolutePaths.map(async (absolutePath) => { 
        const fileData = await fs.promises.readFile(absolutePath, 'utf8');

        return fileData;
    }));

    return dataList;
}

export async function LoadYAMLData<T>(absoluteDirPath: string, files: string[]): Promise<T[]> {
    const yamlFiles = files.filter((file) => file.endsWith('.yaml'));
    
    const dataContents = await LoadFileData(absoluteDirPath, yamlFiles);

    const dataObjects: T[] = dataContents.map((data) => parse(data));

    return dataObjects
}

export async function LoadJSONData<T>(absoluteDirPath: string, files: string[]): Promise<T[]> {
    const yamlFiles = files.filter((file) => file.endsWith('.json'));
    
    const dataContents = await LoadFileData(absoluteDirPath, yamlFiles);

    const dataObjects: T[] = dataContents.map((data) => JSON.parse(data));

    return dataObjects
}

// export function ParseJSONData<T>(dataContents: string[]): T[] {
//     return dataContents.map((data) => parse(data))
// }

// export const projectMap: Map<string, Project> = new Map();

// export async function LoadProjects() { 
//     const files = await fs.promises.readdir(PROJECT_DATA_PATH);
  
//     const projects = await LoadFileData<Project>(PROJECT_DATA_PATH, files);
  
//     projects.map((project) => projectMap.set(project.ID, project));
// }