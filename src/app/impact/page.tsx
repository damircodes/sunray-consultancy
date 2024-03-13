"use client";

import Image from "next/image";
import Link from "next/link";

import Testamonial from "@/components/landingPage/Testimonial";
import CTA from "@/components/CTA";
import working from "../../../public/working.png";
import happy from "../../../public/happy.jpeg";
import together from "../../../public/golden.jpg";
import workation from "../../../public/workcation-logo-white.svg";
import { FadeIn } from "@/components/FadeIn";
import designer from "../../../public/whales-swimming.jpg";

import sanFran from "../../../public/san-fran.jpeg";
import whales from "../../../public/whales-swimming.jpg";

const stats = [
  { id: 1, name: "Manufacturing Processes Optimized", value: "2,500+" },
  { id: 2, name: "Sustainability Rate Achieved", value: "80%" },
  { id: 3, name: "Client Satisfaction Rate", value: "98%" },
  { id: 4, name: "Green Certifications Awarded", value: "500+" },
];

const stats2 = [
  { label: "Save carbon at scale", value: "400 Tons Of Carbon Saved" },
  { label: "Save money accroos your logistics", value: "$20 Million Saved" },
  {
    label: "Changing the world one company at a time",
    value: "1,000+ Happy Clients",
  },
];

const timeline = [
  {
    name: "Founded company",
    description:
      "Founded with a vision to revolutionize manufacturing through sustainable solutions, Sunray has been transforming operations to be more cost-effective and eco-friendly. Over the years, our innovative approach, coupled with a team of industry veterans, has established Sunray as a leader in green manufacturing optimization.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Secured 1m in funding",
    description:
      "Recently, our journey took an exciting turn as we secured $1 million in funding. This milestone reaffirms our stakeholders' trust in our mission and capabilities, paving the way for us to extend our impact and continue to lead the green manufacturing revolution.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Opened consultancy in San Fransico",
    description:
      "In our mission to transform manufacturing processes across the globe, Sunray has recently expanded our operations with a new office in San Francisco. This strategic move enables us to tap into the vibrant, tech-driven culture of the city, allowing us to better connect with our clients and foster innovative, sustainable solutions in the heart of the tech world. Our San Francisco presence brings us closer to many of our clients, allowing us to better understand and address their unique operational challenges.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Global launch of product",
    description:
      "Marking a significant milestone in our journey, Sunray is proud to announce the global launch of our new product. Developed with our deep understanding of manufacturing processes and commitment to sustainability, this product epitomizes our mission to seamlessly integrate efficiency and environmental responsibility. With its worldwide availability, we are extending our reach, aiming to redefine manufacturing landscapes around the globe, and inspiring a shift towards greener, more efficient operations.",
    date: "Apr 2023",
    dateTime: "2023-04",
  },
];

export default function Impact() {
  return (
    <>
      <div>
        <div className="relative isolate h-screen overflow-hidden">
          <Image
            src={designer}
            alt="hero"
            className="absolute inset-0 -z-10 h-full object-cover"
          />

          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32">
            <FadeIn>
              <div className="text-center">
                <h1 className="text-4xl kimchi tracking-tight pt-12 text-white sm:text-9xl pt-40">
                  Your Impact
                  <br />
                  Is Boundless
                </h1>
                <p className="mt-6 text-lg leading-8 text-white">
                  Revolutionizing Commercial Manufacturing: Achieving Scalable
                  and Economical Impact
                </p>
                {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Get started
                  </a>
                  <Link
                    href="/about"
                    className="text-sm font-semibold text-white leading-6 rounded-full py-3 px-6"
                  >
                    Learn more
                  </Link>
                </div> */}
              </div>
            </FadeIn>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="relative bg-[#F1EEE4]">
        <Image
          className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
          src={together}
          alt=""
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <FadeIn>
                <p className="mt-2 text-3xl kimchi text-gray-900 sm:text-7xl">
                  Trusted Worldwide
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Sunray Consulting, our reputation for delivering tangible
                  results and unparalleled expertise has earned us the trust of
                  businesses worldwide. We are proud to serve a diverse array of
                  clients, from ambitious startups to established industry
                  leaders, across various sectors and continents. Our global
                  footprint is a testament to our commitment to fostering
                  sustainable practices and creating a positive environmental
                  impact wherever we operate. No matter where you&apos;re
                  located, you can trust Sunray Consulting to guide your
                  sustainability journey.
                </p>
                {/* <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                  {stats2.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                    >
                      <dt className="text-sm leading-6 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl> */}
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F1EEE4] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.name}>
                  <time
                    dateTime={item.dateTime}
                    className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                  >
                    <svg
                      viewBox="0 0 4 4"
                      className="mr-4 h-1 w-1 flex-none"
                      aria-hidden="true"
                    >
                      <circle cx={2} cy={2} r={2} fill="currentColor" />
                    </svg>
                    {item.date}
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    />
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="bg-[#F1EEE4] py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <FadeIn>
              <h2 className="text-3xl kimchi text-gray-900 sm:text-7xl">
                Our mission
              </h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-gray-600">
                    At Sunray Consulting, our mission is to seamlessly integrate
                    sustainability with business growth. We empower clients with
                    innovative, data-driven solutions to optimize processes,
                    reduce environmental footprint, and boost profitability. We
                    envision a world where every business is a steward of a
                    sustainable future.
                  </p>
                  <p className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                    As we embark on this ambitious journey, we remain committed
                    to offering customized solutions that speak directly to the
                    unique needs of each client. Harnessing the power of
                    cutting-edge technology and data analytics, we are able to
                    uncover efficiencies, identify opportunities for waste
                    reduction, and implement greener processes. By focusing on
                    both the economic and environmental aspects of your
                    operations, we ensure that your growth does not come at the
                    expense of our planet. Together, we&apos;re not just
                    building successful businesses, but also fostering a
                    sustainable future for generations to come.
                  </p>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="flex flex-col-reverse gap-y-4"
                      >
                        <dt className="text-base leading-7 text-gray-600">
                          {stat.name}
                        </dt>
                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="bg-[#F1EEE4] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <Image
              className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
              src={working}
              alt=""
              width={300}
              height={300}
            />

            <div className="absolute inset-0 bg-gray-400/50 " />
            <div
              className="absolute -left-80 -top-56 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-orange-400 to-blue-400 opacity-[0.7]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>

            <div
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-orange-300 to-orange-200 opacity-70"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <FadeIn>
                <Image className="h-12 w-auto" src={workation} alt="" />
                <figure>
                  <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                    <p>
                      &quot;Sunray Manufacturing Optimization has been
                      instrumental in our journey towards sustainability. Their
                      team worked closely with us, integrating solutions that
                      have not only optimized our manufacturing processes, but
                      also substantially reduced our environmental footprint.
                      Their unique blend of technological innovation and
                      environmental stewardship has resulted in significant cost
                      savings for us while boosting our green credentials.
                      I&apos;m delighted to see the transformative effects on
                      our bottom line and our impact on the planet. Sunray is a
                      true partner in progress towards a sustainable
                      future&quot;
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 text-base text-white">
                    <div className="font-semibold">Judith Black</div>
                    <div className="mt-1">CEO of Workcation</div>
                  </figcaption>
                </figure>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
      <Testamonial />
      <CTA />
    </>
  );
}
