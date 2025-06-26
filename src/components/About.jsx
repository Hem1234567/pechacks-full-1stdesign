import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About PEC Hacks 3.0
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join us for 48 hours of innovation, collaboration, and creativity as
            we bring together the brightest minds to solve real-world problems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            data-scroll
            data-scroll-speed="0.5"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              What is PEC Hacks?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              PEC Hacks is Punjab's premier hackathon that brings together
              students, developers, designers, and innovators from across the
              country. It's more than just a coding competition – it's a
              platform for learning, networking, and building solutions that can
              change the world.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're a seasoned developer or just starting your journey,
              PEC Hacks provides the perfect environment to showcase your
              skills, learn new technologies, and connect with like-minded
              individuals.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            data-scroll
            data-scroll-speed="-0.5"
          >
            <div className="glassmorphism rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-400">
                    Push boundaries with cutting-edge solutions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Collaboration
                  </h4>
                  <p className="text-gray-400">
                    Work with diverse teams and perspectives
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Learning
                  </h4>
                  <p className="text-gray-400">
                    Workshops and mentorship sessions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Competition
                  </h4>
                  <p className="text-gray-400">
                    Compete for amazing prizes and recognition
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "3", text: "Years Running" },
            { number: "50+", text: "Colleges" },
            { number: "100+", text: "Projects" },
            { number: "20+", text: "Mentors" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-xl p-6 card-hover-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {item.number}
              </div>
              <div className="text-gray-400">{item.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
