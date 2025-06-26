import React from "react";
import { motion } from "framer-motion";

const EventGlimpse = () => {
  const images = [
    {
      src: "/placeholder.svg",
      alt: "Hackathon coding session",
      title: "Intense Coding Sessions",
    },
    {
      src: "/placeholder.svg",
      alt: "Team collaboration",
      title: "Team Collaboration",
    },
    {
      src: "/placeholder.svg",
      alt: "Mentorship session",
      title: "Expert Mentorship",
    },
    {
      src: "/placeholder.svg",
      alt: "Prize ceremony",
      title: "Prize Distribution",
    },
    { src: "/placeholder.svg", alt: "Networking event", title: "Networking" },
    {
      src: "/placeholder.svg",
      alt: "Innovation showcase",
      title: "Innovation Showcase",
    },
  ];

  return (
    <section id="glimpse" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Event Glimpse
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Relive the excitement and energy from our previous hackathons
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl card-hover-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <button className="bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 button-glow">
            View All Photos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventGlimpse;
