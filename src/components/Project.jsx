import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";
import RArmImg1 from "../assets/images/RArm1.jpg";
import RArmImg2 from "../assets/images/RArm2.jpg";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef(null);

  const slides = [
    {
      name: "Text Based Game using C++",
      github_link: "https://github.com/Franciscooo3/Text-Based-Game",
      live_link: null,
    },
    {
      name: "Live Website with Database",
      github_link: "https://github.com/AVINGIRS/AVINGIRS-ASIMBOL",
      live_link: "https://avingirs.github.io/AVINGIRS-ASIMBOL/",
    },
    {
      name: "Robot Arm",
      images: [RArmImg1, RArmImg2],
      description:
        "We developed a robotic arm powered by metal gear servos for precise joint movement, controlled by an Arduino Uno and operated using potentiometers as input devices.",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const modalContentClick = (e) => e.stopPropagation();

  return (
    <section id="projects" className="py-10 bg-[#DCD7C9] text-[#2C3930] relative">
      <div className="text-center mb-6">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#A27B5C]">Projects</span>
        </h3>
        <p className="text-[#3F4F44] text-lg">Some things I’ve built</p>
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="pb-28"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-fit w-full p-6 bg-white border border-[#A27B5C] rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl my-4 font-semibold text-[#2C3930]">
                {slides[0].name}
              </h3>
              <a
                href={slides[0].github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C3930] border border-[#2C3930] hover:bg-[#3F4F44] hover:text-white px-3 py-1 rounded-md transition duration-300"
              >
                GitHub
              </a>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="h-fit w-full p-6 bg-white border border-[#A27B5C] rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl my-4 font-semibold text-[#2C3930]">
                {slides[1].name}
              </h3>
              <div className="flex gap-3">
                <a
                  href={slides[1].github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2C3930] border border-[#2C3930] hover:bg-[#3F4F44] hover:text-white px-3 py-1 rounded-md transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href={slides[1].live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2C3930] border border-[#2C3930] hover:bg-[#3F4F44] hover:text-white px-3 py-1 rounded-md transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="h-fit w-full p-6 bg-white border border-[#A27B5C] rounded-xl shadow-md hover:shadow-lg transition text-center relative">
              <h3 className="text-xl my-4 font-semibold text-[#2C3930]">
                {slides[2].name}
              </h3>
              <p className="text-[#3F4F44] px-4 mb-6 max-w-xl mx-auto">
                {slides[2].description}
              </p>

              <button
                ref={buttonRef}
                onClick={openModal}
                className="text-[#2C3930] border border-[#2C3930] hover:bg-[#A27B5C] hover:text-white px-4 py-2 rounded-md transition duration-300"
              >
                View Photos
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Modal Overlay */}
      {isModalOpen &&
        createPortal(
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          >
            <div
              onClick={modalContentClick}
              className="bg-white rounded-xl p-6 max-w-lg w-full relative flex justify-center items-center"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-[#2C3930] hover:text-[#A27B5C] text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>

              <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="rounded w-full max-w-md"
              >
                {slides[2].images.map((img, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="flex justify-center items-center"
                  >
                    <img
                      src={img}
                      alt={`Robot Arm ${idx + 1}`}
                      className="max-h-[70vh] object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Project;
