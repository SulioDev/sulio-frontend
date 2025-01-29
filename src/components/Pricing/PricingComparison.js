import { ChevronDown } from 'lucide-react';

export default function PricingComparison() {
  const plans = ['Free', 'Plus', 'Prem', 'Pro'];
  const features = [
    {
      name: 'Auto-replies',
      values: ['✓', '✓', '✓', '✓']
    },
    {
      name: 'Personalized greetings',
      values: ['✗', '✓', '✓', '✓']
    },
    {
      name: 'Queries per month',
      values: ['10', '30', '100', 'Unlimited']
    },
    {
      name: 'Storage space',
      values: ['20MB', '50MB', '200MB', '500MB']
    },
    {
      name: 'Artwork recommendations',
      values: ['Simple', 'Personalized', 'Advanced', 'Advanced']
    },
    {
      name: 'Daily fortune draw game',
      values: ['✓', '✓', '✓', '✓']
    },
    {
      name: 'Transaction and sales tracking',
      values: ['✗', '✓', '✓', 'Detailed analytics']
    },
    {
      name: 'Fraud protection',
      values: ['✗', '✗', '✓', 'Full']
    },
    {
      name: 'Customizable chat responses',
      values: ['✗', '✗', '✗', '✓']
    },
    {
      name: 'AI-generated buyer recommendations',
      values: ['✗', '✗', '✓', '✓']
    },
    {
      name: 'Customer support',
      values: ['Basic', 'Priority', 'Priority', 'VIP']
    },
    {
      name: 'Sales performance insights',
      values: ['✗', '✗', 'Basic', 'Detailed']
    },
    {
      name: 'Referral rewards program access',
      values: ['✗', '✓', '✓', '✓']
    },
    {
      name: 'Audience analytics',
      values: ['✗', '✗', 'Basic', 'Advanced']
    },
    {
      name: 'After-sales service management',
      values: ['✗', '✓', '✓', '✓']
    }
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-gray-400 text-lg mb-4">
          * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        </div>
        <p className="mb-4">
          Looking for something different?{' '}
          <a href="#" className="text-[] underline font-medium">
            Contact us for a customized solution
          </a>
        </p>
        <button className="bg-[#2823FF] text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 mx-auto mb-8">
          Compare Plans <ChevronDown className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold mb-8">
          Find the right Sulio Art AI Chatbot Assistant for you
        </h2>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr>
              <th className="p-4 text-left"></th>
              {plans.map(plan => (
                <th key={plan} className="p-4 text-center">
                  <div className="inline-block border-2 border-[#2823FF] rounded-full px-6 py-2 text-[#2823FF]">
                    {plan}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-t hover:bg-slate-100">
                <td className="p-4 flex items-center gap-2">
                  {feature.name}
                  <ChevronDown className="w-4 h-4 text-red-500" />
                </td>
                {feature.values.map((value, valueIndex) => (
                  <td key={valueIndex} className="p-4 text-center">
                    {value === '✓' ? (
                      <span className="text-[#2823FF]">✓</span>
                    ) : value === '✗' ? (
                      <span className="text-gray-400">✗</span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-black text-white w-full mt-12 p-8 rounded-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">
          The all-in-one solution for artists to elevate their business with AI
        </h2>
        <p className="mb-6 text-gray-300">
          Sulio AI Chatbot Assistant helps artists automate client interactions, manage sales, and enhance their engagement—giving you more time to create. Seamlessly integrate AI into your workflow and experience the freedom to focus on what matters most: your art.
        </p>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium w-full max-w-md mb-4">
          Get Set Up Today
        </button>
        <p className="text-sm text-gray-400">Start your free 30-day trial today!</p>
      </div>
    </div>
  );
}