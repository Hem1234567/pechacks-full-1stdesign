import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiZap,
  FiUser,
  FiExternalLink,
  FiBell,
  FiDownload,
  FiBookOpen,
} from "react-icons/fi";

const WorkshopsSection = () => {
  const [activeDay, setActiveDay] = useState(1);

  const workshopsData = {
    1: {
      title: "Hackathon Survival Guide: Build Fast, Code Smarter",
      speaker: "Nikhil Kumaran",
      speakerLinkedIn: "https://linkedin.com/in/nikhilkumaran",
      description:
        "Master the art of rapid prototyping and efficient coding techniques that will give you a competitive edge in any hackathon.",
      date: "16.12.2024",
      time: "6.30 - 8.30 PM",
      registrationUrl: "https://example.com/register/day1",
    },
    2: {
      title: "Supercharging Idea Generation with Generative AI",
      speaker: "Ayush Kurlekar",
      speakerLinkedIn: "https://linkedin.com/in/ayushkurlekar",
      description:
        "Discover how to leverage generative AI tools to brainstorm innovative solutions and accelerate your ideation process.",
      date: "17.12.2024",
      time: "6.30 - 8.30 PM",
      registrationUrl: "https://example.com/register/day2",
    },
    3: {
      title: "Elevate your hackathon game with GitHub Copilot",
      speaker: "Bhawna Chauhan & Smruthi Balaji",
      speakerLinkedIn: "https://linkedin.com/in/bhawnachauhan",
      description:
        "Harness the power of AI-powered coding with GitHub Copilot to dramatically increase your coding productivity.",
      date: "18.12.2024",
      time: "6.30 - 8.30 PM",
      registrationUrl: "https://example.com/register/day3",
    },
    4: {
      title: "Dive into the world of AI-ML and Generative AI",
      speaker: "Harshavardhan Singh",
      speakerLinkedIn: "https://linkedin.com/in/harshavardhansingh",
      description:
        "Get hands-on experience with cutting-edge AI and ML technologies and learn to integrate them into projects.",
      date: "19.12.2024",
      time: "6.30 - 8.30 PM",
      registrationUrl: "https://example.com/register/day4",
    },
    5: {
      title: "Winning the Hackathon: Tips and Best Practices",
      speaker: "Mike Odnis",
      speakerLinkedIn: "https://linkedin.com/in/mikeodnis",
      description:
        "Learn proven strategies for team formation, project planning, and presentation skills from a hackathon winner.",
      date: "20.12.2024",
      time: "6.30 - 8.30 PM",
      registrationUrl: "https://example.com/register/day5",
    },
    6: {
      title: "Build a Serverless Application using AWS CDK",
      speaker: "Veerasolaiyappa",
      speakerLinkedIn: "https://linkedin.com/in/veerasolaiyappa",
      description:
        "Master cloud infrastructure and serverless architecture using AWS CDK to build scalable applications.",
      date: "21.12.2024",
      time: "6.30 - 8.30 PM",
      registrationUrl: "https://example.com/register/day6",
    },
  };

  const WorkshopCard = ({
    title,
    speaker,
    speakerLinkedIn,
    description,
    date,
    time,
    registrationUrl,
  }) => {
    return (
      <div
        id="workshops"
        className="h-full flex flex-col relative"
        data-scroll-section
      >
        {/* Workshop Title */}
        <div className="mb-6">
          <h2 className="text-3xl font-black leading-tight mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            {title}
          </h2>

          {/* Date and Time Pills */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 bg-cyan-400/10 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/30">
              <FiCalendar className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-200">
                {date}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
              <FiClock className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-200">
                {time}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-pink-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-pink-500/30">
              <FiZap className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-semibold text-pink-200">
                2 Hours
              </span>
            </div>
          </div>
        </div>

        {/* Speaker Section */}
        <div className="mb-6 p-4 bg-gradient-to-r from-gray-800/40 via-gray-900/60 to-gray-800/40 rounded-xl border border-gray-700/30 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center border border-gray-600/30">
              <FiUser className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-400 mb-1">Workshop Speaker</div>
              {speakerLinkedIn ? (
                <a
                  href={speakerLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-cyan-400 hover:to-purple-400 transition-all duration-500"
                >
                  {speaker}
                </a>
              ) : (
                <div className="text-xl font-bold text-cyan-400">{speaker}</div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex-1 mb-6">
          <h3 className="text-base font-semibold text-gray-300 mb-2">
            What You'll Learn
          </h3>
          <p className="text-gray-300 text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Register Button */}
        <div className="text-center">
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-cyan-400 hover:to-purple-500 text-black font-bold text-base px-8 py-3 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 border-0"
          >
            <FiZap className="mr-2 " />
            Register Now
            <FiExternalLink className="ml-2" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      data-scroll-section
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>

        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-10 w-16 h-16 border border-cyan-400/20 rotate-45 animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-12 h-12 border border-pink-500/20 rotate-12 animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-10 h-10 border border-purple-500/30 rounded-full animate-bounce"
          style={{ animationDuration: "6s" }}
        ></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 h-full flex flex-col">
        {/* Header Section */}
        <div className="text-center py-6">
          <h1 className="text-5xl md:text-6xl font-black mb-3 gradient-text tracking-wider">
            WORKSHOPS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-3 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform your skills with cutting-edge workshops
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 pb-6">
          {/* Left Panel - Day Selection */}
          <div className="card-hover-effect glassmorphism lg:col-span-3 bg-gradient-to-b from-gray-900/50 to-black/70 backdrop-blur-md rounded-xl border border-gray-800/50 p-4">
            <h3 className="text-xl font-bold mb-6 text-center gradient-text">
              TIMELINE
            </h3>

            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`w-full group relative overflow-hidden rounded-lg p-3 transition-all duration-500 ${
                    activeDay === day
                      ? "bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 border-cyan-400/50 shadow-md shadow-cyan-400/20"
                      : "bg-gray-800/30 border-gray-700/30 hover:bg-gray-800/50 hover:border-gray-600/50"
                  } border`}
                >
                  {/* Animated background for active state */}
                  {activeDay === day && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-bold text-white">
                        DAY {day}
                      </span>
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeDay === day
                            ? "bg-cyan-400 shadow-md shadow-cyan-400/40 animate-pulse"
                            : "bg-gray-600"
                        }`}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 font-medium">
                      {workshopsData[day].date}
                    </div>
                    <div className="text-xs text-gray-500">
                      {workshopsData[day].time}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Center Panel - Workshop Details */}
          <div className="lg:col-span-6 bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-md rounded-xl border border-gray-800/50 p-6 relative overflow-hidden glassmorphism card-hover-effect">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-400/5 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-2xl"></div>

            <div className="relative z-10 h-full">
              <WorkshopCard {...workshopsData[activeDay]} />
            </div>
          </div>

          {/* Right Panel - Quick Stats */}
          <div className="lg:col-span-3 space-y-6 ">
            {/* Workshop Stats */}
            <div className=" backdrop-blur-md rounded-xl border border-cyan-500/30 p-4 glassmorphism card-hover-effect">
              <h4 className="text-base font-bold gradient-text mb-3">
                Workshop Stats
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-semibold">
                    Total Days
                  </span>
                  <span className="text-white font-bold ">6</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-semibold">Duration</span>
                  <span className="text-white font-bold">2 Hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-semibold">Format</span>
                  <span className="text-white font-bold">Online</span>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className=" backdrop-blur-md rounded-xl border border-cyan-500/30 p-4 glassmorphism card-hover-effect">
              <h4 className="text-base font-bold gradient-text mb-3">
                Progress
              </h4>
              <div className="space-y-2">
                <div className="text-xs text-gray-400 ">
                  Workshop {activeDay} of 6
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${(activeDay / 6) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 ">
                  {Math.round((activeDay / 6) * 100)}% Complete
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className=" backdrop-blur-md rounded-xl border border-cyan-500/30 p-4 glassmorphism card-hover-effect">
              <h4 className="text-base font-bold gradient-text mb-3">
                Quick Actions
              </h4>
              <div className="space-y-2">
                <button className="w-full flex items-center text-left p-2 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-all duration-300 text-xs font-semibold">
                  <FiBookOpen className="mr-2" />
                  View All Workshops
                </button>
                <button className="w-full flex items-center text-left p-2 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-all duration-300 text-xs font-semibold">
                  <FiBell className="mr-2" />
                  Set Reminders
                </button>
                <button className="w-full flex items-center text-left p-2 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-all duration-300 text-xs font-semibold">
                  <FiDownload className="mr-2" />
                  Download Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsSection;
