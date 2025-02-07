import React from 'react';
import Image from 'next/image';
import Testimonials from "./Testimonials";

export default function MarketingStats() {
  const stats = [
    {
      number: "1M+",
      text: "Personalized messages sent to art buyers and fans."
    },
    {
      number: "85%",
      text: "Increase in client engagement through AI-powered matching."
    },
    {
      number: "70%",
      text: "Of users say Sulio AI helped them reduce admin time by at least a quarter."
    },
    {
      number: "50+",
      text: "Industries successfully transformed with personalized AI solutions."
    },
  ];

  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <Testimonials />

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-3">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-snug font-semibold">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl overflow-hidden max-w-5xl mx-auto">
            <div className="p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8 flex items-center">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Ready to Transform Your Workflow?
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base">
                    Unlock up to 40% time savings in the first month with Sulio AI
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 mb-2 shadow-lg hover:shadow-xl text-lg">
                  Start Free Trial
                </button>
                <p className="text-xs text-gray-400">
                  No credit card required • 30 days free
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}