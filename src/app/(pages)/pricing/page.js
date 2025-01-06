import { ArrowRight } from 'lucide-react';
import PricingComparison from '@/app/components/Pricing/PricingComparison';

export default function Page() {
  const plansTitle = ["Free", "Plus", "Prem", "Pro"];
  const plansPoints = [
    [
      "✓ 10 queries/month",
      "✓ 20MB storage",
      "✓ Simple recommendation",
      "✓ Daily fortune draw game",
      "✗ Personalized greetings",
      "✗ Basic artwork queries",
      "✗ Advanced artwork matching",
      "✗ Full fraud protection",
      "✗ Detailed sales analytics",
      "✗ Customizable chat responses",
    ],
    [
      "✓ 30 queries/month",
      "✓ 50MB storage",
      "✓ Simple recommendations",
      "✓ Daily fortune draw game",
      "✓ Personalized greetings",
      "✗ Basic artwork queries",
      "✗ Advanced artwork matching",
      "✗ Full fraud protection",
      "✗ Detailed sales analytics",
      "✗ Customizable chat responses",
    ],
    [
      "✓ 100 queries/month",
      "✓ 200MB storage",
      "✓ Simple recommendation",
      "✓ Daily fortune draw game",
      "✓ Personalized greetings",
      "✓ Basic artwork queries",
      "✓ Advanced artwork matching",
      "✗ Full fraud protection",
      "✗ Detailed sales analytics",
      "✗ Customizable chat responses",
    ],
    [
      "✓ Unlimited queries/month",
      "✓ 500MB storage",
      "✓ Simple recommendation",
      "✓ Daily fortune draw game",
      "✓ Personalized greetings",
      "✓ Basic artwork queries",
      "✓ Advanced artwork matching",
      "✓ Full fraud protection",
      "✓ Detailed sales analytics",
      "✓ Customizable chat responses",
    ],
  ];
  const plansPricing = {
    monthly: ["FREE", "$9", "$16", "$32"],
    yearly: ["FREE", "$108", "$192", "$384"]
  };
  const plansPricingDetails = [
    "forever free for individuals and small teams up to 3",
    "per user / month billed annually",
    "per user / month billed annually",
    "per user / month billed annually",
  ];

  return (
    <div className="bg-white text-black flex flex-col min-h-screen">
      <div className="bg-black text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2823ff] inline-block text-lg rounded-3xl py-1 px-6 mb-4">
            Pricing
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Downright Simple User-Based Pricing
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Our custom pricing is based on monthly active users (MAU) and designed
            to scale with the growth of your customers, employees or business
            partners.
          </p>
          
          <div className="flex justify-center mb-6">
            <div className="bg-white text-black rounded-full p-1 flex items-center gap-2">
              <button 
                className="px-4 py-2 rounded-full bg-[#2823ff] text-white"
              >
                Monthly
              </button>
              <button 
                className="px-4 py-2 rounded-full bg-white text-black"
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plansTitle.map((title, key) => (
            <div 
              key={key} 
              className={`
                border-4 rounded-xl p-6 transform transition-all 
                ${key === 2 ? 'border-red-500 scale-105' : 'border-[#2823FF]'}
              `}
            >
              {key === 2 && (
                <div className="bg-red-500 text-white text-center py-2 rounded-t-xl -mx-6 -mt-6 mb-4">
                  Most Popular
                </div>
              )}
              
              <h2 className={`
                text-2xl font-bold mb-4 
                ${key === 2 ? 'text-red-500' : 'text-blue-600'}
              `}>
                { title}
              </h2>
              
              <div className="text-4xl font-bold mb-2">
                {plansPricing.yearly[key]} {/* Default to yearly pricing */}
              </div>
              
              <p className="text-gray-600 mb-4">
                {plansPricingDetails[key]}
              </p>
              
              <ul className="space-y-2 mb-6">
                {plansPoints[key].map((point, index) => (
                  <li 
                    key={index} 
                    className={`
                      flex items-center gap-2 
                      ${point.includes('✗') ? 'text-gray-400' : 'text-[#2823FF]'}
                    `}
                  >
                    {point.includes('✓') ? '✓' : '✗'} {point.slice(2)}
                  </li>
                ))}
              </ul>
              
              <button className={`
                w-full py-3 rounded-full text-white font-bold
                ${key === 2 ? 'bg-red-500' : 'bg-[#2823FF]'}
                hover:opacity-90 transition-all
              `}>
                Get Started <ArrowRight className="inline ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <PricingComparison />
    </div>
  );
}