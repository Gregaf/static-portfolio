import MainPage from "@/app/(components)/main-page";
import ProjectTemplate from "./template.mdx";

export default async function DynamicPage({ params }: any) {
  console.log(params);
  // console.log(projectMap);
  // console.log(projectMap.get(params.id));

  return (
    <MainPage>
      <div></div>
    </MainPage>
  );
}
