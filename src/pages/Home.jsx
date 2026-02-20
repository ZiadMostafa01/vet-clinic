import Landing from "../components/Home/Landing";
import PetCareSection from "../components/Home/PetCareSection";
import PricingSection from "../components/Home/PricingSection";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import ValueSection from "../components/Home/ValueSection";
import TeamSection from "../components/Home/TeamSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FeatureBar from "../components/Home/FeatureBar";
import ChooseClinic from "../components/Home/ChooseClinic";
import ServicesCards from "../components/Home/ServicesCards";
import Doctors from "../components/Home/Doctors";
import AppointmentSection from "../components/Home/AppointmentSection";

function Home() {
  return (
    <>
      <Landing />
      <FeatureBar />
      <ServicesCards />
      <PetCareSection />
      {/* <ValueSection /> */}
      <Doctors />
      <ChooseClinic />
      <AppointmentSection />

      {/* <div className="h-[500px]"></div> */}
    </>
  );
}
export default Home;
