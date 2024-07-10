type Props = {
    href: string
    children: string | React.ReactNode,
    className?: string,
    target?: string,  // default is _blank
}

export default function ExtLink(props: Props) {
    return <a href={props.href} className={`underline px-1 ${props.className}`} target={props.target == null ? "_blank" : props.target}>{props.children}</a>
}
