import clockImage from "../../public/works/clock.webp"
import sc1Image from "../../public/works/sc1.webp"
import sc2Image from "../../public/works/sc2.webp"
import portfolioImage from "../../public/works/portfolio.webp"
import diaryImage from "../../public/works/diary.webp"
import syllabusImage from "../../public/works/syllabus.webp"
import emojicodeImage from "../../public/works/emojicode.webp"
import line_healthcareImage from "../../public/works/line_health.webp"
import tankaImage from "../../public/works/tanka-database.webp"
import noteImage from "../../public/works/note.webp"
import handbookImage from "../../public/works/handbook.webp"

import Button from "../component/button";
import { StaticImageData } from "next/image"
import ExtLink from "../component/extLink"

type WorksData = {
    image: StaticImageData | string,
    title: string,
    description: string | React.ReactNode,
    children: string | React.ReactNode,
}


export const worksList: WorksData[] = [
    {
        image: portfolioImage,
        title: "ポートフォリオ",
        description: "学んだ技術を活用しつつ、新たな技術も取り込みながら制作しています。v4ではNext.jsやTailwind CSSを利用しています。",
        children: <>
            <Button text={"-> 使ってみる"} href={"https://portfolio.nikachu.net/"} />
            <Button text={"-> ソースコード"} href={"https://github.com/nikachu2012/portfolio"} />
        </>
    },
    {
        image: emojicodeImage,
        title: "EmojiCode",
        description: <>ブロックを使う言語とテキストを使う言語を融合させた画期的なプログラミング言語です。第４回ジュニアプロコンin静岡にて最優秀賞をいただきました。</>,
        children: <>
            <Button text={"-> 使ってみる"} href={"https://emojicode-ide.nikachu.net/"} />
            <Button text={"-> ソースコード"} href={"https://github.com/nikachu2012/EmojiCode-IDE"} />
        </>
    },
    {
        image: handbookImage,
        title: "沼津高専 学生便覧 on Web",
        description: <>沼津高専の校則等が載っている学生便覧を、Web上で見れるようにし、Algoliaを用いた全文検索機能を付けたものです。学内向けとして制作しました。</>,
        children: <></>
    },
    {
        image: noteImage,
        title: "note.nikachu.net",
        description: <>技術的なことを主に投稿するブログのようなサイトです。静的サイトジェネレータであるHugoを利用しています。</>,
        children: <>
            <Button text={"-> 使ってみる"} href={"https://note.nikachu.net"} />
            <Button text={"-> ソースコード"} href={"https://github.com/nikachu2012/note.nikachu.net"} />
        </>
    },
    {
        image: tankaImage,
        title: "全短歌データベース",
        description: <>すべての短歌を1つのデータベースにまとめ、検索できるサイトです。話題となった全俳句データベースと同じようなものです。</>,
        children: <>
            <Button text={"-> 使ってみる"} href={"https://tankadb.nikachu.net"} />
            <Button text={"-> ソースコード"} href={"https://github.com/nikachu2012/tanka-database"} />
        </>
    },
    {
        image: line_healthcareImage,
        title: "LINEでヘルスケア",
        description: <>LINE, LIFF, OpenPoseを用いて、スマホカメラから姿勢検知を行い、ヨガ姿勢の自動採点を行うアプリです。沼津高専チャレンジコンテストにて優秀賞をいただきました。</>,
        children: <>
            <Button text={"-> 関連サイト"} href={"https://www.numazu-ct.ac.jp/news/6066/"} />
        </>
    },
    {
        image: syllabusImage,
        title: "高専シラバス改",
        description: <>高専の公式シラバスがスマホなどで絶望的に見づらかったので制作しました。 利用には<ExtLink href="https://github.com/nikachu2012/kosen-syllabus-parser/">追加ツール</ExtLink>でデータの生成が必要です。</>,
        children: <>
            <Button text={"-> 使ってみる"} href={"https://syllabus.nikachu.net/"} />
            <Button text={"-> ソースコード"} href={"https://github.com/nikachu2012/kosen-syllabus-kai"} />
        </>
    },
    {
        image: diaryImage,
        title: "日記アプリ",
        description: <>2022年に行われた<ExtLink href="https://www.educationaldesign.jp/2022/03/11/1744/">静岡県ジュニアプログラミングキャンプ SPAコース</ExtLink>で作成したものです。Reactを利用して制作しました。</>,
        children: <>
            <Button text={"-> 使ってみる"} href={"https://spa-diary.nikachu.net/"} />
            <Button text={"-> ソースコード"} href={"https://github.com/nikachu2012/spa-diary"} />
        </>
    },

    {
        image: clockImage,
        title: "Realtime-Clock",
        description: "デジタルとアナログの時計がWeb上で表示できるアプリです。\n2021年にJavaScriptの練習で制作しました。",
        children: <>
            <Button text={"-> 使ってみる"} href={"https://realtimeclock.nikachu.net/"} />
            <Button text={"-> ソースコード"} href={"https://github.com/nikachu2012/realtime-clock"} />
        </>

    },
    {
        image: sc2Image,
        title: "しろくまクリッカーv2",
        description: "HTMLやCSS, JSの様々な要素を学ぶことができ、v1の課題点を改善した作品になりました。",
        children: <>
            <Button text={"-> 使ってみる"} href={"https://v2.sirokumaclicker.nikachu.net/"} />
            <Button text={"-> ソースコード"} href={"https://github.com/nikachu2012/Sirokuma-Clicker-V2"} />
        </>
    },
    {
        image: sc1Image,
        title: "しろくまクリッカーv1",
        description: "クッキークリッカーの偽物です。JavaScriptに慣れることができた作品です。",
        children: <>
            <Button text={"-> 使ってみる"} href={"https://v1.sirokumaclicker.nikachu.net/"} />
            <Button text={"-> ソースコード"} href={"https://github.com/nikachu2012/Sirokuma-Clicker-V1"} />
        </>
    }
]
