// components/Timeline.js
import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "March 15",
      time: "9:00 AM",
      title: "Registration & Check-in",
      description: "Team registration and welcome breakfast",
      icon: "🎯",
    },
    {
      date: "March 15",
      time: "11:00 AM",
      title: "Opening Ceremony",
      description: "Keynote speech and hackathon rules briefing",
      icon: "🚀",
    },
    {
      date: "March 15",
      time: "12:00 PM",
      title: "Hacking Begins",
      description: "Start building your amazing projects",
      icon: "💻",
    },
    {
      date: "March 15",
      time: "6:00 PM",
      title: "Workshop: AI/ML Fundamentals",
      description: "Learn the basics of machine learning",
      icon: "🤖",
    },
    {
      date: "March 16",
      time: "10:00 AM",
      title: "Workshop: Web3 Development",
      description: "Introduction to blockchain and DApps",
      icon: "⛓️",
    },
    {
      date: "March 16",
      time: "2:00 PM",
      title: "Mentoring Sessions",
      description: "One-on-one guidance from industry experts",
      icon: "👨‍🏫",
    },
    {
      date: "March 17",
      time: "10:00 AM",
      title: "Project Submissions",
      description: "Final submission deadline",
      icon: "📤",
    },
    {
      date: "March 17",
      time: "2:00 PM",
      title: "Presentations",
      description: "Teams present their projects to judges",
      icon: "🎤",
    },
    {
      date: "March 17",
      time: "5:00 PM",
      title: "Closing Ceremony",
      description: "Winners announcement and prize distribution",
      icon: "🏆",
    },
  ];

  return (
    <section id="timeline" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Event Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            48 hours of non-stop innovation, learning, and networking
          </p>
        </div>

        <div className="relative">
          <div className="timeline-line min-h-full"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } gap-8`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="glassmorphism rounded-xl p-6 card-hover-effect">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{event.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {event.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold">
                          {event.date} at {event.time}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full border-4 border-black"></div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 button-glow">
            Download Detailed Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
