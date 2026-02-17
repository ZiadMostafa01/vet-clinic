import { MessageCircleMore, Mail, FileText } from "lucide-react";
function AppointmentSupport() {
  return (
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

          <h3 className="text-xl font-bold text-[#3f2a63]">Customer Support</h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            Dapibus orci rutrum sit praesent bibendum ullamcorper consectetur
            elit sodales
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
            Dapibus orci rutrum sit praesent bibendum ullamcorper consectetur
            elit sodales
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
            Dapibus orci rutrum sit praesent bibendum ullamcorper consectetur
            elit sodales
          </p>

          <button className="bg-[var(--primary)] hover:bg-[var(--secondary)]  hover:text-[var(--primary)] text-sm cursor-pointer  text-white px-8 py-2 rounded-full font-semibold hover:bg-[#5a3e7d] transition">
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppointmentSupport;
