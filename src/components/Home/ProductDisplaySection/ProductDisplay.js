import Image from "next/image"

function FeatureList({ features, color = "blue" }) {
  const diamondColors = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    yellow: "text-yellow-500",
    orange: "text-orange-500",
    green: "text-green-500",
  }

  return (
    <div className="space-y-3 md:space-y-4 py-3 md:py-4 h-full md:flex flex-col justify-evenly px-4 md:px-8">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-2">
          <div className={`${diamondColors[color]} md:text-3xl text-xl flex-shrink-0 mt-1`}>◆</div>
          <p className="text-black font-medium leading-tight text-sm md:text-xl lg:text-2xl">{feature}</p>
        </div>
      ))}
    </div>
  )
}

function Section({ title, description, features, color, imageSrc, layout = "top" }) {
  const bgColors = {
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
  }
  const getMobileContent = () => {
    return (
      <>
        <div className={`${bgColors[color]} rounded-full px-4 py-2 md:px-6 md:py-3 border-none`}>
          <h2 className="text-white text-lg md:text-xl font-medium text-center">{title}</h2>
        </div>
        <p className="text-gray-400 font-medium text-base md:text-lg leading-relaxed text-center">
          {description}
        </p>
      </>
    );
  };
    const getTabletAndDesktopContent = (layout) => {
      const titleFontSize = "text-[1.2rem] md:text-[1.6rem]"; // Adjust title size for tablet
      const descriptionFontSize = "text-gray-400 text-lg leading-relaxed tracking-tight text-justify hyphens-auto [word-spacing:-1.5px] [letter-spacing:-0.3px] [text-align-last:left] max-w-prose";
      const paddingX = "px-4 md:px-6"; // Adjust horizontal padding for tablet

      switch (layout) {
        case 'top':
          return (
            <>
              <div className={`${bgColors[color]} rounded-l-full ${paddingX} py-2 md:py-3 border-none`}>
                <h2 className={`text-white ${titleFontSize} h-12 md:h-16 font-medium text-center flex justify-center items-center`}>{title}</h2>
              </div>
              <p className={`text-gray-400 font-medium ${descriptionFontSize} ${paddingX} leading-relaxed`}>
                {description}
              </p>
            </>
          );
        case 'top-middle-center':
          return (
            <>
              <div className={`${bgColors[color]} rounded-l-full ${paddingX} py-2 md:py-3 border-none`}>
                <h2 className={`text-white ${titleFontSize} h-12 md:h-16 font-medium text-center flex justify-center items-center`}>{title}</h2>
              </div>
              <p className={`text-gray-400 font-medium ${descriptionFontSize} ${paddingX} leading-relaxed`}>
                {description}
              </p>
            </>
          );
        case 'middle':
          return (
            <>
              <p className={`text-gray-400 font-medium ${descriptionFontSize} ${paddingX} leading-relaxed`}>
                {description.slice(0, description.length / 2 - 1)}
              </p>
              <div className={`${bgColors[color]} rounded-l-full ${paddingX} py-2 md:py-3 border-none`}>
                <h2 className={`text-white ${titleFontSize} h-12 md:h-16 font-medium text-center flex justify-center items-center`}>{title}</h2>
              </div>
              <p className={`text-gray-400 font-medium ${descriptionFontSize} ${paddingX} leading-relaxed`}>
                {description.slice(description.length / 2 - 1, description.length)}
              </p>
            </>
          );
        case 'bottom-middle-center':
          return (
            <>
              <p className={`text-gray-400 font-medium ${descriptionFontSize} ${paddingX} leading-relaxed`}>
                {description}
              </p>
              <div className={`${bgColors[color]} rounded-l-full ${paddingX} py-2 md:py-3 border-none`}>
                <h2 className={`text-white ${titleFontSize} h-12 md:h-16 font-medium text-center flex justify-center items-center`}>{title}</h2>
              </div>
            </>
          );
        case 'bottom':
          return (
            <>
              <p className={`text-gray-400 font-medium ${descriptionFontSize} ${paddingX} leading-relaxed`}>
                {description}
              </p>
              <div className={`${bgColors[color]} rounded-l-full ${paddingX} py-2 md:py-3 border-none`}>
                <h2 className={`text-white ${titleFontSize} h-12 md:h-16 font-medium text-center flex justify-center items-center`}>{title}</h2>
              </div>
            </>
          );
          default:
            return null;
      }
    }
    const getTabletAndDesktopLayoutStyles = (layout) => {
      switch (layout) {
        case 'top':
          return 'relative top-0 space-y-3 md:space-y-6';
        case 'top-middle-center':
          return 'relative top-1/4 space-y-3 md:space-y-6';
        case 'middle':
          return 'flex flex-col justify-center space-y-3 md:space-y-6';
        case 'bottom-middle-center':
          return 'flex flex-col justify-center space-y-3 md:space-y-6';
        case 'bottom':
          return 'flex flex-col justify-end space-y-3 md:space-y-6';
        default:
          return 'flex flex-col space-y-3 md:space-y-6';
      }
    }
  return (
    <div className="h-screen w-full flex items-center">
      <div className="w-full h-full">
        {/* Adjusted padding-top here to create space */}
        <h1 className="text-xl md:text-3xl font-bold text-white text-center md:hidden pt-12 py-3 md:py-5 px-4 md:px-10">
          A Seamless Creative Workflow Powered by AI
        </h1>
        {/* Mobile Layout */}
        <div className="md:hidden px-3 py-6 md:px-4 md:py-8 space-y-3 md:space-y-4 relative">
          <div className="flex flex-col items-center">
            {getMobileContent()}
          </div>
          {/* Increased margin-top here to push content further down */}
          <div className="mt-6 md:mt-4">
            <FeatureList features={features} color={color} />
          </div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden md:block h-screen">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center py-6 md:py-10">
            A Seamless Creative Workflow Powered by AI
          </h1>
          <div className="grid md:grid-cols-4 pb-20 md:pb-40 pl-10 md:pl-20 h-full">
            <div className={`md:col-span-1 ${getTabletAndDesktopLayoutStyles(layout)}`}>
              {getTabletAndDesktopContent(layout)}
            </div>
            <div className="md:col-span-3 bg-white grid grid-cols-1 md:grid-cols-2 border-none">
              <div className="h-full flex items-center">
                <FeatureList features={features} color={color} />
              </div>
              <div className="relative h-full">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDisplaySection() {
  const sections = [
    {
      title: "Automate Follower Engagement",
      description:
        "Artists often struggle to keep up with interactions from new followers. Sulio AI automatically sends personalized greetings and updates based on follower behavior, so you can stay connected without spending too much time.",
      features: [
        "Automatically send personalized greetings and updates to your followers.",
        "Boost engagement by up to 85%, even when you're not online.",
        "Save time by skipping manual replies and focusing on your art.",
      ],
      color: "blue",
      imageSrc: "/images/section21.gif",
      layout: "top"  // Title at top, description below
    },
    {
      title: "Smart Art Recommendations",
      description:
        "Not sure which buyer will be interested in your work? Sulio AI recommends the right artworks based on buyer preferences, helping you sell faster and avoid unsold pieces.",
      features: [
        "AI analyzes buyer preferences and recommends artworks that match their taste.",
        "Speed up sales by 20% by getting your art in front of the right buyers.",
        "Connect your art with the right audience, increasing your chances of making sales.",
      ],
      color: "purple",
      imageSrc: "/images/section22.gif",
      layout: "top-middle-center"
    },
    {
      title: "Transaction Tracking",
      description:
        "Managing sales and commissions can be overwhelming for artists. Sulio AI simplifies the process by keeping all your transactions and inquiries organized and visible in one place.",
      features: [
        "Track all your sales and commissions in a single platform.",
        "Get 100% transparency into your sales and payment status.",
        "No more worrying about missed payments or lost commission details.",
      ],
      color: "yellow",
      imageSrc: "/images/section23.gif",
      layout: "middle"  // Title at bottom
    },
    {
      title: "Fraud Detection",
      description:
        "Dealing with fraud can be stressful, especially when your buyers are from different regions. Sulio AI automatically detects and blocks suspicious activities, protecting you from fraud and scams.",
      features: [
        "AI automatically detects and blocks potential fraud attempts.",
        "Reduce the risk of fraud by 95%, allowing you to interact with real buyers confidently.",
        "Spend less time handling scams and more time focusing on genuine buyers.",
      ],
      color: "orange",
      imageSrc: "/images/section24.gif",
      layout: "bottom-middle-center"  // Title at bottom
    },
    {
      title: "Streamlined Client Communication",
      description:
        "Handling multiple inquiries, after-sales support, and client communication can eat up valuable creative time. Sulio AI helps you manage all communications in one place, so you're not constantly answering the same questions.",
      features: [
        "Manage client inquiries, sales questions, and after-sales support all in one platform.",
        "Save 25% of your time by automating repetitive client responses.",
        "Provide a smooth and professional experience for your clients, improving customer satisfaction.",
      ],
      color: "green",
      imageSrc: "/images/section25.gif",
      layout: "bottom"  // Title at bottom
    }
  ]

  return (
    <div className="relative">
      {sections.map((section, index) => (
        <div key={index} className="min-h-screen">
          <Section {...section} />
        </div>
      ))}
    </div>
  )
}