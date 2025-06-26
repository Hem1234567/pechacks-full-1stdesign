// components/Sponsors.js
import React from "react";
import {
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaAmazon,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiTesla, SiNetflix, SiSpotify, SiIntel } from "react-icons/si";

const Sponsors = () => {
  const sponsors = [
    { name: "TechCorp", icon: <FaGoogle size={48} />, tier: "Platinum" },
    { name: "InnovateLabs", icon: <FaMicrosoft size={48} />, tier: "Gold" },
    { name: "DevTools Inc", icon: <FaApple size={48} />, tier: "Gold" },
    { name: "StartupX", icon: <FaAmazon size={48} />, tier: "Silver" },
    { name: "CodeBase", icon: <FaFacebook size={48} />, tier: "Silver" },
    { name: "TechHub", icon: <FaTwitter size={48} />, tier: "Silver" },
    { name: "BuildFast", icon: <FaLinkedin size={48} />, tier: "Bronze" },
    { name: "WebFlow", icon: <FaGithub size={48} />, tier: "Bronze" },
    { name: "FutureTech", icon: <SiTesla size={48} />, tier: "Bronze" },
    { name: "MediaPlus", icon: <SiNetflix size={48} />, tier: "Bronze" },
    { name: "SoundWave", icon: <SiSpotify size={48} />, tier: "Bronze" },
    { name: "ChipMasters", icon: <SiIntel size={48} />, tier: "Bronze" },
  ];

  return (
    <section id="sponsors" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Sponsors & Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by amazing companies that believe in innovation and student
            talent
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Platinum Sponsors
          </h3>
          <div className="flex justify-center flex-wrap gap-8">
            {sponsors
              .filter((s) => s.tier === "Platinum")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="glassmorphism rounded-2xl p-8 card-hover-effect"
                >
                  <div className="text-cyan-400 hover:text-white transition-colors duration-300">
                    {sponsor.icon}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-center text-white mb-8">
            Gold Sponsors
          </h3>
          <div className="flex justify-center flex-wrap gap-6">
            {sponsors
              .filter((s) => s.tier === "Gold")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="glassmorphism rounded-xl p-6 card-hover-effect"
                >
                  <div className="text-purple-400 hover:text-white transition-colors duration-300">
                    {sponsor.icon}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-center text-white mb-8">
              Silver Sponsors
            </h3>
            <div className="flex justify-center flex-wrap gap-4">
              {sponsors
                .filter((s) => s.tier === "Silver")
                .map((sponsor, index) => (
                  <div
                    key={index}
                    className="glassmorphism rounded-lg p-4 card-hover-effect"
                  >
                    <div className="text-gray-300 hover:text-white transition-colors duration-300">
                      {sponsor.icon}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-center text-white mb-8">
              Bronze Sponsors
            </h3>
            <div className="flex justify-center flex-wrap gap-4">
              {sponsors
                .filter((s) => s.tier === "Bronze")
                .map((sponsor, index) => (
                  <div
                    key={index}
                    className="glassmorphism rounded-lg p-4 card-hover-effect"
                  >
                    <div className="text-gray-400 hover:text-white transition-colors duration-300">
                      {sponsor.icon}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Interested in sponsoring PEC Hacks 3.0?
          </p>
          <button className="bg-gradient-to-r from-green-400 to-cyan-600 hover:from-green-500 hover:to-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 button-glow">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
