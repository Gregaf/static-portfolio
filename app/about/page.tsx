import MainPage from "../(components)/main-page";
import AboutContent from "./about.mdx";

export default async function About() {
  return (
    <MainPage>
      <div>
        <AboutContent />
      </div>
    </MainPage>
  );
}
