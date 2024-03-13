import { FadeIn } from "../FadeIn";

const stats = [
  { id: 1, name: "Businesses helped", value: "1,000+" },
  { id: 2, name: "Savings in business overhead", value: "30%" },
  { id: 3, name: "Of Carbon Reduction", value: "400+ Tons" },
  { id: 4, name: "Dollars saved", value: "$20M" },
];

export default function Problems() {
  return (
    <>
      <div className="bg-[#F1EEE4] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-3xl kimchi text-gray-900 sm:text-7xl">
                  We create green processes that saves our clients money.
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  We help companies develop systems that goes beyond
                  greenwashing.
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col  p-8">
                    <dt className="text-sm font-semibold leading-6 text-gray-600">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </div>
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl kimchi text-gray-900 sm:text-6xl">
            Poor manufacturing process wastes money and energy.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-56">
            Streamlining Manufacturing Processes: An Eco-Friendly Approach to
            Enhancing Profitability and Energy Efficiency.
          </p>
        </div>
      </FadeIn>
    </>
  );
}
