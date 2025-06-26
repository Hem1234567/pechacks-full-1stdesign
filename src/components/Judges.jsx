import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Judges = () => {
  const judges = [
    {
      name: "Dr. Priya Sharma",
      title: "Senior Director of Engineering",
      company: "Google",
      image: "/placeholder.svg",
      expertise: ["AI/ML", "Cloud Computing"],
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Rahul Mehta",
      title: "CTO & Co-founder",
      company: "TechStartup Inc",
      image: "/placeholder.svg",
      expertise: ["Full Stack", "Blockchain"],
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Sarah Johnson",
      title: "Principal Product Manager",
      company: "Microsoft",
      image: "/placeholder.svg",
      expertise: ["Product Strategy", "UX Design"],
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Prof. Arjun Singh",
      title: "Head of Computer Science",
      company: "IIT Delhi",
      image: "/placeholder.svg",
      expertise: ["Research", "Innovation"],
      social: { twitter: "#", linkedin: "#" },
    },
  ];

  return (
    <section id="judges" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Judges & Mentors
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry experts and get your projects evaluated by the
            best minds in tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-6 text-center card-hover-effect group"
            >
              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1">
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {judge.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-1">
                  {judge.title}
                </p>
                <p className="text-gray-400 text-sm mb-4">{judge.company}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {judge.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={judge.social.twitter}
                    className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={judge.social.linkedin}
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Want to be a mentor or judge?</p>
          <button className="bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 button-glow">
            Apply as Mentor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Judges;
