import Image from "next/image";

type Props = {
    img: any,
    text: string,
    href: string
}

export default function SocialIcon(props: Props) {
    return <a href={props.href} target="_blank">
        <div className="w-[100px] h-[100px] flex justify-center items-center hover:bg-gray-200 flex-col cursor-pointer select-none">
            <Image src={props.img} alt={props.text} width={48} height={48} />
            <span className="text-lg mt-2 leading-none">{props.text}</span>
        </div>
    </a>

}
