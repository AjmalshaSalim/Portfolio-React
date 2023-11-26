import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      className="skill bg-accent text-white px-10 pb-10 py-32 m-0 p-0"
      id="skills"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="text-4xl font-medium  mb-5 border-b-[5px] w-[180px] border-lime-400 pb-2">
                Skills
              </h2>
              <p className="font-thin tracking-wider">
                I have honed a diverse range of technological expertise through
                extensive hands-on experience and a deep passion for innovation.
                <br></br>I take immense pride in my proficiency in the following
                technologies, which I have consistently utilized to deliver
                exceptional<br></br>
                results across various projects and initiatives.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider font-thin"
              >
                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="Imag"
                  />
                  <h5 className="pt-8">MONGO DB</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                    alt="Imag"
                    className=" bg-white rounded-full"
                  />
                  <h5 className="pt-8">EXPRESS JS</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="Imag"
                  />
                  <h5 className="pt-8">REACT JS</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
                    alt="Imag"
                  />
                  <h5 className="pt-8">NODE JS</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    alt="Imag"
                  />
                  <h5 className="pt-8">REDUX</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="Imag"
                  />
                  <h5 className="pt-8">HTML</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="Imag"
                  />
                  <h5 className="pt-8">CSS</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="Imag"
                  />
                  <h5 className="pt-8">JAVASCRIPT</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Imag"
                    className=" bg-white rounded-3xl"
                  />
                  <h5 className="pt-8">BOOTSTRAP</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    alt="Imag"
                    className="rounded-3xl bg-slate-800"
                  />
                  <h5 className="pt-8">TAILWIND</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="Imag"
                  />
                  <h5 className="pt-8">FIGMA</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="Imag"
                  />
                  <h5 className="pt-8">MYSQL</h5>
                </div>

                <div className="item text-center">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png"
                    alt="Imag"
                    className=" bg-white rounded-full"
                  />
                  <h5 className="pt-8">AWS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Imag" />
    </section>
  );
};
