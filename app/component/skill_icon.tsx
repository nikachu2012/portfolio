import Image from "next/image";

type Props = {
    img: any,
    alt: string,
    customClass?: string
}

export default function SkillIcon(props: Props) {
    return <div className={`w-[65px] h-[65px] flex justify-center items-center flex-col select-none`}>
        <Image src={props.img} alt={props.alt} width={48} height={48} />
    </div>
}
