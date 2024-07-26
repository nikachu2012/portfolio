import Image from "next/image";
import HeaderImage from "../../public/header.jpeg"
import nikachu from "../../public/nikachu.png"

export default function Header() {
    return <header>
        <div className="w-full h-[150px] md:h-[250px] relative">
            <div className="w-full h-full absolute bg-black">
                <Image src={HeaderImage} alt="Header" className="w-full h-full object-cover opacity-40 blur-[2px]" height={250} />
            </div>
            <div className="w-full h-full absolute flex flex-col items-center justify-center gap-3 md:gap-5">
                <Image src={nikachu} alt="nikachu icon" className="w-[70px] h-[70px] md:w-[140px] md:h-[140px] rounded-full bg-white" width={140} height={140} />
                <h1 className="font-bold text-white text-xl md:text-3xl">nikachu2012 / So Ogino</h1>

            </div>
        </div>

    </header>
}
