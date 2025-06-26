import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Domains = () => {
  const [selectedTrack, setSelectedTrack] = useState(0);

  const tracks = [
    {
      title: "Web Development",
      description: "Build stunning web applications using modern frameworks",
      icon: "🌐",
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
      color: "from-cyan-400 to-blue-600",
    },
    {
      title: "Mobile Development",
      description: "Create innovative mobile apps for iOS and Android",
      icon: "📱",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-purple-400 to-pink-600",
    },
    {
      title: "AI/ML",
      description: "Develop intelligent solutions using machine learning",
      icon: "🤖",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      color: "from-green-400 to-cyan-600",
    },
    {
      title: "Blockchain",
      description: "Build decentralized applications and smart contracts",
      icon: "⛓️",
      technologies: ["Solidity", "Web3.js", "Ethereum", "Polygon"],
      color: "from-yellow-400 to-orange-600",
    },
    {
      title: "IoT",
      description: "Connect the physical world with smart devices",
      icon: "🌐",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN"],
      color: "from-red-400 to-pink-600",
    },
    {
      title: "Game Development",
      description: "Create immersive gaming experiences",
      icon: "🎮",
      technologies: ["Unity", "Unreal Engine", "Godot", "C#"],
      color: "from-indigo-400 to-purple-600",
    },
  ];

  return (
    <section id="domains" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Tracks & Domains
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your domain and showcase your skills in cutting-edge
            technologies
          </p>
        </div>

        {/* Track Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tracks.map((track, index) => (
            <button
              key={index}
              onClick={() => setSelectedTrack(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedTrack === index
                  ? `bg-gradient-to-r ${track.color} text-white shadow-lg`
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {track.icon} {track.title}
            </button>
          ))}
        </div>

        {/* Selected Track Details */}
        <div className="max-w-4xl mx-auto">
          <div
            className="glassmorphism rounded-2xl p-8 card-hover-effect"
            key={selectedTrack}
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{tracks[selectedTrack].icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {tracks[selectedTrack].title}
              </h3>
              <p className="text-xl text-gray-300">
                {tracks[selectedTrack].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Popular Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {tracks[selectedTrack].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${tracks[selectedTrack].color} text-white text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  What You'll Build
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Innovative solutions to real-world problems</li>
                  <li>• Scalable and user-friendly applications</li>
                  <li>• Integration with modern APIs and services</li>
                  <li>• Deployment-ready projects</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                className={`bg-gradient-to-r ${tracks[selectedTrack].color} text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 button-glow`}
              >
                Choose This Track
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;
