import React from "react";
import Netflix from "../assets/Brototype.jpg";
import Bigshopy from "../assets/Bigshopy.png";

const Blog = () => {
    const Blog = [
        {
            img: Bigshopy,
            title: "Bigshopy",
            desc: " An E-commerece Website. Built with CSS, Bootstrap, Node.js, Express.js, MongoDB & MVC Architeture.",
            live: "https://www.bigshopy.live/",
            code: "https://github.com/AjmalshaSalim/BIG-SHOPY",
        },
        {
            img: Netflix,
            title: "Netflix Clone",
            desc: "Netflix official website's clone. Built with CSS, Bootstrap, React, TMDb Database, Axios and JavaScript",
            live: "https://netflix-movieseries.netlify.app/",
            code: "https://github.com/AjmalshaSalim/Netflix-Clone",
        },
       
    ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Experiences
          </h2>

          <p className="pb-5 font-light ">Attended Courses And Interships</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
      {Blog.map((project, i) => {
                    return (
                        <div className="relative" key={i}>
                            <img src={project.img} alt={project.title} />
                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-90 rounded-md">
                                <p className="py-5 text-center font-bold px-2 text-white">
                                    {project.desc}
                                </p>

                                <div className="mx-auto">
                                    <a
                                        href={project.live}
                                        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold rounded-md"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.code}
                                        className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold rounded-md"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
      </div>
    </section>
  );
};

export default Blog;