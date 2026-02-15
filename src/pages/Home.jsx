import Landing from "../components/Home/Landing";
import PetCareSection from "../components/Home/PetCareSection";
import PricingSection from "../components/Home/PricingSection";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import ValueSection from "../components/Home/ValueSection";
import TeamSection from "../components/Home/TeamSection";

function Home() {
  return (
    <>
      <Landing />
      <PetCareSection />
      <ValueSection />
      <WhatWeOffer />
      <TeamSection />
      <PricingSection />
    </>
  );
}
export default Home;
