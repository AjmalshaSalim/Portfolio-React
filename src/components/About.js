import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
    return (
        <section className="aboutSession text-white px-5 py-32 tracking-wide" id="About">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info font-light" data-aos="fade-right" data-aos-duration="2000">
                    <h2 className="text-4xl font-medium  mb-5 border-b-[10px] w-[180px] border-lime-400 pb-2">
                        About Me
                        {/* here */}
                    </h2>

                    <p className="pb-5">
                        Hi, My Name Is Ajmalsha. Passionate and self-driven Full Stack Developer
                        with over a year of experience in creating and executing scalable and
                        distributed web applications. Expertise in MERN stack technologies,
                        coupled with a strong problem-solving aptitude, enables me to craft
                        code that is both efficient and maintainable. Continuous learning and
                        exploration are my driving forces, keeping me at the forefront of the
                        ever-evolving web development landscape.
                                     With a strong penchant
                        for problem-solving, I am dedicated to crafting code that is both readable
                        and maintainable. My curiosity drives me to continuously explore and
                        master new technologies.
                    </p>
                </div>

                <div className="about-img" >
                    <img
                        src={AboutImg}
                        alt="coding illustration"
                        className="lgw-[80%] md:ml-auto rounded-full border-dotted border-2 hover:border-lime-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;