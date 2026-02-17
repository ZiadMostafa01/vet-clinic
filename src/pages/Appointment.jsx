import bg from "../assets/images/bg_img.png";
import { CheckCircle } from "lucide-react";
import { MessageCircleMore, Mail, FileText } from "lucide-react";
import { Heart, Dog, Stethoscope, PawPrint } from "lucide-react";
import PagesHeader from "../components/PagesHeader";

const features = [
  {
    title: "Compassionate Care",
    desc: "Rhoncus interdum platea sapien quisque dignissim volutpat ornare",
    icon: Heart,
  },
  {
    title: "Personalized Attention",
    desc: "Rhoncus interdum platea sapien quisque dignissim volutpat ornare",
    icon: Dog,
  },
  {
    title: "Trusted Expertise",
    desc: "Rhoncus interdum platea sapien quisque dignissim volutpat ornare",
    icon: Stethoscope,
  },
  {
    title: "Effortless Experience",
    desc: "Rhoncus interdum platea sapien quisque dignissim volutpat ornare",
    icon: PawPrint,
  },
];
export default function Appointment() {
  return (
    <div>
      <PagesHeader
        title="Appointment"
        description={
          <>
            Book Your Pet’s Comprehensive <br /> Wellness Appointment Now
          </>
        }
      />

      {/* Form Section */}
      <main className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
        <div className="bg-white pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center px-8 py-6"
                >
                  {/* dashed separator */}
                  {index !== features.length - 1 && (
                    <div className="hidden lg:block absolute top-0 right-0 h-full border-r-2 border-dashed border-gray-300"></div>
                  )}

                  {/* icon box */}
                  <div className="w-16 h-16 bg-orange-400 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="text-white w-8 h-8" />
                  </div>

                  <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mb-6 text-sm">{item.desc}</p>

                  <button className="cursor-pointer bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] px-6 py-2 rounded-full transition">
                    Learn more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center max-w-7xl rounded-2xl sm:mx-1 p-3 sm:p-12"
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#503A6E",
            width: "100%",
          }}
        >
          <div className="relative z-10 bg-white w-full max-w-4xl rounded-xl shadow-xl p-10">
            {/* Badge */}
            <div className="flex justify-center">
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
                Get In Touch
              </span>
            </div>

            {/* Title */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4b2e6f] mb-10 leading-snug">
              Schedule Expert Care Tailored to <br />
              Your Pet’s Needs
            </h2>

            {/* Form */}
            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#4b2e6f] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg text-sm bg-gray-200 focus:bg-gray-100 transition duration-300 px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#4b2e6f] mb-2">
                    Pet Name
                  </label>
                  <input
                    type="text"
                    placeholder="Pet Name"
                    className="w-full rounded-lg text-sm bg-gray-200 focus:bg-gray-100 transition duration-300 px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#4b2e6f] mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full rounded-lg text-sm  bg-gray-200 focus:bg-gray-100 transition duration-300 px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#4b2e6f] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg text-sm bg-gray-200 focus:bg-gray-100 transition duration-300 px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#4b2e6f] mb-2">
                    Services
                  </label>
                  <select className="w-full rounded-lg text-sm bg-gray-200 focus:bg-gray-100 transition duration-300 px-4 py-3 outline-none focus:ring focus:ring-purple-400">
                    <option>Wellness Check</option>
                    <option>Vaccination</option>
                    <option>Grooming</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#4b2e6f] mb-2">
                    Select Doctor
                  </label>
                  <select className="w-full rounded-lg text-sm bg-gray-200 focus:bg-gray-100 transition duration-300 px-4 py-3 outline-none focus:ring focus:ring-purple-400">
                    <option>Dr. Michael gerges</option>
                    <option>Dr. Diana Lavareda</option>
                    <option>Dr. Sophia Lane</option>
                    <option>Dr. Azijada Mulalić</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#4b2e6f] mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-lg text-sm bg-gray-200 focus:bg-gray-100 transition duration-300 px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#4b2e6f] mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  className="w-full h-32 rounded-lg text-sm bg-gray-200 focus:bg-gray-100 transition duration-300 px-4 py-3 outline-none focus:ring focus:ring-purple-400 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] font-semibold py-3 rounded-full transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v5.025q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V5H5v14h5q.425 0 .713.288T11 20t-.288.713T10 21zm0-3v1V5v6.075V11zm3-1h2.5q.425 0 .713-.288T11.5 16t-.288-.712T10.5 15H8q-.425 0-.712.288T7 16t.288.713T8 17m0-4h5q.425 0 .713-.288T14 12t-.288-.712T13 11H8q-.425 0-.712.288T7 12t.288.713T8 13m0-4h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8t.288.713T8 9m4.538-4.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213M18 23q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-.5-4.5v2q0 .2.15.35T18 21t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 18t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 15t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 18t.15.35t.35.15z"
                  />
                </svg>{" "}
                Booking Now
              </button>
            </form>
          </div>
        </div>{" "}
        <div className="pt-28 bg-white">
          {/* Header */}
          <div className="text-center mb-20 space-y-6">
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
              Need More Support
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#3f2a63] leading-tight">
              Discover Helpful Answers from our <br />
              Veterinary Experts
            </h2>
          </div>

          {/* Cards */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            {/* Card 1 */}
            <div className="border-2 border-dashed border-[#7b5ca8] rounded-2xl py-8  text-center space-y-3">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-[#FFD7C2]">
                <MessageCircleMore size={28} className="text-[#4b2e6f]" />
              </div>

              <h3 className="text-xl font-bold text-[#3f2a63]">
                Customer Support
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                Dapibus orci rutrum sit praesent bibendum ullamcorper
                consectetur elit sodales
              </p>

              <button className="bg-[var(--primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] text-sm cursor-pointer text-white px-8 py-2 rounded-full font-semibold hover:bg-[#5a3e7d] transition">
                Chat now
              </button>
            </div>

            {/* Card 2 (Active) */}
            <div className="bg-[#503A6E] rounded-2xl py-8   text-center space-y-3 text-white shadow-xl">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-[#FFD7C2] text-[#503A6E]">
                <Mail size={28} className="text-[#4b2e6f]" />
              </div>

              <h3 className="text-xl font-bold">Ticket Support</h3>

              <p className="text-gray-200 text-sm  leading-relaxed">
                Dapibus orci rutrum sit praesent bibendum ullamcorper
                consectetur elit sodales
              </p>

              <button className="bg-white text-sm hover:bg-[#F5D7DF] text-[#4b2e6f] px-8 py-2 rounded-full font-semibold cursor-pointer transition">
                Send ticket
              </button>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-dashed border-[#7b5ca8] rounded-2xl py-8   text-center space-y-3">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-[#FFD7C2]">
                <FileText size={28} className="text-[#4b2e6f]" />
              </div>

              <h3 className="text-xl font-bold text-[#3f2a63]">Free Insight</h3>

              <p className="text-gray-500 text-sm  leading-relaxed">
                Dapibus orci rutrum sit praesent bibendum ullamcorper
                consectetur elit sodales
              </p>

              <button className="bg-[var(--primary)] hover:bg-[var(--secondary)]  hover:text-[var(--primary)] text-sm cursor-pointer  text-white px-8 py-2 rounded-full font-semibold hover:bg-[#5a3e7d] transition">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
