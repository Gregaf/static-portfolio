import fs from 'fs'

async function getData(id: string) {
    const dataPath = process.cwd() + `/assets/data/${id}.json`; 
  
    const res = await fs.promises.readFile(dataPath, 'utf8');
  
    return JSON.parse(res);
}

export default async function DynamicPage({ params }: any) {
    const data = await getData(params.id);
    
    return (
        <div>
            <h1>{data.foo}</h1>
            <h2>{data.lorem}</h2>
        </div>
    );
}   
