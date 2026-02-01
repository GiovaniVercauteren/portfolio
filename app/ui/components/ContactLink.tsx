export default function ContactLink({ icon, url }: { icon: React.ReactNode; url: string }) {

    

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1">
            {icon}
        </a>
    );
}