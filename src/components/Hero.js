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
        <section className="bg-primary tracking-wide px-5 py-32" id="Home">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0" data-aos="fade-right" data-aos-duration="2000">
                    <h1 className="text-4xl lg:text-6xl font-extrabold">
                        Hi, <br /><span className="text-accent font-extrabold ">I'm Ajmalsha Salim</span><br />
                        
                    </h1>
                    <h2 className="text-2xl lg:text-5xl font-extrabold text-white">Full Stack Developer<span className="text-accent"> (MERN)</span></h2>

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
                        className=" btn bg-greengradient text-white px-6 py-3 hover:bg-transparent hover:text-black rounded-md"
                    > 
                     {/* here */}
                        See Projects
                    </a>
                </div>

                <div className="hero-img">
                    {/* <img
                        src={HeroImg}
                        alt="coding illustration"
                        className="lgw-[80%] ml-auto"
                    /> */}
                    <iframe src="https://lottie.host/embed/f4d78e4b-5313-4fbf-8b48-97d45214b9bd/ahJq0KcDqm.json" className="w-[400px] ease-in-out duration-300 h-[450px] md:ml-40 hover:w-[500px]"></iframe>
                </div>
            </div>
            <div className=' fixed top-[80%] right-5'>
            <iframe src="https://lottie.host/embed/22be250d-58b2-4185-a074-9bb72f6a251c/AMkP18XTZ5.json"></iframe>
            </div>
        </section>
    );
};

export default Hero;