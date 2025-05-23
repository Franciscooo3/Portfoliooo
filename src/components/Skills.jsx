import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Beginner",
      count: 25,
    },
    {
      logo: "logo-css3",
      level: "Beginner",
      count: 10,
    },
    {
      logo: "logo-nodejs",
      level: "Novice",
      count: 40,
    },
    {
      logo: "logo-react",
      level: "Novice",
      count: 30,
    },
  ];

  return (
    <section id="skills" className="py-10 bg-[#F9F6F2] relative"> {/* Set background to light color */}
      <div className="mt-8 text-[#38470B] text-center"> {/* Set text color to dark */}
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#F1D6AB]">Skills</span> {/* Accent color for "Skills" */}
        </h3>
        <p className="text-[#A0855B] mt-3 text-lg">My knowledge</p> {/* Medium color for the introduction */}
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-[#F1D6AB] relative min-w-[10rem] max-w-[16rem] bg-[#A0855B] p-10 rounded-xl" // Set card background to medium color
            >
              <div
                style={{
                  background: `conic-gradient(#38470B ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-[#A0855B] rounded-full flex items-center justify-center group-hover:text-[#F1D6AB]"> {/* Change icon color on hover */}
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;