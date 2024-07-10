type Props = {
    text: string,
    href: string,
    target?: string,  // default is _blank
}

export default function Button(props: Props) {
    return <>
        <a href={props.href} target={props.target == null ? "_blank" : props.target}>
            <button type="button" className="bg-[#d9d9d9] hover:bg-[#b5b5b5] text-black px-3 py-2 ">
                {props.text}
            </button>
        </a>
    </>
}
