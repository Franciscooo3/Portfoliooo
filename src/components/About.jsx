import React from "react";
import aboutImg from "../assets/images/about.jpeg";

const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "03" },
    { text: "Companies Work", count: "00" },
  ];

  return (
    <section id="about" className="py-10 bg-[#DCD7C9] text-[#2C3930]"> {/* Set background to light color and text to dark color */}
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-[#A27B5C]">Me</span> {/* Accent color for "Me" */}
        </h3>
        <p className="text-[#3F4F44] my-3 text-lg">My introduction</p> {/* Medium dark color for the introduction */}
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-[#3F4F44] my-3"> {/* Medium dark color for the text */}
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hello! My name is Francisco A. Bautista III, and I am a second-year Computer Engineering student. 
                My academic background has equipped me with the skills to approach problems both critically 
                and creatively. My passion for all things related to computers has driven me to pursue a career 
                that aligns with my hobbies and interests. Based in Mandaluyong City, I continue to build on my 
                knowledge and credentials. While my journey of growth is still ongoing, I am dedicated to delivering 
                on any challenges you may present.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-[#2C3930]"> {/* Dark color for count */}
                      {content.count}
                      <span className="text-[#A27B5C]">+</span> {/* Accent color for the plus sign */}
                    </h3>
                    <span className="md:text-base text-xs text-[#3F4F44]">{content.text}</span> {/* Medium dark color for text */}
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/CV.pdf" download>
                <button className="bg-[#A27B5C] text-white py-2 px-4 rounded hover:bg-[#3F4F44]">Download CV</button> {/* Button with accent color */}
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-[#3F4F44] rounded-xl" // Set background to medium dark color
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;