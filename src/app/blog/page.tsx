import Image from "next/image";
import Link from "next/link";
// import { PortableText } from "@portabletext/react";
import getProjects from "../../../sanity/sanity-utils";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default async function Blog() {
  const projects = await getProjects();

  return (
    <div className="max-w-7xl mx-auto px-10">
      <div className="bg-[#F1EEE4] sm:py-32">
        <div className="">
          <h1 className="text-3xl sm:text-7xl kimchi pt-20">
            Sunray Insights - Shining Light
            <br />
            on Sustainable Innovation
          </h1>
          <FadeInStagger faster={true}>
            <div className="mx-auto max-w-2xl lg:mx-0">
              {projects.map((project) => (
                <FadeIn key={project._id}>
                  {" "}
                  {/* Wrap each project in FadeIn */}
                  <div>
                    <Link href={`/projects/${project.slug}`}>
                      {/* Wrap content in a link */}
                      <h2 className="text-2xl italic pb-5 pt-24 font-textFont">
                        {project.name}
                      </h2>
                      <button className="rounded-md bg-[#FF5823] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10">
                        Read Article
                      </button>
                      <Image
                        className="w-1/2"
                        src={project.image}
                        width={600}
                        height={400}
                        alt={project.alt}
                      />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </div>
    </div>
  );
}
