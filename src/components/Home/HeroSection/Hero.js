import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="min-h-screen md:px-2 snap-y snap-mandatory flex justify-evenly items-start">
      <div className="gap-16 flex flex-col lg:flex-row justify-around items-center">
        <div className="flex flex-col justify-start">
          <div className="text-left px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Artists Using AI Assistants Have Increased Engagement by 85%.
            </h1>
            <p className="py-3 text-md md:text-xl">
              Simplify your workflow, connect with buyers and focus on creating
              art.
            </p>
            <div className="relative w-full aspect-video">
              <Image
                src="/images/section1.gif"
                alt="AI Assistant demonstration"
                fill
                priority
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="max-w-72 md:max-w-sm space-y-2">
          <Card className="bg-white text-black max-w-72 md:max-w-sm shrink-0 shadow-2xl rounded-3xl">
            <div className="text-center -rotate-3 text-lg md:text-3xl font-extrabold flex flex-col justify-center items-center -translate-y-4 text-[#ff8c43]">
              <span className="rounded-xl px-2 py-1 w-fit bg-[#FBF2B3] font-extrabold">
                SEE HOW AI
              </span>
              <span className="rounded-xl px-2 py-1 w-fit bg-[#FBF2B3] font-extrabold">
                CHATBOT WORKS
              </span>
            </div>
            <CardContent className="space-y-4">
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="pl-10 pr-4 py-6 rounded-3xl bg-gray-100"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70 absolute left-3 top-1/2 transform -translate-y-1/2"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="pl-10 pr-4 py-6 rounded-3xl bg-gray-100"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70 absolute left-3 top-1/2 transform -translate-y-1/2"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10 pr-4 py-6 rounded-3xl bg-gray-100 w-full"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-5 w-5 opacity-70 absolute left-3 top-1/2 transform -translate-y-1/2"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
              </div>
              <div className="relative">
                <Input
                  type="tel"
                  placeholder="Phone"
                  className="pl-10 pr-4 py-6 rounded-3xl bg-gray-100 w-full"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-5 w-5 opacity-70 absolute left-3 top-1/2 transform -translate-y-1/2"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
              <Button
                className="w-full bg-[#ff8c43] hover:bg-[#ff8c43]/90 text-white rounded-3xl py-6 h-auto text-sm md:text-md font-semibold"
              >
                TRY FOR FREE
              </Button>
            </CardContent>
          </Card>
          <p className="leading-tight text-lg px-10 text-center">Start today and see upto 40% time-saving on client interations in the first month!</p>
        </div>
      </div>
    </div>
  );
}
