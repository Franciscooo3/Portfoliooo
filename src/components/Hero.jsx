import React from "react";
import hero from "../assets/images/hero.jpeg";

const Hero = ({ contactRef }) => {
  const socialMediaLinks = [
    { icon: "logo-instagram", url: "https://www.instagram.com/ciscooo717?igsh=cjQ4Z28xcmVlYzYy"},
    { icon: "logo-facebook", url: "https://www.facebook.com/Ciscooooooooo"},
    { icon: "logo-linkedin", url: "https://www.linkedin.com/in/francisco-bautista-iii-1a764b353"},
  ];

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-[#F9F6F2]" // Set background to light color
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <div className="relative w-full h-full max-w-md md:max-w-lg overflow-hidden rounded-lg shadow-lg"> {/* Dynamic frame */}
          <img src={hero} alt="" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" /> {/* Image with hover effect */}
        </div>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-[#38470B] font-bold"> {/* Dark color for main text */}
            <span className="md:text-6xl text-5xl text-[#F1D6AB]"> {/* Accent color for greeting */}
              Hello!
              <br />
            </span>
            My Name is <span className="text-[#A0855B]">Francisco Bautista III</span> {/* Medium color for name */}
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-[#A0855B]">
            Full-Time Student
          </h4>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMediaLinks.map(({ icon, url }) => (
              <a
                key={icon}
                href={url}
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice
                className="text-[#38470B] hover:text-[#F1D6AB] cursor-pointer" // Dark color with accent on hover
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;