import React from "react";

const Contact = () => {
  const socialMediaLinks = [
    { logo: "logo-facebook", url: "https://www.facebook.com/Ciscooooooooo",label: "Facebook" },
    { logo: "mail", url: "mailto:mfbautista@tip.edu.ph", label: "Email" },
    { logo: "logo-instagram", url: "https://www.instagram.com/ciscooo717?igsh=cjQ4Z28xcmVlYzYy", label: "Instagram" },
    { logo: "logo-linkedin", url: "https://www.linkedin.com/in/francisco-bautista-iii-1a764b353",label: "LinkedIn" },
    { logo: "logo-whatsapp", url: "https://wa.me/639922489030", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="py-10 px-3 bg-[#DCD7C9] text-[#38470B] flex items-center justify-center">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Connect with <span className="text-[#F1D6AB]">Me</span>
        </h3>
        <p className="text-[#A0855B] mt-3 text-lg">Follow me on social media</p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-7xl w-full mx-auto">
          {socialMediaLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bubble flex items-center justify-center w-16 h-16 rounded-full bg-[#A0855B] text-white text-2xl hover:bg-[#F1D6AB] transition duration-300"
              aria-label={social.label}
            >
              <ion-icon name={social.logo}></ion-icon>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;