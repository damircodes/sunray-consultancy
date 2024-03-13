import GetStartedOrange from "./buttons/GetStartedOrange";
import SeeOurImpactSnowyMint from "./buttons/GetStartedSnowyMint";
import { FadeIn } from "./FadeIn";

import Link from "next/link";

export default function CTA() {
  const openChatBox = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if ((window as any).Tawk_API) {
      (window as any).Tawk_API.toggle();
    }
  };
  return (
    <div className="bg-[#F1EEE4]">
      <FadeIn>
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl kimchi text-gray-900 sm:text-8xl">
              Talk to one of our consultants today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Create a bright future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <a
                href="#"
                className="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                onClick={openChatBox}
              >
                Get started
              </a>
              <Link
                href="/about"
                className="text-sm font-semibold text-black leading-6 rounded-full py-3 px-6"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
