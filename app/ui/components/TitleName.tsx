export default function TitleName({ name, title, description }: { name?: string; title?: string; description?: string }) {
    return (
        <div className="flex flex-col min-w-sm gap-2">
            <h1 className="text-4xl font-bold">
                { name }
            </h1>
            <h2 className="text-2xl">{ title }</h2>
            <h3 className="text-slate-500 dark:text-slate-400 max-w-xs">{ description }</h3>
        </div>
    );
}