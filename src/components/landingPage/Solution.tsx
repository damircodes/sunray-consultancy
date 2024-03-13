import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

import factoryWorker from "../../../public/factory-worker.jpg";
import rolls from "../../../public/rolls.png";
import Image from "next/image";
import { FadeIn } from "../FadeIn";

export default function Solution() {
  return (
    <>
      <div className="relative bg-[#F1EEE4]">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                src={factoryWorker}
                alt="cans"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <FadeIn>
            <div className="px-6 lg:contents">
              <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                <h1 className="mt-2 text-3xl kimchi text-gray-900 sm:text-7xl">
                  Sunray is about manufacturing logistics.
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700"></p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-36 h-36"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-gray-900">
                          Strong team of consultants.
                        </strong>{" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-24 h-24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-gray-900">
                          Green certifications.
                        </strong>{" "}
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-36 h-36"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-gray-900">
                          We case study your business.
                        </strong>{" "}
                        We will prove to you and your customers how much energy
                        and emission you save per year and how you rank
                        compaired to industry standards.{" "}
                      </span>
                    </li>
                  </ul>
                  {/* <p className="mt-8">
                    At Sunray, we harness the power of a strong team of
                    consultants who dedicate their deep industry knowledge to
                    optimize your processes. We pride ourselves on offering a
                    distinguished Green Certification program, underscoring our
                    unwavering commitment to environmental sustainability in
                    manufacturing logistics. Through comprehensive business case
                    studies, we not only enhance your operational efficiency but
                    also validate and communicate your annual energy and
                    emission savings, benchmarking your performance against
                    industry standards.
                  </p> */}
                  {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Your Path to Green Certification
                  </h2>
                  <p className="mt-6">
                    SunRay is proud to introduce our Green Certification
                    program, a comprehensive scheme dedicated to guiding
                    manufacturers on their path to sustainable operation.
                    It&apos;s more than a seal—it&apos;s a testament to your
                    commitment to reducing environmental impact, increasing
                    operational efficiency, and ensuring a greener future.
                  </p> */}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="bg-[#F1EEE4] px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <FadeIn>
            <h1 className="mt-2 text-3xl kimchi text-gray-900 sm:text-7xl">
              How we help.
            </h1>
            <p className="mt-6 text-xl leading-8">
              We blend science with sustainability, providing a unique and
              comprehensive approach to improving your manufacturing processes.
              Our team of experts, with decades of experience across various
              industries, is here to not just enhance your productivity, but
              also to redefine your environmental footprint.
            </p>
            <div className="mt-10 max-w-2xl">
              <p>
                Bridging the gap between efficiency and ecology, we leverage
                scientific principles to transform your manufacturing processes.
                Our seasoned team of experts utilizes their broad industry
                experience to tailor solutions that boost your productivity
                while minimally impacting the environment. With Sunray,
                you&apos;re not just increasing output—you&apos;re crafting a
                legacy of sustainability.
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-orange-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Slash Your Carbon Footprint.
                    </strong>{" "}
                    We leverage innovative solutions and state-of-the-art
                    technologies to help reduce your carbon emissions. Our
                    systematic approach guarantees that you meet your
                    sustainability goals while setting the standard for your
                    industry.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-orange-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Optimize Energy Use
                    </strong>{" "}
                    Energy efficiency is not just good for the planet, it&apos;s
                    also great for your bottom line. Our tailor-made strategies
                    focus on reducing your energy consumption, resulting in
                    lower operational costs and a significant boost to your
                    profit margins.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-orange-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Minimize Waste
                    </strong>{" "}
                    Waste not, want not. At Sunray, we implement advanced
                    methodologies to identify, measure and manage waste in your
                    manufacturing process. We turn wastage from a liability into
                    an opportunity, providing you with the tools to enhance
                    efficiency and productivity.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-orange-500"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Measure & Document Your Impact
                    </strong>{" "}
                    We believe in the power of data. That&apos;s why we employ
                    scientific methods to precisely track and quantify your
                    waste production and energy use. With these tangible
                    metrics, you&apos;ll have the clear insights you need to
                    make informed decisions and showcase your sustainability
                    successes.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                At Sunray, we understand that your journey towards
                sustainability is unique. We offer personalized solutions that
                align with your vision, help you comply with environmental
                regulations, and position you as a leader in corporate
                sustainability. Embrace a brighter, greener future with. Let us
                show you how good it feels to grow your business while
                preserving the planet. Contact us today to embark on your
                sustainable journey!
              </p>
              <h2 className="mt-16 text-7xl kimchi text-gray-900">
                Empowering Sustainable Transformation Through Data
              </h2>
              <p className="mt-6">
                In the modern world, data isn&apos;t just power, it&apos;s the
                driving force behind effective and meaningful change. At Sunray,
                we understand the value of precise, timely, and actionable data.
                Our commitment to data-driven decision making forms the backbone
                of our sustainable strategies and solutions.
              </p>
              <figure className="mt-10 border-l border-orange-500 pl-9">
                <blockquote className="font-semibold text-gray-900">
                  <p>
                    &quot;Implementing Sunray&apos;s data-driven solutions has
                    been transformative for us. Their approach revealed unseen
                    inefficiencies, and the predictive analysis was a
                    game-changer. We&apos;ve significantly reduced our energy
                    usage and waste, while gaining unparalleled control over our
                    sustainability efforts. Truly a breakthrough for
                    eco-conscious businesses.&quot; - Thomas McKenzie, COO,
                    FutureTech Manufacturing Inc.
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                  <img
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-sm leading-6">
                    <strong className="font-semibold text-gray-900">
                      Maria Hill
                    </strong>{" "}
                    – Marketing Manager
                  </div>
                </figcaption>
              </figure>
              <p className="mt-10">
                With a wealth of accurate data at your fingertips, you&apos;re
                better equipped to make informed decisions. Whether you&apos;re
                planning to invest in new sustainable technology, modify your
                production process, or introduce new environmental initiatives,
                our data-driven insights will guide your strategies.
              </p>
            </div>
            <figure className="mt-16">
              <Image
                src={rolls}
                alt="rolls"
                className="aspect-video rounded-xl bg-gray-50 object-cover"
              />
            </figure>
            <div className="mt-16 max-w-2xl">
              <h2 className="text-7xl kimchi text-gray-900">
                Making savings at scale
              </h2>
              <p className="mt-6">
                Our expert team employs innovative methods and state-of-the-art
                technologies to optimize your manufacturing processes. We help
                you conserve energy, minimize waste, and reduce carbon emissions
                on a large scale, translating into sizable savings and a lower
                environmental footprint.
              </p>
              <p className="mt-8">
                But our efforts don&apos;t stop at just identifying cost-saving
                opportunities. We empower you with advanced tools and
                data-driven insights to make informed decisions that drive
                sustainable growth. We believe in not just making a difference,
                but making it at a scale that matters.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
