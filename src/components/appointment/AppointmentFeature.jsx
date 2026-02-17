import { Heart, Dog, Stethoscope, PawPrint } from "lucide-react";

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

function AppointmentFeature() {
  return (
    <div className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* --- فواصل الشاشات الكبيرة والمتوسطة (أبقاء الكود السابق كما هو) --- */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* الفاصل الرأسي (MD) */}
            <div className="absolute left-1/2 top-0 bottom-0 border-r border-dashed border-gray-300 lg:hidden"></div>

            {/* فواصل LG الثلاثة */}
            <div className="hidden lg:flex justify-between h-full w-full">
              <div className="h-full border-r border-dashed border-gray-300 ml-[25%]"></div>
              <div className="h-full border-r border-dashed border-gray-300"></div>
              <div className="h-full border-r border-dashed border-gray-300 mr-[25%]"></div>
            </div>
          </div>

          {/* الفاصل الأفقي (MD فقط لعمل شكل +) */}
          <div className="absolute inset-0 pointer-events-none hidden md:flex lg:hidden items-center">
            <div className="w-full border-b border-dashed border-gray-300"></div>
          </div>

          {/* --- رسم الكاردات مع فواصل الموبايل --- */}
          {features.map((item, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col items-center text-center px-8 py-8 lg:py-0 
                /* فاصل الموبايل: يظهر تحت كل عنصر ما عدا الأخير، ويختفي من أول الـ md */
                ${index !== features.length - 1 ? "border-b border-dashed border-gray-300 md:border-b-0" : ""}
              `}
            >
              <div className="w-16 h-16 bg-[#F6844D] rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-orange-100">
                <item.icon className="text-white w-8 h-8" />
              </div>

              <h3 className="text-lg font-semibold text-[var(--primary1)] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 mb-6 text-xs leading-relaxed">
                {item.desc}
              </p>

              <button className="cursor-pointer text-xs sm:text-sm bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] px-6 py-2 rounded-full transition">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppointmentFeature;
