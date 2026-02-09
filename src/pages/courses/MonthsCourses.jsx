import bg from "../../assets/images/funky-lines.webp";
import img from "../../assets/images/489009076_9521894934603823_7702292921294509636_n.jpg";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 5,
    image: img,
    title: "محتوي شهـر (5) - تالتـة ثانـوي",
    lectures: [
      "التيار الكهربي و قانون أوم",
      "توصيل المقاومات",
      "قانون أوم للدائرة المغلقة",
      "قانونا كيرشوف",
      "مراجعة شاملة علي الفصل الأول",
    ],
    publishDate: "الأربعاء، 30 أبريل 2025",
    endDate: "الأربعاء، 30 مارس 2025",
  },
  {
    id: 4,
    image: img,
    title: "محتوي شهـر (4) - تالتـة ثانـوي",
    lectures: [
      "التيار الكهربي و قانون أوم",
      "توصيل المقاومات",
      "قانون أوم للدائرة المغلقة",
      "قانونا كيرشوف",
      "مراجعة شاملة علي الفصل الأول",
    ],
    publishDate: "الأربعاء، 30 أبريل 2025",
    endDate: "الأربعاء، 30 مارس 2025",
  },
  {
    id: 3,
    image: img,
    title: "محتوي شهـر (3) - تالتـة ثانـوي",
    lectures: [
      "التيار الكهربي و قانون أوم",
      "توصيل المقاومات",
      "قانون أوم للدائرة المغلقة",
      "قانونا كيرشوف",
      "مراجعة شاملة علي الفصل الأول",
    ],
    publishDate: "الأربعاء، 30 أبريل 2025",
    endDate: "الأربعاء، 30 مارس 2025",
  },
  {
    id: 2,
    image: img,
    title: "محتوي شهـر (2) - تالتـة ثانـوي",
    lectures: [
      "التيار الكهربي و قانون أوم",
      "توصيل المقاومات",
      "قانون أوم للدائرة المغلقة",
      "قانونا كيرشوف",
      "مراجعة شاملة علي الفصل الأول",
    ],
    publishDate: "الأربعاء، 30 أبريل 2025",
    endDate: "الأربعاء، 30 مارس 2025",
  },
  {
    id: 1,
    image: img,
    title: "محتوي شهـر (1) - تالتـة ثانـوي",
    lectures: [
      "التيار الكهربي و قانون أوم",
      "توصيل المقاومات",
      "قانون أوم للدائرة المغلقة",
      "قانونا كيرشوف",
      "مراجعة شاملة علي الفصل الأول",
    ],
    publishDate: "الأربعاء، 30 أبريل 2025",
    endDate: "الأربعاء، 30 مارس 2025",
  },
];

function MediaPreview() {
  return (
    <div>
      <div
        id="background"
        className="rounded-md my-4 shadow-2xl relative h-[300px]"
      />

      <section
        className="relative -mt-56 my-20 py-10 mx-2 sm:mx-10 rounded-2xl shadow-xl"
        style={{ background: `url(${bg})` }}
      >
        {/* العنوان */}
        <div className="mb-16">
          <div>
            <div className="flex justify-center gap-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      dur="1.5s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                </svg>
              </div>

              {/* النص */}
              <div className="text-center font-semibold text-3xl sm:text-5xl">
                الشهور الدراسية
              </div>

              {/* أيقونة يمين */}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      dur="1.5s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                </svg>
              </div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                className="w-80 mx-auto"
              >
                <path
                  fill="#3FC7F3"
                  d="M450 65H130l-10-10h320l10 10zM870 65H550l10-10h320l-10 10zM500 15l35 35-35 35-35-35zM440 45H70l10-10h370l-10 10zM930 45H560l-10-10h370l10 10z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-6 px-1 sm:px-6 sm:mx-[2vw] md:mx-[10vw] lg:mx-[2vw]">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="group transform transition-transform duration-300"
            >
              <div className="rounded-md overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                <img
                  src={card.image}
                  alt=""
                  className="w-full object-cover rounded-md group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-150 transition-all duration-500"
                />
              </div>

              {/* الكارد الأبيض */}
              <div className="bg-white rounded-md shadow-md hover:shadow-2xl border-2 border-cyan-500 -mt-6 mx-4 p-4 z-10 relative group-hover:scale-[1.02] transition duration-500">
                <div className="p-2 sm:p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h2>

                  <hr className="border-t-2 border-teal-500 w-24 my-2" />

                  <div className="flex flex-col gap-2 text-sm text-gray-700 mb-4">
                    {card.lectures.map((lecture, index) => (
                      <p key={index}>
                        <span className="font-semibold">
                          المحاضرة {index + 1} :
                        </span>{" "}
                        {lecture}
                      </p>
                    ))}
                  </div>

                  <hr className="flex mx-auto border-t-2 border-teal-500 w-[90%] my-2" />

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM3 6a1 1 0 011-1h12a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2 0v9h10V6H5z" />
                      </svg>
                      <span>{card.publishDate}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8H9V5a1 1 0 112 0v5zM9 13a1 1 0 102 0 1 1 0 00-2 0z" />
                      </svg>
                      <span>{card.endDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-x-10">
                    <Link
                      to="/packages"
                      className="px-4 py-2 text-sm border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50"
                    >
                      الدخول لمحتوي الشهر
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MediaPreview;
