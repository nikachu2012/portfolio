import Link from "next/link";
import Section from "../component/sectionTitle";
import WorksCard from "../component/worksCard";
import { worksList } from "./worksList";

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Works',
}


export default function WorksPage() {
    return <>
        <main className="md:w-[1010px] mx-5 md:m-auto pb-5 pt-3">
            <Link href={"/"} >
                <button type="button" className="bg-[#d9d9d9] hover:bg-[#b5b5b5] text-black px-3 py-2 ">
                    {"<- トップページに戻る"}
                </button>
            </Link>

            <Section text={"Works"} />
            現在、{worksList.length}作品が掲載されています。
            <div className="flex gap-[15px] flex-wrap justify-center mt-3">
                {worksList.map((value) => {
                    return <WorksCard
                        image={value.image}
                        title={value.title}
                        description={value.description}
                        key={value.title}
                    >
                        {value.children}
                    </WorksCard>
                })}
            </div>
        </main>
    </>
}
