import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p className="font-light text-xl">
          I am currently open for a fulltime MERN Stack Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>
        <br />
        <p className="py-2 font-thin text-md">
          <span >Email:</span> ajmalaj8085@gmail.com
        </p>
        <p className="py-2 font-thin text-md">
          <span>Whatsapp:</span>+91 9539706416
        </p>
        <p className="py-2 font-thin text-md">
          <span>Phone:<a href="tel:+917306129332">+91 7306129332</a></span>
        </p>
      </div>
    </section>
  );
};

export default Contact;