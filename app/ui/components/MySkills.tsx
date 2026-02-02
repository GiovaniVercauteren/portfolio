import { mySkills } from "@/app/lib/data";
import MySkill from "./MySkill";
import { Skill } from "@/app/lib/definitions";

export default function MySkills() {
    return (
        <section id='skills' className="mb-8">
            <div className="sticky top-0 z-20 -mx-6 px-6 w-screen backdrop-blur-xs py-4 lg:sr-only">
                <h1 className="font-semibold uppercase">Skills</h1>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mt-8">
                {mySkills.sort((a, b) => b.level - a.level).map((skill: Skill, index: number) => (
                    <MySkill key={index} {...skill} />
                ))}
            </div>
        </section>
    );
}