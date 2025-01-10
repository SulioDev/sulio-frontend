import Image from 'next/image';

export default function VideoIntroduction() {
  return (
    <div className="relative h-screen min-h-screen overflow-hidden">
      {/* Mobile-first header section */}
      <div className="relative px-4 md:pt-6 pb-8 h-36 bg-white z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center relative z-10">
          <div className="md:col-span-8 md:p-8">
            <h1 className="text-[24px] pt-5 md:pt-0 lg:pt-0  md:text-2xl lg:text-3xl font-bold text-black leading-tight tracking-tighter">
              People won&apos;t be replaced by AI, but by those who use it.
            </h1>
          </div>
        </div>

        {/* GIF Overlay - hidden on mobile */}
        <div className="hidden md:block absolute right-0 top-0 w-[330px] overflow-visible">
          <div className="relative w-full">
            <Image
              src="/images/section4overlay.gif"
              alt="Overlay animation"
              width={330}
              height={330}
              className="absolute top-0 right-0 w-full h-auto max-w-none"
              style={{
                transform: "scale(1.2)",
                transformOrigin: "top right",
              }}
            />
          </div>
        </div>

        {/* Mobile-only decorative icons */}
        <div className="absolute right-0 top-[52%] md:hidden">
          <Image
            src="/images/section4overlay.gif"
            alt="Decorative icons"
            width={192}  // w-48 equals 192px
            height={192}
            className="w-48"
          />
        </div>
      </div>

      {/* Main Card Section */}
      <div className="container mx-auto p-4 pb-8 md:h-full z-0">
        {/* Rest of your code remains exactly the same */}
        <div className="rounded-3xl border-2 border-[#b49494] overflow-hidden md:text-inherit py-10 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-12 h-full">
            {/* Product Info - Shown first on mobile */}
            <div className="md:col-span-4 md:order-2 order-1 flex flex-col justify-center p-6 text-center md:text-left">
              <h2 className="text-blue-600 text-2xl font-bold mb-4">
                Sulio Art
                <br />
                Artist AI Chatbot
              </h2>
              <p className="text-base font-medium">
                Meet Sulio Art&apos;s all-in-one product experience AI Chatbot,
                enhanced with artificial intelligence.
              </p>
            </div>

            {/* Video/Image Section */}
            <div className="md:col-span-8 md:order-1 order-2">
              <div className="aspect-video h-full w-full px-4 md:p-10">
                {/* On mobile, show static image steps */}
                <div className="block md:hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/images/video-thumbnail.png"
                  >
                    <source
                      src="/images/introduction-video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* On desktop, show video */}
                <video
                  className="hidden md:block w-full h-full object-cover"
                  controls
                  poster="/images/video-thumbnail.png"
                >
                  <source
                    src="/images/introduction-video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
