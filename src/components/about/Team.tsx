import Image from "next/image";
import { FadeIn, FadeInStagger } from "../FadeIn";

const people = [
  {
    name: "Arjun Patel",
    role: "Founder &  CEO",
    imageUrl: require("../../../public/headshot-3.jpg"),
  },
  {
    name: "Charlotte Parker",
    role: "Founder &  COO",
    imageUrl: require("../../../public/headshot-11.jpg"),
  },
  {
    name: "Jasmine Thompson",
    role: "Partner &  Lead Consultant",
    imageUrl: require("../../../public/headshot-5.jpg"),
  },
  {
    name: "Henry Mitchell",
    role: "Partner &  Lead Consultant",
    imageUrl: require("../../../public/headshot-12.jpg"),
  },
  {
    name: "Emily Jenkins",
    role: "Consultant",
    imageUrl: require("../../../public/headshot-1.jpg"),
  },
  {
    name: "Benjamin Anderson",
    role: "Consultant",
    imageUrl: require("../../../public/headshot-2.jpg"),
  },
  {
    name: "Olivia Thompson",
    role: "Consultant",
    imageUrl: require("../../../public/headshot-4.jpg"),
  },
  {
    name: "Rohan Sharma",
    role: "Consultant",
    imageUrl: require("../../../public/headshot-6.jpg"),
  },
  {
    name: "Mei Chen",
    role: "Consultant",
    imageUrl: require("../../../public/headshot-7.jpg"),
  },
  {
    name: "Abigail Reynolds",
    role: "Consultant",
    imageUrl: require("../../../public/headshot-8.jpg"),
  },
  {
    name: "Hiroshi Tanaka",
    role: "Consultant",
    imageUrl: require("../../../public/headshot-9.jpg"),
  },
  {
    name: "Malik Williams",
    role: "Consultant",
    imageUrl: require("../../../public/headshot-10.jpg"),
  },

  // More people...
];

export default function Team() {
  return (
    <div className="bg-[#F1EEE4] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl kimchi text-gray-900 sm:text-8xl">
              Our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re a dynamic group of individuals who are passionate about
              what we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
        </FadeIn>
        <FadeInStagger faster={true}>
          {" "}
          {/* Wrap the list in FadeInStagger */}
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {people.map((person) => (
              <FadeIn key={person.name}>
                {" "}
                {/* Wrap each team member in FadeIn */}
                <li>
                  <Image
                    className="mx-auto h-24 w-24 rounded-full"
                    src={person.imageUrl}
                    alt=""
                    width={300} // Adjust as needed
                    height={300} // Adjust as needed
                    unoptimized // Consider using unoptimized for local images or adjust as needed
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    {person.role}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </FadeInStagger>
      </div>
    </div>
  );
}
