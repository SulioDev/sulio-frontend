export default function FrequentlyAskedQuestions() {
  return (
    <div className="min-h-screen h-screen w-full flex flex-col justify-between items-center md:flex-row gap-1">
      <div
        className="text-3xl md:text-4xl font-bold md:h-full w-full md:w-[40rem] md:bg-cover bg-no-repeat flex flex-row-reverse md:flex-col"
        style={{ backgroundImage: "url(/images/FAQ.gif)" }}
      >
        <div className="text-sm md:text-lg font-bold text-black md:pl-36 flex justify-center items-start h-full w-ful p-6">
          Here are four common questions that artist might ask when using
          Sulio&apos;s AI Chatbot Assistant, along with answers:
        </div>
        <div className="h-full w-full flex justify-center items-center md:items-start px-4">
          Frequently
          <br /> Asked
          <br /> Questions
        </div>
      </div>
      <div className="flex justify-center items-center overflow-y-auto h-full px-4 w-full">
        <ul className="flex justify-evenly items-center flex-col w-full gap-6">
          <li className="collapse collapse-arrow border-[rgb(180,148,148)] join-item border md:p-6">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl sm:text-2xl font-medium  text-justify hyphens-auto [word-spacing:-0.1em]">
              How can Sulio AI help me sell more art?
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-md">
                <span className="font-bold text-justify hyphens-auto [word-spacing:-0.1em]">
                  Answer:
                </span>{" "}
                Sulio AI helps by automatically engaging with potential buyers
                and recommending your art based on their preferences. Many
                artists see a 20-30% increase in sales within the first few
                months by leveraging the chatbot to build deeper connections
                with their audience.
              </p>
            </div>
          </li>
          <li className="collapse collapse-arrow border-[rgb(180,148,148)] join-item border md:p-6">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl sm:text-2xl font-medium text-justify hyphens-auto [word-spacing:-0.1em]">
              Do I need any technical skills to use the AI chatbot?
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-md">
                <span className="font-bold text-justify hyphens-auto [word-spacing:-0.1em]">
                  Answer:
                </span>{" "}
                No technical skills are required! Sulio AI is designed to be
                user-friendly and intuitive. With pre-configured templates and
                easy-to-follow guides, you can get set up in minutes, allowing
                you to focus on your art while we handle the rest.
              </p>
            </div>
          </li>
          <li className="collapse collapse-arrow border-[rgb(180,148,148)] join-item border md:p-6">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl sm:text-2xl font-medium">
              How secure is the platform for handling my transactions?
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-md">
                <span className="font-bold">Answer:</span> Sulio AI takes
                security very seriously. We use industry-standard encryption to
                ensure that your personal data, financial information, and
                transactions are safe. All transactions are tracked
                transparently, and you have full visibility at every step.
              </p>
            </div>
          </li>
          <li className="collapse collapse-arrow border-[rgb(180,148,148)] join-item border md:p-6">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl sm:text-2xl font-medium text-justify hyphens-auto [word-spacing:-0.1em]">
              Can I customize the way Sulio AI interacts with my followers?
            </div>
            <div className="collapse-content">
              <p className="text-sm sm:text-md">
                <span className="font-bold text-justify hyphens-auto [word-spacing:-0.1em]">
                  Answer:
                </span>{" "}
                Yes! You can fully customize the chatbot responses to fit your
                personal tone and style. Whether you want to greet new
                followers, answer common questions, or share stories about your
                work, Sulio AI can be tailored to reflect your unique artistic
                voice.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
