type Props = {
    text: string
}

export default function Section(props: Props) {
    return <h2 className={"border-b-[1px] border-b-[#d3d3d3] text-3xl font-bold my-3 py-2"}>
        {props.text}
    </h2>
}
