import path from "path";
import fs from 'fs';

export async function LoadJsonData<T>(absoluteDirPath: string, fileNames: string[]): Promise<T[]> {
    const absolutePaths = fileNames.map((file) => path.join(absoluteDirPath, file));

    const dataList = await Promise.all(absolutePaths.map(async (absolutePath) => { 
        const fileData = await fs.promises.readFile(absolutePath, 'utf8');

        const data: T = JSON.parse(fileData);

        return data;
    }));

    return dataList;
}