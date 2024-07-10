import ExtLink from "../component/extLink";
import Section from "../component/sectionTitle";

export default function Contact() {
    return <>
        <Section text={"Contact"} />
        お問い合わせは<ExtLink href="https://twitter.com/nikachu2012">TwitterのDM</ExtLink>が確実です。メールでのお問い合わせは、webmaster@<span className="hidden">ソース見るな</span>nikachu[.]netまで。<br />
        暗号化が必要な場合は、上部に掲載しているPGP公開鍵をご利用ください。
    </>
}
