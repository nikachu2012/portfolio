import Image from "next/image"

type Props = {
    image: any,
    title: string,
    description: React.ReactNode | string,

    children: React.ReactNode | string | null
}


export default function worksCard(props: Props) {
    return <div className="w-full max-w-[495px] border-zinc-500 border-[1px] shadow-lg flex flex-col">
        <Image src={props.image} alt={props.title} />
        <div className="font-bold text-2xl flex justify-center mt-3 mb-2">{props.title}</div>
        <div className="mx-5 mb-2 grow">
            {props.description}
        </div>

        <div className="flex justify-center my-2 gap-3 flex-wrap items-start">
            {props.children}
        </div>
    </div>
}



