import Section from "../component/sectionTitle";
import SkillIcon from "../component/skill_icon";

// STATIC FILE ICON
import htmlIcon from "../../public/skill/html5.svg"
import cssIcon from "../../public/skill/css3.svg"
import tailwindcssIcon from "../../public/skill/tailwindcss.svg"
import jsIcon from "../../public/skill/javascript.svg"
import tsIcon from "../../public/skill/typescript.svg"
import reactIcon from "../../public/skill/react.svg"
import nextjsIcon from "../../public/skill/nextdotjs.svg"
import pythonIcon from "../../public/skill/python.svg"
import cppIcon from "../../public/skill/cplusplus.svg"

export default function Skill() {
    return <>
        <Section text="Skill" />

        {/* <div className="flex justify-center">web</div> */}
        <div className="flex justify-center gap-1 flex-wrap">
            {/* max.10 */}
            <SkillIcon img={htmlIcon} alt={"HTML"} />
            <SkillIcon img={cssIcon} alt={"CSS"} />
            <SkillIcon img={jsIcon} alt={"JavaScript"} />
            <SkillIcon img={tsIcon} alt={"TypeScript"} />
            <SkillIcon img={tailwindcssIcon} alt={"Tailwind CSS"} />
            <SkillIcon img={reactIcon} alt={"React"} />
            <SkillIcon img={nextjsIcon} alt={"Next.js"} />
            <SkillIcon img={pythonIcon} alt={"Python"} />
            <SkillIcon img={cppIcon} alt={"C++"} />
        </div>

    </>
}
