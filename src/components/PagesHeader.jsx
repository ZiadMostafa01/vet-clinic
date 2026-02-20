import circle from "../assets/images/Circle.webp";
import shape from "../assets/images/shape-services-768x560.WEBP";

function PagesHeader({ title, description }) {
  return (
    <div>
      <div className="absolute top-0 -right-80 overflow-hidden ">
        <img
          src={circle}
          alt=""
          className="ml-auto  overflow-hidden  w-[600px] max-w-full"
        />
      </div>
      <div className="absolute bottom-0 -left-80 overflow-hidden ">
        <img
          src={circle}
          alt=""
          className="ml-auto  overflow-hidden  w-[600px] max-w-full"
        />
      </div>
      <div className="relative py-16 flex items-center justify-center  px-4">
        <div className="max-w-3xl text-center pt-[79.05px]">
          {/* Heading */}
          <h1 className="font-heading  text-[var(--primary)] italic text-4xl sm:text-5xl md:text-7xl font-extrabold  leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="font-heading  mt-6 text-lg sm:text-lg text-gray-600 max-w-xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default PagesHeader;
