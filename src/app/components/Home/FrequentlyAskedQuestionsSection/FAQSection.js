import React from "react";

export default function FrequentlyAskedQuestions() {
  const faqs = [
    {
      question: "How can Sulio AI help me sell more art?",
      answer:
        "Sulio AI helps by automatically engaging with potential buyers and recommending your art based on their preferences. Many artists see a 20-30% increase in sales within the first few months by leveraging the chatbot to build deeper connections with their audience.",
    },
    {
      question: "Do I need any technical skills to use the AI chatbot?",
      answer:
        "No technical skills are required! Sulio AI is designed to be user-friendly and intuitive. With pre-configured templates and easy-to-follow guides, you can get set up in minutes, allowing you to focus on your art while we handle the rest.",
    },
    {
      question: "How secure is the platform for handling my transactions?",
      answer:
        "Sulio AI takes security very seriously. We use industry-standard encryption to ensure that your personal data, financial information, and transactions are safe. All transactions are tracked transparently, and you have full visibility at every step.",
    },
    {
      question: "Can I customize the way Sulio AI interacts with my followers?",
      answer:
        "Yes! You can fully customize the chatbot responses to fit your personal tone and style. Whether you want to greet new followers, answer common questions, or share stories about your work, Sulio AI can be tailored to reflect your unique artistic voice.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Header Section */}
      <div
        className="w-full md:w-1/2"
        style={{
          backgroundImage: "url(/images/FAQ.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="relative text-3xl md:text-5xl font-bold md:left-1/4 md:top-1/2 w-fit">
          Frequently
          <br />
          Asked
          <br />
          Questions
        </div>
        <div className="md:text-lg text-sm text-black leading-tight tracking-tighter relative right-0 bg-red-500">
          Here are four common questions that artists might ask when using
          Sulio's AI Chatbot Assistant, along with answers
        </div>
      </div>
      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12 my-auto">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="border border-[rgb(180,148,148)] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform duration-150"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6">
                    <h2 className="text-lg text-justify tracking-tighter font-semibold pr-8">
                      {faq.question}
                    </h2>
                    <span className="transition-transform duration-200 group-open:rotate-180">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="transition-all max-h-0 group-open:max-h-screen duration-700 overflow-hidden px-6 pb-6">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
