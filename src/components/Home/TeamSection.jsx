import img1 from '../../assets/images/drmichael.jpg'
import img2 from '../../assets/images/Diana.jpg'
import img3 from '../../assets/images/Ajla.jpg'
import img4 from '../../assets/images/azi.jpg'

const team = [
  {
    role: "Founder & Surgeon",
    name: "Michael gerges",
    img: img1,
  },
  {
    role: "Veterinary Oncologist",
    name: "Diana Lavareda",
    img: img2,
  },
  {
    role: "Veterinary Surgeon",
    name: "Dr. Sophia Lane",
    img: img3,
  },
  {
    role: "Veterinary Surgeon",
    name: "Azijada Mulalić",
    img: img4,
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24  overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 text-center relative z-10">
        {/* badge */}
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
          Meet Our Team
        </span>

        {/* title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b2a6d] leading-tight mb-14">
          Dedicated Professionals Committed <br />
          to Your Pet’s Wellness
        </h2>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => {
            // التناوب في الدوران: زوجي +6deg، فردي -6deg
            const rotateClass = i % 2 === 0 ? "rotate-6" : "-rotate-6";

            return (
              <div
                key={i}
                className="bg-[#E7D9F3] backdrop-blur rounded-2xl p-3  shadow-sm hover:shadow-lg transition relative"
              >
                {/* role badge */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 ${rotateClass} bg-[var(--secondary)] text-[var(--primary)] text-xs font-semibold px-3 py-1 rounded-full mb-4`}
                >
                  {member.role}
                </div>

                {/* image */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-5">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* name */}
                <h3 className="text-lg font-extrabold text-[#3b2a6d] mb-4">
                  {member.name}
                </h3>

                <button className="px-6 cursor-pointer mt-auto bg-[var(--primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] text-white text-sm py-2 rounded-full font-medium transition">
                  Details
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
