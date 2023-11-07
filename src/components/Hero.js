import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineGoogle,
} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="bg-primary px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, <br />I am <span className="text-accent">A</span>jmalsha Salim<br />
                        MERN Stack Developer
                    </h1>

                    <p className="py-5 text-xl font-light">
                         Proficient in JavaScript, MongoDB, Express, React, Node.js.
                    </p>

                    <div className="flex py-5 ">
                        <a
                            href="https://twitter.com/Ajmalsha_Salim"
                            className="pr-4 inline-block text-accent hover:text-white"
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
                            className="pr-4 inline-block text-accent hover:text-white"
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
                        className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent rounded-md"
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