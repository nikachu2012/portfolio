import getAge from "../component/getAge";
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
                    <td>{getAge(2007, 9, 18)}歳</td>
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
    </>
}
