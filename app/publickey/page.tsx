import Link from "next/link";
import Section from "../component/sectionTitle";
import WorksCard from "../component/worksCard";

import { Metadata } from 'next'
import { readFileSync } from "fs";
import { readFile } from "fs/promises";

export const metadata: Metadata = {
    title: 'PGP Public Key',
}

export default async function WorksPage() {
    const file = await readFile("app/publickey/key.asc", "utf-8");
    return <>
        <main className="md:w-[1010px] mx-5 md:m-auto pb-5 pt-3">
            <Link href={"/"} >
                <button type="button" className="bg-[#d9d9d9] hover:bg-[#b5b5b5] text-black px-3 py-2 ">
                    {"<- トップページに戻る"}
                </button>
            </Link>

            <Section text={"GPG Public Key"} />
            <div className="my-3">
                <div>
                    Fingerprint: 0E493481F60B4E700C84A984C6DBD4A947C5EAAF
                </div>

                <div>
                    Expires: 2029-03-17
                </div>
            </div>

            <code className="bg-gray-500">
                <pre className="whitespace-pre-wrap p-2 bg-neutral-300">
                    {file}
                </pre>
            </code>
        </main>
    </>
}
