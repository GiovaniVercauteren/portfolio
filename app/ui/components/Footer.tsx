export default function Footer() {
    return (
        <footer className="max-w-sm mt-24 text-slate-400 dark:text-slate-500 text-sm">
            <p>Coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline">Visual Studio Code</a> by myself. Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline">Tailwind CSS</a> deployed as a <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline">Docker</a> container on <a href="https://www.hetzner.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline">Hetzner</a> with <a href="https://traefik.io/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:underline">Traefik</a> as a reverse proxy.</p>
        </footer>
    );
}