import Section from "../component/sectionTitle";

import SocialIcon from "../component/socialIcon";

// STATIC FILE ICON
import TwitterIcon from "../../public/social/twitter.svg"
import InstagramIcon from "../../public/social/instagram.svg"
import GitHubIcon from "../../public/social/github.svg"
import ZennIcon from "../../public/social/zenn.svg"
import Button from "../component/button";

export default function Social() {
    return <>
        <Section text="Social" />
        <div className="flex justify-center gap-1 flex-wrap">
            {/* max.10 */}
            <SocialIcon img={TwitterIcon} text={"Twitter"} href={"https://twitter.com/nikachu2012"} />
            <SocialIcon img={InstagramIcon} text={"Instagram"} href={"https://instagram.com/nikachu2012"} />
            <SocialIcon img={GitHubIcon} text={"GitHub"} href={"https://github.com/nikachu2012"} />
            <SocialIcon img={ZennIcon} text={"Zenn"} href={"https://zenn.dev/nikachu"} />
        </div>

        <div className="mt-1 flex justify-center gap-1 flex-wrap">
            <Button text={"note.nikachu.net (Blog)"} href={"https://note.nikachu.net/"} />
        </div>
    </>
}
