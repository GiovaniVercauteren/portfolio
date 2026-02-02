import { myExperiences } from "@/app/lib/data";
import MyExperience from "./MyExperience";
import { SquareArrowOutUpRight } from "lucide-react";

export default function MyExperiences() {
    return (
        <section id='experiences' className="mb-16">
            <div className="sticky top-0 z-20 -mx-6 px-6 w-screen backdrop-blur-xs py-4 lg:sr-only">
                <h1 className="font-semibold uppercase">Experience</h1>
            </div>
            {
                myExperiences.sort((a, b) => b.startDate.getTime() - a.startDate.getTime()).map((experience, index) => (
                    <div key={index} className="my-8">
                        <MyExperience {...experience} />
                    </div>
                ))
            }
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-1">View Resume <SquareArrowOutUpRight size={16} /></a>
        </section>
    );
}