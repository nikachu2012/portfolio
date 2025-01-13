import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type Props = {
    title: string,
    data: string,
    image: StaticImageData | string,
    description: string | React.ReactNode,
    link: { [key: string]: string }
}

export default function BooksCard({ title, data, image, description, link }: Props) {
    return <div className="w-full border-zinc-500 border-[1px] shadow-lg p-2 flex gap-3 flex-col md:flex-row">
        <div className="flex justify-center shrink-0">
            <Image src={image} alt={title} className="h-[150px]" height={150} />
        </div>
        <div className="flex flex-col gap-2">
            <div>
                <div className="flex justify-center md:justify-start font-bold text-2xl">{title}</div>
                <div className="flex justify-center md:justify-start text-sm">
                    {data}
                </div>
            </div>

            <div className="grow">
                {description}
            </div>

            <div className="flex gap-2 justify-center md:justify-start">
                {Object.keys(link).map(e => (
                    <Link href={link[e]} target="_blank" key={e}>
                        <button className="bg-[#d9d9d9] hover:bg-[#b5b5b5] text-black px-2">{e}</button>
                    </Link>
                ))}
            </div>

            {/* <div className="flex justify-center my-2 gap-3 flex-wrap items-start">
            {props.children}
        </div> */}
        </div>
    </div>

}
