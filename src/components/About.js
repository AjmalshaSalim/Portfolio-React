import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
    return (
        <section className="bg-secondery text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info font-light">
                    <h2 className="text-4xl font-medium  mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        About Me
                    </h2>

                    <p className="pb-5">
                        Hi, My Name Is Ajmalsha. I am an Experienced
                        MERN Stack Developer with over 1+ years of dedicated involvement in creating
                        and executing web applications. My passion lies in building scalable distributed
                        systems, and my journey has been marked by a rapid acquisition of deep knowledge
                        in JavaScript.
                    </p>
                    <p className="pb-5">
                        I am Experienced in Frontend skills like React.js, Redux, Redux Tool
                        Kit, Axios, Tailwind CSS, CSS and many more.
                    </p>

                    <p>In backend I know Node.js, Express.js, MongoDB and MySQL</p>

                    <p>
                        With a strong penchant
                        for problem-solving, I am dedicated to crafting code that is both readable
                        and maintainable. My curiosity drives me to continuously explore and
                        master new technologies.
                    </p>
                </div>

                <div className="about-img">
                    <img
                        src={AboutImg}
                        alt="coding illustration"
                        className="lgw-[80%] md:ml-auto rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;