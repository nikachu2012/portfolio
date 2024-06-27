type Props = {
    text: string
}

export default function Section(props: Props) {
    return <h2 className={"border-b-[1px] border-b-black"}>
        {props.text}
    </h2>
}
