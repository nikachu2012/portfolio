import ExtLink from "../component/extLink";
import GetAge from "../component/GetAge";
import Section from "../component/sectionTitle";

export default function Profile() {
    return <>
        <Section text="Profile" />

        プログラミングが生きがいの高専生です。<br />
        最近はキャッシュレスとかNFCとかにも興味を持っています。

        <table className="m-3">
            <tbody className="[&_td:first-child]:border-r-[1px] [&_td:first-child]:border-r-black md:[&_td:first-child]:pr-10 [&_td:last-child]:pl-3 [&_td]:py-0.5 [&_td:first-child]:w-20 md:[&_td:first-child]:w-auto overflow-scroll">
                <tr>
                    <td>誕生日</td>
                    <td>2007-09-18 (ISO 8601拡張表記)</td>
                </tr>
                <tr>
                    <td>年齢</td>
                    <td><GetAge year={2007} month={9} date={18} />歳</td>
                </tr>
                <tr>
                    <td>学校</td>
                    <td>独立行政法人 国立高等専門学校機構 沼津工業高等専門学校</td>
                </tr>
                <tr>
                    <td>居住地</td>
                    <td>静岡県</td>
                </tr>
                <tr>
                    <td>趣味</td>
                    <td>プログラミング, コンピュータいじり, 音楽を聴くこと など</td>
                </tr>
            </tbody>
        </table>
        <ExtLink href="https://note.nikachu.net" className="ml-0">note.nikachu.net</ExtLink><br />
        <a href="/0E493481F60B4E700C84A984C6DBD4A947C5EAAF.asc" className="underline mx-1" download={true}>PGP Public Key (expires: 2029-03-17)</a>
    </>
}
