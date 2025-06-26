// components/Hero.js
import React, { useEffect, useState, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Calendar, Zap, Users } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameId = useRef(null);
  const mousePositionRef = useRef({ x: null, y: null });
  const interactionRadius = 150;

  // Particle effects setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      const colors = ["#00D4FF", "#8B5CF6", "#F472B6", "#10B981", "#F97316"];
      const particleCount = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 2000),
        200
      );

      particlesRef.current = Array.from({ length: particleCount }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = Math.random() * 0.5 + 0.1;
        const angle = Math.random() * Math.PI * 2;

        return {
          x,
          y,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.3 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          baseSpeedX: Math.cos(angle) * speed,
          baseSpeedY: Math.sin(angle) * speed,
        };
      });
    };

    const handleMouseMove = (e) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const updateParticles = () => {
      const mouseX = mousePositionRef.current.x;
      const mouseY = mousePositionRef.current.y;

      particlesRef.current.forEach((particle) => {
        if (mouseX !== null && mouseY !== null) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            const forceX = Math.cos(angle) * force * 3;
            const forceY = Math.sin(angle) * force * 3;

            particle.speedX = forceX;
            particle.speedY = forceY;
          } else {
            particle.speedX += (particle.baseSpeedX - particle.speedX) * 0.05;
            particle.speedY += (particle.baseSpeedY - particle.speedY) * 0.05;
          }
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        const margin = particle.size;
        if (particle.x < margin) {
          particle.x = margin;
          particle.speedX *= -0.5;
          particle.baseSpeedX *= -1;
        } else if (particle.x > canvas.width - margin) {
          particle.x = canvas.width - margin;
          particle.speedX *= -0.5;
          particle.baseSpeedX *= -1;
        }

        if (particle.y < margin) {
          particle.y = margin;
          particle.speedY *= -0.5;
          particle.baseSpeedY *= -1;
        } else if (particle.y > canvas.height - margin) {
          particle.y = canvas.height - margin;
          particle.speedY *= -0.5;
          particle.baseSpeedY *= -1;
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const connectionDistance = 120;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `${p1.color}${Math.floor(opacity * 15)
              .toString(16)
              .padStart(2, "0")}`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      particlesRef.current.forEach((particle) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const GlowButton = ({ children, variant, icon, onClick, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    const variantStyles = {
      primary: {
        gradient: "from-cyan-400 to-blue-600",
        glow: "rgba(0, 217, 255, 0.4)",
        border: "border-cyan-400/50",
      },
      secondary: {
        gradient: "from-purple-400 to-pink-600",
        glow: "rgba(168, 85, 247, 0.4)",
        border: "border-purple-400/50",
      },
      accent: {
        gradient: "from-green-400 to-cyan-600",
        glow: "rgba(16, 185, 129, 0.4)",
        border: "border-green-400/50",
      },
    };

    const style = variantStyles[variant];

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`relative group ${className}`}
      >
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
            style.gradient
          } opacity-20 blur-xl transition-opacity duration-300 ${
            isHovered ? "opacity-40" : ""
          }`}
        />

        <button
          onClick={onClick}
          className={`
            relative w-full px-6 py-3 sm:px-8 sm:py-3
            text-sm sm:text-base font-semibold
            bg-black/50 backdrop-blur-sm
            border-2 ${style.border}
            hover:bg-black/70
            transition-all duration-300
            ${isHovered ? "text-white" : "text-gray-300"}
            rounded-xl
            cursor-pointer
          `}
          style={{
            boxShadow: isHovered
              ? `0 0 20px ${style.glow}, 0 0 40px ${style.glow}`
              : `0 0 10px ${style.glow}`,
          }}
        >
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${
              style.gradient
            } opacity-0 transition-opacity duration-300 ${
              isHovered ? "opacity-10" : ""
            }`}
          />

          <div className="relative flex items-center justify-center gap-2 sm:gap-3">
            {icon && (
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {icon}
              </motion.div>
            )}
            <span>{children}</span>
          </div>
        </button>
      </motion.div>
    );
  };

  const CTAButtons = () => {
    return (
      <div className="flex flex-col items-center mt-8 sm:mt-12">
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center w-full px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto md:flex-nowrap">
            <GlowButton
              variant="primary"
              icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5" />}
              onClick={() => window.open("https://pechacks.org/", "_blank")}
              className="w-full sm:w-auto"
            >
              Visit 2.0
            </GlowButton>

            <GlowButton
              variant="accent"
              icon={<Users className="w-4 h-4 sm:w-5 sm:h-5" />}
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/FtFHlapbGqPBxtZomqR5Km",
                  "_blank"
                )
              }
              className="w-full sm:w-auto"
            >
              Join our community
            </GlowButton>
          </div>

          <GlowButton
            variant="secondary"
            icon={<Zap className="w-4 h-4 sm:w-5 sm:h-5" />}
            onClick={() => console.log("Pre-register clicked")}
            className="w-full sm:w-auto"
          >
            Pre-register here
          </GlowButton>
        </motion.div>

        {/* Scroll indicator positioned below buttons */}
        <motion.div
          className="flex flex-col items-center mt-12 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <FaArrowDown className="w-5 h-5 text-cyan-400" />
          <p className="text-sm text-gray-400 mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    );
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      data-scroll-section
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-70"
      />

      {/* Content */}
      <div
        className="container mx-auto px-6 text-center relative z-10 pt-8"
        data-scroll
        data-scroll-speed="1"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-3 w-full px-4"
        >
          <div className="space-y-2 sm:space-y-1">
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              data-scroll
              data-scroll-speed="0.5"
            >
              {/* Main heading with enhanced glow effect */}
              <h1 className="text-[clamp(3.1rem,7vw,6rem)] font-black relative leading-[1.1] cursor-default ">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent blur-sm animate-pulse">
                  PEC HACKS
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-300 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-text-glow">
                  PEC HACKS
                </span>
                <span className="relative bg-gradient-to-r from-white via-cyan-200 via-purple-200 via-pink-200 to-white bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                  PEC HACKS
                </span>
              </h1>
            </motion.div>

            {/* Version number with rotating circles */}
            <motion.div
              className="relative flex justify-center mt-2 sm:mt-4"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
            >
              <div className="relative group">
                {/* Spinner Circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-[clamp(8rem,20vw,16rem)] h-[clamp(6rem,13vw,10rem)] border-2 border-cyan-400/30 rounded-full animate-spin"
                    style={{ animationDuration: "8s" }}
                  >
                    <div
                      className="absolute inset-[0.5rem] border border-purple-500/50 rounded-full animate-spin"
                      style={{
                        animationDuration: "6s",
                        animationDirection: "reverse",
                      }}
                    >
                      <div
                        className="absolute inset-[0.5rem] border border-pink-500/30 rounded-full animate-spin"
                        style={{ animationDuration: "4s" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Version number text layers */}
                <div className="absolute inset-0 text-[clamp(3rem,7vw,5rem)] font-black cursor-default">
                  <span className="absolute inset-0 text-cyan-400 blur-[clamp(8px,1vw,16px)] animate-pulse transform -translate-x-2 -translate-y-2">
                    3.0
                  </span>
                  <span
                    className="absolute inset-0 text-purple-500 blur-[clamp(5px,0.6vw,10px)] animate-pulse transform translate-x-1 translate-y-1"
                    style={{ animationDelay: "1s" }}
                  >
                    3.0
                  </span>
                  <span
                    className="absolute inset-0 text-pink-500 blur-[clamp(3px,0.4vw,6px)] animate-pulse transform translate-x-2 -translate-y-1"
                    style={{ animationDelay: "2s" }}
                  >
                    3.0
                  </span>
                </div>

                <div className="relative text-[clamp(3rem,7vw,5rem)] font-black cursor-default">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent transform translate-x-1 translate-y-1 opacity-30">
                    3.0
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-l from-cyan-300 via-white to-pink-300 bg-clip-text text-transparent transform -translate-x-1 -translate-y-1">
                    3.0
                  </span>
                  <span className="relative bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                    3.0
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div
            className="text-[clamp(1.3rem,1.8vw,1.8rem)] font-light max-w-[90vw] md:max-w-3xl mx-auto leading-relaxed space-y-2 sm:space-y-2 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.2,
              ease: "easeOut",
            }}
          >
            <p className="cursor-default">
              <span className="text-gray-300 font-semibold">Tamil Nadu's </span>
              <span className="gradient-text font-bold animate-gradient bg-[length:200%_200%]">
                Largest Hackathon
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-400">
              Dec 15-17, 2025 | Panimalar Engineering College
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons with scroll indicator */}
        <CTAButtons />
      </div>
    </section>
  );
};

export default Hero;
