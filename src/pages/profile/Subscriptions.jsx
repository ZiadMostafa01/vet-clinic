import { Link } from "react-router-dom";
import img from "../../assets/images/489009076_9521894934603823_7702292921294509636_n.jpg";
function Subscriptions() {
  return (
    <div class="my-10">
      <div class="flex justify-center items-center gap-2 mt-20 p-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 32 32"
          class="text-blue-400"
        >
          <circle cx="11" cy="8" r="1" fill="currentColor" />
          <circle cx="11" cy="16" r="1" fill="currentColor" />
          <circle cx="11" cy="24" r="1" fill="currentColor" />
          <path
            fill="currentColor"
            d="M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h10v-2H8v-6h18V5a2 2 0 0 0-2-2m0 16H8v-6h16Zm0-8H8V5h16Z"
          />
          <path
            fill="currentColor"
            d="M29 24.415L27.586 23L25 25.587L22.414 23L21 24.415L23.586 27L21 29.586L22.414 31L25 28.414L27.586 31L29 29.586L26.414 27z"
          />
        </svg>
        <span class="text-2xl">انت غير مشترك بأي كورس حتي الآن!</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:p-6 sm:mx-[2vw] md:mx-[5vw] lg:mx-[0vw] xl:mx-[5vw]">
        <div class="group transform transition-transform duration-300">
          <div class="rounded-md overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
            <img
              src={img}
              alt=""
              class="w-full object-cover rounded-md group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-150 transition-all duration-500"
            />
          </div>

          <div class="bg-white rounded-md shadow-md hover:shadow-2xl border-2 border-cyan-500 -mt-6 mx-4 md:p-4 z-10 relative py-8 group-hover:scale-[1.02] transition duration-500">
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-900 mb-2">
                الدرس التالت (3) - التيار الكهربي و قانون أوم - تالتة ثانوي
              </h2>
              <hr class="border-t-2 border-teal-500 w-24 my-2" />

              <div class="flex flex-col gap-2 text-sm text-gray-700 mb-4">
                <p class="sm:mr-6">
                  🧠 امتحان شامل على الدرس + تدريبات تطبيقية 🚀
                </p>
                <p class="sm:mr-6">🔋 شرح شامل لـ الدرس مع أمثلة وتطبيق مكثف</p>
                <p class="sm:mr-6">
                  📂 ملف شرح مخصوص علشان يفهّمك كل جزئية بسهولة
                </p>
                <p class="mt-2">
                  ومش بس كده... مستنيك تبدأ تذاكر معايا وتفهم الفيزياء صح،
                  وفرصتك لسه موجودة! 🎯
                </p>
              </div>

              <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM3 6a1 1 0 011-1h12a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2 0v9h10V6H5z"></path>
                  </svg>
                  <span>الأربعاء، 30 أبريل 2025</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8H9V5a1 1 0 112 0v5zM9 13a1 1 0 102 0 1 1 0 00-2 0z"></path>
                  </svg>
                  <span>الجمعة، 14 مارس 2025</span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <Link
                  to="/pre-media"
                  class="px-4 py-2 text-sm border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50"
                >
                  الدخول للكورس
                </Link>
                <div class="px-4 py-2 text-sm border border-cyan-400 bg-cyan-50 text-cyan-500 rounded-md text-center">
                  انت مشترك
                  <br />
                  في هذا الكورس
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="group transform transition-transform duration-300">
          <div class="rounded-md overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
            <img
              src={img}
              alt=""
              class="w-full object-cover rounded-md group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-150 transition-all duration-500"
            />
          </div>

          <div class="bg-white rounded-md shadow-md hover:shadow-2xl border-2 border-cyan-500 -mt-6 mx-4 md:p-4 z-10 relative py-8 group-hover:scale-[1.02] transition duration-500">
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-900 mb-2">
                الدرس التاني (2) - التيار الكهربي و قانون أوم - تالتة ثانوي
              </h2>
              <hr class="border-t-2 border-teal-500 w-24 my-2" />

              <div class="flex flex-col gap-2 text-sm text-gray-700 mb-4">
                <p class="sm:mr-6">
                  🧠 امتحان شامل على الدرس + تدريبات تطبيقية 🚀
                </p>
                <p class="sm:mr-6">🔋 شرح شامل لـ الدرس مع أمثلة وتطبيق مكثف</p>
                <p class="sm:mr-6">
                  📂 ملف شرح مخصوص علشان يفهّمك كل جزئية بسهولة
                </p>
                <p class="mt-2">
                  ومش بس كده... مستنيك تبدأ تذاكر معايا وتفهم الفيزياء صح،
                  وفرصتك لسه موجودة! 🎯
                </p>
              </div>

              <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM3 6a1 1 0 011-1h12a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2 0v9h10V6H5z"></path>
                  </svg>
                  <span>الأربعاء، 30 أبريل 2025</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8H9V5a1 1 0 112 0v5zM9 13a1 1 0 102 0 1 1 0 00-2 0z"></path>
                  </svg>
                  <span>الجمعة، 14 مارس 2025</span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <Link
                  to="/pre-media"
                  class="px-4 py-2 text-sm border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50"
                >
                  الدخول للكورس
                </Link>
                <div class="px-4 py-2 text-sm border border-cyan-400 bg-cyan-50 text-cyan-500 rounded-md text-center">
                  انت مشترك
                  <br />
                  في هذا الكورس
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="group transform transition-transform duration-300">
          <div class="rounded-md overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
            <img
              src={img}
              alt=""
              class="w-full object-cover rounded-md group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-150 transition-all duration-500"
            />
          </div>

          <div class="bg-white rounded-md shadow-md hover:shadow-2xl border-2 border-cyan-500 -mt-6 mx-4 md:p-4 z-10 relative py-8 group-hover:scale-[1.02] transition duration-500">
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-900 mb-2">
                الدرس الأول (1) - التيار الكهربي و قانون أوم - تالتة ثانوي
              </h2>
              <hr class="border-t-2 border-teal-500 w-24 my-2" />

              <div class="flex flex-col gap-2 text-sm text-gray-700 mb-4">
                <p class="sm:mr-6">
                  🧠 امتحان شامل على الدرس + تدريبات تطبيقية 🚀
                </p>
                <p class="sm:mr-6">🔋 شرح شامل لـ الدرس مع أمثلة وتطبيق مكثف</p>
                <p class="sm:mr-6">
                  📂 ملف شرح مخصوص علشان يفهّمك كل جزئية بسهولة
                </p>
                <p class="mt-2">
                  ومش بس كده... مستنيك تبدأ تذاكر معايا وتفهم الفيزياء صح،
                  وفرصتك لسه موجودة! 🎯
                </p>
              </div>

              <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM3 6a1 1 0 011-1h12a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2 0v9h10V6H5z"></path>
                  </svg>
                  <span>الأربعاء، 30 أبريل 2025</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8H9V5a1 1 0 112 0v5zM9 13a1 1 0 102 0 1 1 0 00-2 0z"></path>
                  </svg>
                  <span>الجمعة، 14 مارس 2025</span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <Link
                  to="/pre-media"
                  class="px-4 py-2 text-sm border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50"
                >
                  الدخول للكورس
                </Link>
                <div class="px-4 py-2 text-sm border border-cyan-400 bg-cyan-50 text-cyan-500 rounded-md text-center">
                  انت مشترك
                  <br />
                  في هذا الكورس
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subscriptions;
