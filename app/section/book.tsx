import BooksCard from "../component/booksCard";
import Section from "../component/sectionTitle";

import ngo from "@/public/book/ngo_vol1.png"

export default function Book() {
    return <>
        <Section text="Book" />

        <BooksCard
            title={"ンゴシリーズ vol.1"}
            data={"A4 / 52p / 情報工学同好会 総員 著"}
            image={ngo}
            description={"高専生が数理、情報系の事柄をまとめた本です。「沼津高専の学生証解説するンゴ」を書いています。BOOTHにて電子版の販売も行っています。"}
            link={{
                "紹介ページ": "https://csc.nikachu.net/goods/ngo_vol1",
                "販売ページ": "https://csc-a452p.booth.pm/items/6439916"
            }} />
    </>
}
