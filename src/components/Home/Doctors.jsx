import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import doctor1 from "../../assets/images/doctors/Ajla Zahirovic.jpg";
import doctor2 from "../../assets/images/doctors/Abdullah Ghonim.jpg";
import doctor3 from "../../assets/images/doctors/Milana Skoric.jpg";
import doctor4 from "../../assets/images/doctors/Dr. Mostafa Zein.jpg";
import doctor5 from "../../assets/images/doctors/Usama Rehman.jpg";
import { useRef } from "react";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Aila Zahirovic, DVM (RVMP)",
    role: "Medical Director | JLT Branch",
    image: doctor1,
  },
  {
    name: "Dr. Abdullah Mahmoud, DVM",
    role: "Veterinary Surgeon | JLT Branch",
    image: doctor2,
  },
  {
    name: "Dr. Milana Skoric, DVM, CVA",
    role: "Veterinary Clinician | JLT Branch",
    image: doctor3,
  },
  {
    name: "Dr. Mostafa Zein, DVM",
    role: "Veterinary Doctor | Business Bay",
    image: doctor4,
  },
  {
    name: "Dr. Usama Rehman, DVM",
    role: "Veterinary Doctor | Business Bay",
    image: doctor5,
  },
];

function Doctors() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[var(--karas_paper)] py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-heading text-[#3b2a6d] ">Our Doctors</h2>
        <div className="border border-[var(--primary)] w-46 mb-10"></div>

        {/* أزرار مخصصة */}
        <div
          ref={prevRef}
          className="hidden md:block  absolute top-1/2 left-2 z-10 cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-purple-100 transition"
        >
          &#8592; {/* سهم لليسار */}
        </div>
        <div
          ref={nextRef}
          className="hidden md:block absolute top-1/2 right-2 z-10 cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-purple-100 transition"
        >
          &#8594; {/* سهم لليمين */}
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          grabCursor
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.3 },
          }}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <Link
                to="/our-team"
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-[470px] object-cover"
                />
                <div className="px-6 py-4 bg-white rounded-b-lg">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {doctor.name}
                  </h3>
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-sm text-[var(--primary)] uppercase tracking-wide mt-2">
                      {doctor.role}
                    </p>
                    {/* <a
                      href="#"
                      className="bg-[var(--primary)] text-white rounded-lg py-1 px-3 hover:bg-[var(--primary1)] transition "
                    >
                      About
                    </a> */}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Doctors;
