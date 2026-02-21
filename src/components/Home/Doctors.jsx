import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { Link } from "react-router-dom";

// 1. استيراد الداتا الموحدة
import { allStaffData } from "../../data/staffData";

// استيراد ملفات Swiper
import "swiper/css";
import "swiper/css/navigation";

function Doctors() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 2. تصفية أول 5 دكاترة فقط عشان يظهروا في السلايدر زي ما كنت عامل يدوي
  const doctorsSlider = allStaffData
    .filter(
      (member) =>
        member.id.includes("ajla") ||
        member.id.includes("abdullah") ||
        member.id.includes("milana") ||
        member.id.includes("mostafa") ||
        member.id.includes("usama"),
    )
    .slice(0, 5);

  return (
    <section className="bg-[var(--karas_paper)] py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* الهيدر */}
        <div className="border-b border-[#d1cdc2] mb-12 pb-4 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-serif italic text-[#444]">
              Our Doctors
            </h2>
            <p className="text-[11px] text-[#aaa] mt-1 uppercase tracking-widest">
              Expert Medical Team
            </p>
          </div>

          {/* أزرار التنقل */}
          <div className="flex gap-4 mb-2">
            <button
              ref={prevRef}
              className="text-2xl text-[#888] hover:text-[#333] transition-colors"
            >
              &#8592;
            </button>
            <button
              ref={nextRef}
              className="text-2xl text-[#888] hover:text-[#333] transition-colors"
            >
              &#8594;
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3.3}
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
            0: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 30 },
            1024: { slidesPerView: 3.3, spaceBetween: 40 },
          }}
          className="team-swiper"
        >
          {doctorsSlider.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              {/* اللينك دلوقتي شغال بـ ID حقيقي من ملف الداتا */}
              <Link
                to={`/doctor/${doctor.id}`}
                className="flex flex-col items-start group"
              >
                {/* برواز الصورة - نفس تصميمك */}
                <div className="bg-white p-2 shadow-sm border border-[#e5e1d8] mb-5 w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* التفاصيل النصية */}
                <h4 className="text-[14px] font-bold text-[#333] uppercase tracking-widest leading-tight group-hover:text-[var(--primary)] transition-colors">
                  {doctor.name}
                </h4>
                <p className="text-[12px] text-[#888] mt-1 italic font-serif tracking-wide leading-tight">
                  {doctor.title} {/* غيرناها لـ title عشان تطابق ملف الداتا */}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Doctors;
