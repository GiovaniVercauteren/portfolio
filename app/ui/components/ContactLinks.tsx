import { Github, Linkedin, Mail } from "lucide-react";
import ContactLink from "./ContactLink";

export default function ContactLinks() {

    const contactLinks = [
        { type: "email", icon: <Mail /> , url: "mailto:giovani.vercauteren@gmail.com"},
        { type: "linkedin", icon: <Linkedin /> , url: "https://www.linkedin.com/in/giovanivercauteren/"},
        { type: "github", icon: <Github /> , url: "https://github.com/GiovaniVercauteren"},
    ];

    return (
        <div className="flex gap-4 mt-8">
            {contactLinks.map((link) => (
                <ContactLink key={link.type} icon={link.icon} url={link.url} />
            ))}
        </div>
    );
}