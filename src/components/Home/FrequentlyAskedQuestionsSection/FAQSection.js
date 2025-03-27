import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FrequentlyAskedQuestions() {
  const faqData = [
    {
      question: "How can Sulio AI help me sell more art?",
      answer: "Sulio AI helps by automatically engaging with potential buyers and recommending your art based on their preferences. Many artists see a 20-30% increase in sales within the first few months by leveraging the chatbot to build deeper connections with their audience."
    },
    {
      question: "Do I need any technical skills to use the AI chatbot?",
      answer: "No technical skills are required! Sulio AI is designed to be user-friendly and intuitive. With pre-configured templates and easy-to-follow guides, you can get set up in minutes, allowing you to focus on your art while we handle the rest."
    },
    {
      question: "How secure is the platform for handling my transactions?",
      answer: "Sulio AI takes security very seriously. We use industry-standard encryption to ensure that your personal data, financial information, and transactions are safe. All transactions are tracked transparently, and you have full visibility at every step."
    },
    {
      question: "Can I customize the way Sulio AI interacts with my followers?",
      answer: "Yes! You can fully customize the chatbot responses to fit your personal tone and style. Whether you want to greet new followers, answer common questions, or share stories about your work, Sulio AI can be tailored to reflect your unique artistic voice."
    }
  ];

  return (
    <div className="min-h-screen h-screen w-full flex flex-col justify-center items-center md:flex-row gap-1">
      <div
        className="text-3xl md:text-4xl font-bold md:h-full w-full md:w-[40rem] md:bg-cover bg-no-repeat flex flex-row-reversemd:flex-col"
        style={{ backgroundImage: "url(/images/FAQ.gif)" }}
      >
        <div className="h-full w-full lg:text-5xl flex font-bold justify-center items-center">
          Frequently
          <br /> Asked
          <br /> Questions
        </div>
      </div>
      <div className="flex justify-center items-center overflow-y-auto h-full px-4 w-full">
        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={`faq-${index}`} 
              value={`item-${index}`}
              className="border border-[rgb(180,148,148)] rounded-lg px-6"
            >
              <AccordionTrigger className="text-md md:text-2xl font-medium text-justify hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-md md:text-lg">
                  <span className="font-bold text-justify hyphens-auto [word-spacing:-0.1em]">
                    Answer:
                  </span>{" "}
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}