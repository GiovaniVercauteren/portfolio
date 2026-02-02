import { Skill } from "@/app/lib/definitions";

export default function MySkill({ name, level, type }: Skill) {
    return (
        <div className="rounded shadow-md p-4 mb-4 bg-sky-200 dark:bg-slate-800">
            <h3 className="text-lg font-semibold mb-2">{name} <span className="text-sm text-slate-600 dark:text-slate-400 capitalize mx-2">{type}</span></h3>
            <div className="w-full bg-sky-300 dark:bg-slate-700 rounded-full h-4">
                <div
                    className="bg-cyan-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
}