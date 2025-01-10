import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen md:px-2 snap-y snap-mandatory flex justify-evenly items-start">
      <div className="hero-content gap-16 flex-col lg:flex-row justify-around">
        <div className="flex flex-col justify-start">
          <div className="text-left px-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Artists Using AI Assistants Have Increased Engagement by 85%.
            </h1>
            <p className="py-3 text-sm md:text-lg">
              Simplify your workflow, connect with buyers and focus on creating
              art.
            </p>
            <div className="relative w-full aspect-video">
              <Image
                src="/images/section1.gif"
                alt="AI Assistant demonstration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
        <div className="max-w-72 md:max-w-sm space-y-4">
          <div className="card bg-white text-black max-w-72 md:max-w-sm shrink-0 shadow-2xl rounded-3xl">
            <div className="text-center -rotate-3 text-lg md:text-3xl font-extrabold flex flex-col justify-center items-center -translate-y-4 text-[#ff8c43]">
              <span className="rounded-xl px-2 py-1 w-fit bg-[#FBF2B3]">
                SEE HOW AI
              </span>
              <span className="rounded-xl px-2 py-1 w-fit bg-[#FBF2B3]">
                CHATBOT WORKS
              </span>
            </div>
            <form className="card-body">
              <div className="form-control w-full flex flex-row justify-center items-center gap-2">
                <label className="input flex items-center gap-2 rounded-3xl bg-gray-100 p-4 md:p-7 text-sm md:text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow w-full bg-transparent outline-none"
                    placeholder="First Name"
                  />
                </label>
                <label className="input flex items-center gap-2 rounded-3xl bg-gray-100 p-4 md:p-7 text-sm md:text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow w-full bg-transparent outline-none"
                    placeholder="Last Name"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input flex items-center gap-2 rounded-3xl bg-gray-100 p-4 md:p-7 text-sm md:text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    className="grow bg-transparent outline-none"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="input flex items-center gap-2 rounded-3xl bg-gray-100 p-4 md:p-7 text-sm md:text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow bg-transparent outline-none"
                    placeholder="Password"
                  />
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn p-4 md:p-7 bg-[#ff8c43] text-white border-none text-lg md:text-xl rounded-3xl font-extrabold content-center hover:bg-[#e67d3a] transition-colors">
                  TRY FOR FREE
                </button>
              </div>
              <div className="form-control mt-6 flex flex-row justify-center items-center gap-2">
                <span className="text-slate-400">Already a member?</span>
                <Link href="/signin" className="text-info hover:underline">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
          <p className="leading-tight text-lg px-10 text-center">Start today and see upto 40% time-saving on client interations in the first month!</p>
        </div>
      </div>
    </div>
  );
}
