"use client";

import Image from "next/image";
import taxTime from "../../../public/tax-time.jpeg";
import lightHouse from "../../../public/lighthouse.jpeg";
import Stats from "../../components/about/Stats";
import Team from "../../components/about/Team";
import Cloud from "../../components/about/Cloud";
import Culture from "@/components/about/Culture";
import CTA from "@/components/CTA";
import { FadeIn } from "@/components/FadeIn";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What services does Sunray Consulting offer?",
    answer:
      "Sunray Consulting offers a comprehensive range of services, including carbon footprint reduction, energy usage optimization, waste management, and data-driven decision-making support for manufacturing processes.",
  },
  {
    question:
      "How does Sunray Consulting help reduce a company's carbon footprint?",
    answer:
      "We deploy innovative solutions and state-of-the-art technologies to identify inefficiencies in your manufacturing process. We then implement changes that reduce carbon emissions, aligning your operations with sustainability best practices.",
  },
  {
    question: "Can Sunray Consulting help us save on energy costs?",
    answer:
      "Absolutely. We conduct thorough energy audits and use advanced tools to identify energy-saving opportunities in your manufacturing process. Our strategies can significantly reduce your energy consumption, thereby lowering operational costs.",
  },
  {
    question: "How does your waste management service work?",
    answer:
      "We apply scientific methods to quantify and classify waste generated in your operations. We then recommend efficient waste reduction, recycling, or repurposing strategies that not only minimize waste but also improve overall productivity.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Sunray Consulting serves a broad spectrum of industries, including but not limited to manufacturing, agriculture, technology, pharmaceuticals, and energy. Our services are adaptable to any sector committed to improving its environmental footprint.",
  },
  {
    question:
      "How does Sunray Consulting's data-driven decision-making support help businesses?",
    answer:
      "We provide accurate data on your energy use, waste production, and carbon emissions, enabling informed decision-making. Our predictive analysis tools can also forecast future performance based on current trends, helping you stay proactive with your sustainability goals.",
  },
  {
    question:
      "Can you assist with regulatory compliance in terms of environmental standards?",
    answer:
      "Yes, part of our service includes ensuring your operations are compliant with local and international environmental regulations. We stay updated with the latest regulatory changes and help you align your practices accordingly.",
  },
  {
    question: "How do we get started with Sunray Consulting?",
    answer:
      "To begin your sustainability journey with Sunray Consulting, reach out to us via our Contact Us page or email us directly at [email]. Our team will connect with you promptly to understand your requirements and guide you through our process.",
  },
  // More questions...
];

export default function About() {
  return (
    <>
      <div className="bg-[#F1EEE4] mt-48 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-base font-semibold leading-7 text-orange-500">
              What we stand for
            </p>
            <h2 className="mt-2 text-4xl kimchi text-gray-900 sm:text-8xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Sunray Consulting, our mission is to seamlessly integrate
              sustainability with business growth. We empower clients with
              innovative, data-driven solutions to optimize processes, reduce
              environmental footprint, and boost profitability. We envision a
              world where every business is a steward of a sustainable future.
            </p>
          </FadeIn>
        </div>
      </div>
      <Team />
      <Cloud />
      <div className="bg-[#F1EEE4]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <FadeIn>
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h2 className="text-7xl kimchi text-gray-900">
                Frequently Asked Questions
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
        <Culture />
        <CTA />
      </div>
    </>
  );
}
