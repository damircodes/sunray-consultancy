import Image from "next/image";

import greenwash from "../../public/greenwasher.png";
import ingredients from "../../public/ingredients.png";
import engineering from "../../public/engineering.png";
import productDevelopment from "../../public/productDevelopment.png";
import bottomLine from "../../public/bottomLine.png";
import reputation from "../../public/reputation.png";
import CTA from "./CTA";
import Problems from "./landingPage/Problems";
import Solution from "./landingPage/Solution";
import Testamonial from "./landingPage/Testimonial";

export default function Landing() {
  return (
    <>
      <Problems />
      <Solution />
      <Testamonial />
      <CTA />
    </>
  );
}
