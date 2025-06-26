// components/Prizes.js
import React from "react";

const Prizes = () => {
  const prizes = [
    {
      position: "1st Place",
      amount: "₹2,00,000",
      description: "Winner takes all",
      color: "from-yellow-400 to-orange-600",
      icon: "🥇",
    },
    {
      position: "2nd Place",
      amount: "₹1,50,000",
      description: "Second place winner",
      color: "from-gray-300 to-gray-500",
      icon: "🥈",
    },
    {
      position: "3rd Place",
      amount: "₹1,00,000",
      description: "Third place winner",
      color: "from-orange-400 to-red-600",
      icon: "🥉",
    },
  ];

  const specialPrizes = [
    { title: "Best UI/UX Design", amount: "₹25,000", icon: "🎨" },
    { title: "Best Innovation", amount: "₹25,000", icon: "💡" },
    { title: "Best Beginner Project", amount: "₹15,000", icon: "🌟" },
    { title: "People's Choice", amount: "₹15,000", icon: "❤️" },
  ];

  return (
    <section id="prizes" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Prizes & Rewards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compete for amazing prizes worth over ₹5 Lakhs and get recognized
            for your innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-8 text-center card-hover-effect"
            >
              <div className="text-6xl mb-4">{prize.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {prize.position}
              </h3>
              <div
                className={`text-4xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-4`}
              >
                {prize.amount}
              </div>
              <p className="text-gray-400">{prize.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Special Category Prizes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((prize, index) => (
              <div
                key={index}
                className="glassmorphism rounded-xl p-6 text-center card-hover-effect"
              >
                <div className="text-3xl mb-3">{prize.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {prize.title}
                </h4>
                <div className="text-2xl font-bold gradient-text">
                  {prize.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glassmorphism rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Additional Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Job Opportunities
              </h4>
              <p className="text-gray-400">
                Direct interviews with partner companies
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Certificates
              </h4>
              <p className="text-gray-400">
                Official participation and achievement certificates
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Mentorship
              </h4>
              <p className="text-gray-400">
                3-month mentorship program for winners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
