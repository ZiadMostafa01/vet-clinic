import React from "react";
import { CheckCircle, Gem } from "lucide-react";
import img1 from "../../assets/images/img_17-1-2048x1024.jpg";
import img2 from "../../assets/images/img_14-2048x1024.jpg";
import bg from "../../assets/images/paw_img_copy.png";


const servicesLeft = [
  "Behavior Therapy",
  "Surgery Service",
  "Emergency Support",
  "Grooming Session",
];

const servicesRight = [
  "Rehabilitation Therapy",
  "Senior Care",
  "Lab Diagnostics",
  "Microchip Implant",
];

export default function PetCareSection() {
  return (
    <section className="w-full  py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {/* Image 1 */}
          <div className="rounded-3xl overflow-hidden h-full">
            <img
              src={img1}
              alt="Vet with dog"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card */}
          <div className="bg-[#d8c7e8] rounded-3xl p-8 flex flex-col justify-center text-center h-full">
            <div className="bg-[#7a5ba7] w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-6">
              <Gem className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#4b2c73] mb-3">
              Your Partner in Pet Wellness
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Est ornare condimentum magnis auctor cras libero scelerisque.
            </p>
          </div>

          {/* Experience Card */}
          <div
            className="rounded-3xl p-10 flex flex-col justify-center items-center text-center text-white relative overflow-hidden h-full"
            style={{
              background: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom right",
              backgroundColor: "#7a5ba7",
              backgroundRepeat: "no-repeat",
              backgroundSize: "250px 250px", // تحدد الحجم اللي تحبه

              width: "100%",
            }}
          >
            <h2 className="text-8xl font-extrabold text-[#f8c9a0]">25+</h2>
            <p className="mt-3 font-semibold">Years Of Experience</p>
          </div>

          {/* Image 2 */}
          <div className="rounded-3xl overflow-hidden h-full">
            <img
              src={img2}
              alt="Vet team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <span className="inline-flex items-center gap-2 bg-[#F6844D] text-white px-3 py-2 rounded-full text-xs sm:text-sm mb-4">
            <svg
              aria-hidden="true"
              className="e-font-icon-svg e-fas-paw w-4"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path>
            </svg>
            Who We Are
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4b2c73] leading-tight mb-6">
            Providing Gentle, Expert Care for Every Companion
          </h2>

          <div className="border-b-2 border-dashed border-gray-300 mb-6"></div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Karas Veterinary Clinic provides professional and compassionate care
            for pets, combining advanced medicine, experienced veterinarians,
            preventive treatments, and personalized attention. We focus on every
            animal’s health, comfort, and happiness, ensuring lifelong wellness.
            Our dedicated team educates owners, builds trust, and creates a
            safe, welcoming environment for pets and families alike.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              {servicesLeft.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="font-medium text-[#4b2c73]">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {servicesRight.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-orange-500" size={20} />
                  <span className="font-medium text-[#4b2c73]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
