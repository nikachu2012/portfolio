import Image from "next/image";
import Section from "../component/sectionTitle";

import SocialIcon from "../component/socialIcon";

// STATIC FILE ICON
import TwitterIcon from "../../public/social/Twitter.svg"
import InstagramIcon from "../../public/social/instagram.svg"
import GitHubIcon from "../../public/social/github.svg"
import ZennIcon from "../../public/social/zenn.svg"

export default function Social() {
    return <>
        <Section text="Social" />
        <div className="flex gap-1">
            {/* max.10 */}
            <SocialIcon img={TwitterIcon} text={"Twitter"} href={"https://twitter.com/nikachu2012"} />
            <SocialIcon img={InstagramIcon} text={"Instagram"} href={"https://instagram.com/nikachu2012"} />
            <SocialIcon img={GitHubIcon} text={"GitHub"} href={"https://github.com/nikachu2012"} />
            <SocialIcon img={ZennIcon} text={"Zenn"} href={"https://zenn.dev/nikachu"} />
        </div>
    </>
}
