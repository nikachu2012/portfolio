import Image from "next/image";
import Header from "./section/header";
import Profile from "./section/profile";
import Social from "./section/social";


export default function Home() {
  return (<>
    <Header />
    <main className="md:w-[1000px] m-5 md:m-auto ">
      {/* main element */}
      <Profile />
      <Social />

    </main>
  </>

  );
}
