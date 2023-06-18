import { AboutSection, Contact, Hero, ProjectSection, Skills } from "@/components";

const Page = () => {
  return (
    <div>
      <Hero/>
      <ProjectSection/>
      <Skills isLeftImage = {true}/>
      <AboutSection isMore= {true}/>
      <Contact/>
    </div>
  );
};

export default Page;
