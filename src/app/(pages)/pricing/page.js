"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import PricingComparison from "@/components/Pricing/PricingComparison";
import Head from "next/head";

export default function Page() {
  const [isYearly, setIsYearly] = useState(true);

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
    yearly: ["FREE", "$108", "$192", "$384"],
  };

  // Calculate monthly price for display in yearly billing
  const getMonthlyPrice = (yearlyPrice) => {
    if (yearlyPrice === "FREE") return "FREE";
    const price = parseInt(yearlyPrice.replace("$", ""));
    return `$${(price / 12).toFixed(0)}`;
  };

  const plansPricingDetails = (price) => {
    if (price === "FREE")
      return "forever free for individuals and small teams up to 3";
    return isYearly
      ? `${getMonthlyPrice(price)} per user / month billed annually`
      : `${price} billed monthly`;
  };

  return (
    <>
      <Head>
        <title>
          Pricing Plans - Simple User-Based Pricing for Your Business
        </title>
        <meta
          name="description"
          content="Choose from our flexible pricing plans designed to scale with your business. Starting from free tier to advanced pro features with monthly or yearly billing options."
        />
        <meta
          name="keywords"
          content="pricing plans, business pricing, monthly billing, yearly billing, free tier, premium features"
        />
      </Head>

      <div className="bg-white text-black flex flex-col min-h-screen">
        <div className="bg-black text-white py-12 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mt-20 bg-[#2823ff] inline-block text-sm rounded-full py-1 px-6 mb-4">
              Pricing
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Downright Simple User-Based Pricing
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm">
              Our custom pricing is based on monthly active users (MAU) and
              designed to scale with the growth of your customers, employees or
              business partners.
            </p>

            <div className="flex justify-center mb-6 font-bold">
              <div className="bg-white rounded-full p-1 flex items-center gap-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    !isYearly
                      ? "bg-[#2823ff] text-white"
                      : "bg-white text-black"
                  }`}
                  aria-label="Switch to monthly billing"
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    isYearly ? "bg-[#2823ff] text-white" : "bg-white text-black"
                  }`}
                  aria-label="Switch to yearly billing"
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plansTitle.map((title, key) => (
              <div
                key={key}
                className={`
                  group
                  relative bg-white rounded-2xl
                  transition-all duration-300 ease-in-out
                  hover:shadow-lg hover:-translate-y-1
                  flex flex-col border-4 border-[#2823FF]
                  ${
                    key === 2
                      ? "hover:border-red-500 hover:bg-red-50/10"
                      : ""
                  }
                `}
              >
                {key === 2 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2823FF] text-white text-md px-3 py-1 rounded-full font-medium transition-colors duration-300 group-hover:bg-red-500">
                    Most Popular
                  </div>
                )}

                <div className="p-6 flex-1 space-y-6">
                  <div className="space-y-1">
                    <h2
                      className={`text-xl font-bold text-[#2823FF] transition-colors duration-300 ${
                        key === 2 ? "group-hover:text-red-500" : ""
                      }`}
                    >
                      {title}
                    </h2>
                    <div className="text-3xl font-bold">
                      {isYearly
                        ? plansPricing.yearly[key]
                        : plansPricing.monthly[key]}
                    </div>
                    <p className="text-gray-500 text-sm">
                      {plansPricingDetails(
                        isYearly
                          ? plansPricing.yearly[key]
                          : plansPricing.monthly[key]
                      )}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {plansPoints[key].map((point, index) => (
                      <li
                        key={index}
                        className={`
                          text-sm flex items-center gap-2
                          ${point.includes("✗") ? "text-gray-400" : "text-[#2823FF]"}
                          ${
                            key === 2 && !point.includes("✗")
                              ? "group-hover:text-red-500"
                              : ""
                          }
                          transition-colors duration-300
                        `}
                      >
                        <span className={`text-xs ${
                          key === 2 && !point.includes("✗")
                            ? "group-hover:text-red-500"
                            : ""
                        }`}>
                          {point.includes("✓") ? "✓" : "✗"}
                        </span>
                        <span>{point.slice(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <button
                    className={`
                      w-full py-2.5 rounded-full text-white text-sm font-medium
                      transition-all duration-300
                      ${
                        key === 2
                          ? "bg-[#2823FF] group-hover:bg-red-500"
                          : "bg-[#2823FF] hover:bg-blue-700"
                      }
                    `}
                  >
                    Get started
                    <ArrowRight className="inline ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PricingComparison />
      </div>
    </>
  );
}