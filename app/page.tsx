import Image from "next/image";
import Header from "./component/header";
import Profile from "./component/profile";


export default function Home() {
  return (<>
    <Header />
    <main className="w-full md:w-[1200px] m-auto">
      {/* main element */}
      <Profile />

    </main>
  </>

  );
}
