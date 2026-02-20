import { Link } from "react-router-dom";
import shape from "../../assets/images/shape-services-768x560.WEBP";

function Landing() {
  return (
    <section className="relative py-24 flex items-center justify-center bg-[var(--karas_paper)] px-4">
      <div className="absolute top-0 right-0">
        <img src={shape} alt="" className="ml-auto w-[600px] max-w-full" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img
          src={shape}
          alt=""
          className="mr-auto w-[600px] max-w-full rotate-180"
        />
      </div>
      <div className="max-w-3xl text-center pt-[79.05px]">
        {/* Badge */}
        <span className="inline-block mb-6 rounded-full bg-purple-100 px-4 py-1 text-xs font-semibold tracking-widest text-[var(--primary)]">
          VETERINARY EXCELLENCE
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-gray-900 leading-tight">
          Care, delivered{" "}
          <span className="font-heading block text-[var(--primary)] italic">
            deliberately.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          At Karas, we focus on providing veterinary care that is calm,
          deliberate, and tailored to each pet’s individual needs.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://karas.viggo.vet/online-booking/"
            target="_blank"
            className="cursor-pointer rounded-lg bg-[var(--primary)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary1)]"
          >
            Book Appointment
          </a>

          <Link to="/all-services" className="cursor-pointer rounded-lg border border-[var(--primary)] px-8 py-3 text-sm font-semibold text-[var(--primary)] transition hover:bg-purple-100">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Landing;
