import Section from "../component/sectionTitle";
import WorksCard from "../component/worksCard";

import { worksList } from "../works/worksList";
import Link from "next/link";


export default function Works() {
    const data = [worksList[0], worksList[1]]
    return <>
        <Section text={"Works"} />
        <div className="my-3">ここでは一部作品を紹介しています。その他の作品も<Link className="underline px-1" href={"/works"}>Works</Link>にあります。</div>

        <div className="flex gap-[5px] flex-wrap justify-center">
            {data.map((value) => {
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
    </>
}
