import React from "react";
import { PawPrint, HeartHandshake, ShieldPlus } from "lucide-react";
import hero from "../../assets/images/img_8.jpg"; // حط صورة الدكاترة والكلب هنا

export default function ValueSection() {
  const cards = [
    {
      icon: <PawPrint size={25} />,
      title: "Our Vision",
      desc: "Compassionate veterinary care focused on pet health comfort trust and lifelong wellbeing",
      dark: false,
    },
    {
      icon: <HeartHandshake size={25} />,
      title: "Our Mission",
      desc: "Providing advanced medical services with dedication expertise empathy and genuine love",
      dark: true,
    },
    {
      icon: <ShieldPlus size={25} />,
      title: "Our Motto",
      desc: "Treating every pet with respect care responsibility passion and professional commitment",
      dark: false,
    },
  ];

  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative h-[520px] w-full overflow-hidden">
        <img
          src={hero}
          alt="vet"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#3d2b57]/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* small badge */}
          <span className="mb-6 inline-flex items-center gap-2 bg-[#F6844D] text-white px-3 py-2 rounded-full text-xs sm:text-sm">
            <svg
              aria-hidden="true"
              className="e-font-icon-svg e-fas-paw w-4"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path>
            </svg>
            What We Offer
          </span>

          {/* heading */}
          <h2 className="text-white font-extrabold text-[36px] md:text-[56px] leading-tight max-w-4xl">
            Blending Science and
            <br /> Compassion in Pet
            <br /> Wellness Care
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-20 max-w-7xl mx-auto -mt-32 px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-3xl p-10 text-center relative overflow-hidden ${
                card.dark
                  ? "bg-[#4b2c73] text-white"
                  : "bg-[#e8cfd4] text-[#4b2c73]"
              }`}
            >
              {/* dashed border */}
              <div className="absolute inset-4 border-2 border-dashed rounded-2xl opacity-40" />

              {/* icon */}
              <div className="relative z-10 mb-4 flex justify-center">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    card.dark ? "bg-white/20" : "bg-[#6f4aa8] text-white"
                  }`}
                >
                  {card.icon}
                </div>
              </div>

              {/* title */}
              <h3 className="relative z-10 font-bold text-xl mb-3">
                {card.title}
              </h3>

              {/* desc */}
              <p className="relative z-10 text-sm leading-relaxed opacity-90 max-w-xs mx-auto">
                {card.desc}
              </p>

              {/* circles decoration middle card */}
              {card.dark && (
                <>
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full" />
                  <div className="absolute right-10 bottom-10 w-24 h-24 bg-white/5 rounded-full" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
