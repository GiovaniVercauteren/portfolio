import AboutMe from "./ui/components/AboutMe";
import ContactLinks from "./ui/components/ContactLinks";
import Experiences from "./ui/components/Experiences";
import Footer from "./ui/components/Footer";
import TitleName from "./ui/components/TitleName";

export default function Home() {
  return (
    <div className="lg:flex lg:gap-8">
      <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-[40%] lg:flex lg:flex-col lg:justify-between lg:py-12">
        <TitleName name="Giovani Vercauteren" title="B.S. Computer Science" description="Passionate about software development and technology" />
        <ContactLinks />
      </header>
      <main className=" lg:w-[60%] lg:py-12 pt-16">
        <AboutMe />
        <Experiences />
        <Footer />
      </main>
    </div>
  );
}
