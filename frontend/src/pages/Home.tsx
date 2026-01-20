import { useState } from "react";
import { Hero } from "../components/Hero";
import { SectionMenu } from "../components/SectionMenu";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Certificates } from "../components/Certificates";
import { Footer } from "../components/Footer";

export function Home() {

    const [activeSection, setActiveSection] = useState("about");

    return (
        <>
            <Hero />

            <SectionMenu active={activeSection} setActive={setActiveSection} />

            <div className="max-w-5xl mx-auto px-6 mt-12 min-h-[300px] transition-all">
                {activeSection === "about" && <About />}
                {activeSection === "skills" && <Skills />}
                {activeSection === "projects" && <Projects />}
                {activeSection === "certificates" && <Certificates />}
            </div>
            <Footer />
        </>
    );
}
