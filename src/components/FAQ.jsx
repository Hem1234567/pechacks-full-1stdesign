import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Who can participate in PEC Hacks 3.0?",
      answer:
        "Any student from any educational institution can participate. We welcome participants from all skill levels, from beginners to advanced developers.",
    },
    {
      question: "What is the team size limit?",
      answer:
        "Teams can have 2-4 members. You can form teams before the event or find teammates during the team formation session.",
    },
    {
      question: "Do I need to have prior coding experience?",
      answer:
        "While coding experience is helpful, it's not mandatory. We have workshops for beginners and mentors to guide you throughout the hackathon.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, charger, any hardware you might need, and enthusiasm! We'll provide food, drinks, and workspace.",
    },
    {
      question: "Is there any registration fee?",
      answer:
        "No, PEC Hacks 3.0 is completely free to participate. This includes food, accommodation (if needed), and all workshops.",
    },
    {
      question: "Will accommodation be provided?",
      answer:
        "Yes, we provide accommodation for outstation participants. Please mention this in your registration form.",
    },
    {
      question: "What if I don't have a team?",
      answer:
        "Don't worry! We have a team formation session where you can meet other participants and form teams based on skills and interests.",
    },
    {
      question: "Are there any restrictions on the project?",
      answer:
        "Your project should be original work created during the hackathon. You can use open-source libraries and APIs. Pre-built projects are not allowed.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers! Check out our most commonly asked
            questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glassmorphism rounded-xl overflow-hidden faq-item"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div className={`faq-content ${openFAQ === index ? "open" : ""}`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Still have questions?</p>
          <button className="bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 button-glow">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
