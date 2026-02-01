import { Experience } from "@/app/lib/definitions";

export default function MyExperience({ startDate, endDate, position, company, location, description, tags }: Experience) {
    
    const prettyStartDate = startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const prettyEndDate = endDate ? endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Present";

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex lg:flex-col gap-2 min-w-50 text-sm lg:text-base font-semibold text-slate-500 dark:text-slate-400">
                <span>{prettyStartDate} - {prettyEndDate}</span>
                <span className="lg:collapse">•</span>
                <span>{location}</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{position} • {company}</h3>
                <p className="text-slate-500 dark:text-slate-400">{description}</p>
                {tags && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-cyan-200 dark:bg-cyan-700 text-cyan-600 dark:text-cyan-200 px-2 py-1 rounded-full text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            
        </div>
    );
}