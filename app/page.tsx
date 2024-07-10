import Header from "./section/header";
import Profile from "./section/profile";
import Social from "./section/social";
import Skill from "./section/skill";
import Works from "./section/works";
import Career from "./section/career";
import Contact from "./section/contact";


export default function Home() {
  return (<>
    <Header />
    <main className="md:w-[1000px] mx-5 md:m-auto pb-5">
      {/* main element */}
      <Profile />
      <Social />
      <Skill />
      <Works />
      <Career />
      <Contact />
    </main>
  </>

  );
}
