import React from "react";
import HeroImg from "../assets/hero-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineGoogle,
} from "react-icons/ai";

const Hero = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section className="bg-primary tracking-wide px-5 py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0" data-aos="fade-right" data-aos-duration="2000">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, <br /><span className="text-accent">I am Ajmalsha Salim</span><br />
                        
                    </h1>
                    <h2 className="text-2xl lg:text-5xl">Full Stack Developer<span className="text-accent"> (MERN)</span></h2>

                    <p className="py-5 text-xl font-normal">
                         Proficient in JavaScript, MongoDB, Express, React, Node.js.
                    </p>

                    <div className="flex py-5 ">
                        <a
                            href="https://twitter.com/Ajmalsha_Salim"
                            className="icons pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineTwitter size={40} />{" "}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ajmalsha-salim-349162253/"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineLinkedin size={40} />{" "}
                        </a>
                        <a
                            href="https://github.com/AjmalshaSalim"
                            className="icons pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineGithub size={40} />{" "}
                        </a>
                        <a
                            href="mailto:ajmalaj8085@gmail.com"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineGoogle size={40} />{" "}
                        </a>
                    </div>
                    <br />
                    <a
                        href="/#projects"
                        className=" btn bg-lime-500  border-2 border-lime-500 text-white px-6 py-3 hover:bg-transparent hover:text-lime-300 rounded-md"
                    >
                        See Projects
                    </a>
                </div>

                <div className="hero-img">
                    <img
                        src={HeroImg}
                        alt="coding illustration"
                        className="lgw-[80%] ml-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;