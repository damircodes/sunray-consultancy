import Image from "next/image";
import { FadeIn, FadeInStagger } from "../FadeIn";

const testimonials = [
  {
    body: "Sunray Consulting transformed our approach to sustainability. Their team's expertise and innovative solutions resulted in considerable energy savings and reduced waste. A game-changer for any business!\" - CEO, Fauna Platics Inc.",
    author: {
      name: "Mateo Santiago Rojas",
      handle: "mateorojas",
      imageUrl: require("../../../public/testimonial-1.jpg"),
    },
  },
  {
    body: "With Sunray Consulting, we discovered untapped potential in our manufacturing process. They helped us achieve substantial reductions in our carbon emissions and bottom-line costs.\" - Operations Manager, Omni Industries'",
    author: {
      name: "Emily Anderson",
      handle: "emilyanderson",
      imageUrl: require("../../../public/testimonial-2.jpg"),
    },
  },
  {
    body: 'Sunray Consulting is the epitome of professionalism and proficiency in environmental consultancy. Their sustainable strategies have been a crucial part of our business growth and success." - Director, GreenGrow Agriculture',
    author: {
      name: "Napat Chaiyapruk",
      handle: "napatchaiyapruk",
      imageUrl: require("../../../public/testimonial-3.jpg"),
    },
  },
  {
    body: "Sunray Consulting's scientific approach to measuring waste and energy consumption was a revelation. Their detailed reports have helped us make informed decisions that positively impact our business and the planet.\" - COO, Aero Dynamics",
    author: {
      name: "Micheal Chen",
      handle: "michealchen",
      imageUrl: require("../../../public/testimonial-4.jpg"),
    },
  },
  {
    body: 'Their knack for identifying areas of inefficiency and potential savings is remarkable. Sunray Consulting is a valuable partner in our journey towards sustainability." - Plant Manager, Atlas Manufacturing',
    author: {
      name: "Emily Walton",
      handle: "emilywalton",
      imageUrl: require("../../../public/testimonial-5.jpg"),
    },
  },
  {
    body: 'Sunray Consulting not only helped us reduce our carbon footprint but also significantly cut operational costs. Their holistic approach to sustainability is truly commendable." - CEO, BlueOcean Fisheries',
    author: {
      name: "Maya Johnson",
      handle: "mayajohnson",
      imageUrl: require("../../../public/testimonial-6.jpg"),
    },
  },
  {
    body: 'Partnering with Sunray Consulting was one of our best decisions. Their data-driven solutions have revolutionized our approach to sustainability and improved our bottom line and our process for environmental sustainability." - General Manager, Modern Textiles',
    author: {
      name: "Napat Chaiyapruk",
      handle: "napatchaiyapruk",
      imageUrl: require("../../../public/testimonial-7.jpg"),
    },
  },
  {
    body: "Sunray Consulting's team stands out with their expertise, dedication, and passion for sustainability. They've played a vital role in improving our manufacturing processes.\" - Director, FutureTech Energy",
    author: {
      name: "Benjamin Mitchell",
      handle: "benjaminmitchell",
      imageUrl: require("../../../public/testimonial-8.jpg"),
    },
  },
  {
    body: 'Sunray Consulting has proven that businesses can be profitable while being environmentally responsible. Their guidance has helped us significantly cut energy costs and reduce waste." - Operations Director, PurePharma Inc.',
    author: {
      name: "Sofia Rodriguez",
      handle: "sofiarodriguez",
      imageUrl: require("../../../public/testimonial-9.jpg"),
    },
  },

  // More testimonials...
];

export default function Testimonial() {
  return (
    <div className="bg-[#F1EEE4] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-xl font-semibold tracking-tight text-orange-500">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl kimchi text-gray-900 sm:text-8xl">
            We have worked with hundreds of amazing companies
          </p>
        </div>
        <FadeInStagger faster={true}>
          {" "}
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <FadeIn key={testimonial.author.handle}>
                  {" "}
                  {/* Wrap each testimonial in FadeIn */}
                  <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                    <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                          width={40} // Specify width for Image component
                          height={40} // Specify height for Image component
                          layout="fixed" // Ensure fixed layout is used for proper display
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeInStagger>{" "}
      </div>
    </div>
  );
}
