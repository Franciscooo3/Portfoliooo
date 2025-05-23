import React from "react";
import hireMe from "../assets/images/hireMe.png";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 bg-[#F9F6F2] text-[#38470B]"> {/* Set background to light color and text to dark color */}
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-[#F1D6AB]">Me</span> {/* Accent color for "Me" */}
        </h3>
        <p className="text-[#A0855B] mt-1 text-lg">Do you have any work?</p> {/* Reduced margin-top for the introduction */}
      </div>
      <div className="bg-[#A0855B] relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-12 flex gap-6 lg:flex-row flex-col-reverse items-center"> {/* Adjusted margin-top for the container */}
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-[#F9F6F2] leading-6"> {/* Light color for text */}
            I am a passionate and dedicated Computer Engineering student with strong problem-solving skills and
            a commitment to continuous learning. My drive for innovation ensures I bring fresh, effective 
            solutions to any project. Hire me, and you’ll gain a motivated team player ready to deliver results.
          </p>
        </div>
        <img
          src={hireMe}
          alt="Hire Me"
          className="lg:h-[25rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;