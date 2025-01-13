import Link from "next/link";
import ExtLink from "../component/extLink";
import Section from "../component/sectionTitle";

export default function Career() {
    return <>
        <Section text={"Career"} />
        <table className="m-3">
            <tbody className="[&_td:first-child]:border-r-[1px] [&_td:first-child]:border-r-black md:[&_td:first-child]:pr-10 [&_td:last-child]:pl-3 [&_td]:py-2 [&_td:first-child]:w-20 md:[&_td:first-child]:w-auto overflow-scroll">
                <tr>
                    <td>2019/11</td>
                    <td>
                        <div className="font-bold">World Robot Olympiad 2019 International Finalに出場</div>
                        ハンガリーの首都ブダペストにて行われた、ロボットの世界大会に出場しました。
                    </td>
                </tr>
                <tr>
                    <td>2022/11</td>
                    <td>
                        <div className="font-bold">ジュニアプロコンin静岡にて最優秀賞受賞</div>
                        ビジュアルプログラミング言語とテキスト系の言語を同じような感覚で書くことができるプログラミング言語であるEmojiCodeを制作しました。
                    </td>
                </tr>
                <tr>
                    <td>2023/06~</td>
                    <td>
                        <div className="font-bold">KeTCindyを用いた数学教材の開発</div>
                        課題研究として、数学の図を制作するソフトウェアである<ExtLink href={"https://s-takato.github.io/ketcindyorg/indexj.html"}>KeTCindy</ExtLink>を用いた数学教材の開発や利便性向上のためのソフトウェアを開発しています。
                    </td>
                </tr>
                <tr>
                    <td>2023/11</td>
                    <td>
                        <div className="font-bold">沼津高専チャレンジコンテストにて優秀賞受賞</div>
                        LINEとLINE Front-end Framework、OpenPoseを用い、ヨガの自動採点や健康管理を行う"LINEでヘルスケア"というアプリを開発しました。
                    </td>
                </tr>
                <tr>
                    <td>2024/03</td>
                    <td>
                        <div className="font-bold">静岡大成中学校・高等学校にてロボット関連の講座を開催</div>
                        高専の友人と共に、ロボコンなどの大会で勝つにはどうすればよいかについて講義を行いました。<br />
                        また、その後には実際にロボットを作り走らせ、競技会も行いました。
                    </td>
                </tr>
                <tr>
                    <td>2024/08</td>
                    <td>
                        <div className="font-bold">"数学ソフトウェアとその効果的教育利用に関する研究"にて発表</div>
                        京都大学数理解析研究所(RIMS)にて開催された"数学ソフトウェアとその効果的教育利用に関する研究"にて、KeTCindyの利便性向上と教育的利用について発表を行いました。

                        <div className="mt-1 ml-1 flex gap-2">
                            <Link href="https://www.kurims.kyoto-u.ac.jp/ja/" target="_blank">
                                <button className="bg-[#d9d9d9] hover:bg-[#b5b5b5] text-black px-2">RIMSのリンク</button>
                            </Link>
                            <Link href="https://sites.google.com/site/rimsmse/home" target="_blank">
                                <button className="bg-[#d9d9d9] hover:bg-[#b5b5b5] text-black px-2">研究のリンク</button>
                            </Link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
}
