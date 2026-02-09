import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileTabs from "../components/profile/ProfileTabs";
function ProfileLayout() {
  const location = useLocation();

  const titlesMap = {
    "/profile": "ملف المستخدم",
    "/profile/subscriptions": "اشتراكاتي",
    "/profile/wallet": "محفظتي",
    "/profile/invoices": "الفواتير",
    "/profile/exams": "نتائج الامتحانات",
  };

  const svgsMap = {
    "/profile": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 32 32"
      >
        <path
          fill="none"
          d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0M20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5"
        />
        <path
          fill="currentColor"
          d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.9 13.9 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3q.418.457.87.87q.14.124.28.242q.48.415.99.782c.044.03.084.069.128.1v-.012a13.9 13.9 0 0 0 16 0v.012c.044-.031.083-.07.128-.1q.51-.368.99-.782q.14-.119.28-.242q.451-.413.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0"
        />
      </svg>
    ),
    "/profile/subscriptions": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 48 48"
      >
        <g fill="currentColor">
          <path d="M11.01 21.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm9.612 5.923c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071zm-9.612 2.077c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm25.98 0c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zM13.5 16v-3h-2v3zm3.5-2v3h-2v-3zm3.5 4v-3h-2v3zm14-2v-3h2v3zM31 14v3h2v-3zm-3.5 4v-3h2v3z" />
          <path
            fillRule="evenodd"
            d="m24 11.24l.258-.055c4.996-2.406 9.301-4.136 15.268-2.608A1.97 1.97 0 0 1 41 10.492v.281q1.079.217 2.243.498a.99.99 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987c-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.01 1.01 0 0 1 4 37.775V12.236a.99.99 0 0 1 .757-.965A60 60 0 0 1 7 10.773v-.281c0-.88.583-1.687 1.474-1.915c5.967-1.528 10.272.202 15.268 2.608zm1 1.807c4.98-2.404 8.734-3.88 14-2.54v22.548q0 .002-.008.008a.06.06 0 0 1-.052.013c-4.9-.898-8.681.037-12.795 1.826A3 3 0 0 0 25 34.171zm-2 .001v21.123a3 3 0 0 0-1.145.731c-4.114-1.79-7.896-2.724-12.795-1.826a.06.06 0 0 1-.053-.013h-.001L9 33.054V10.507c5.266-1.34 9.02.137 14 2.541m19-.015q-.51-.116-1-.218v20.24c0 1.31-1.21 2.21-2.421 1.989c-3.776-.693-6.8-.193-10.073 1.052c4.573-.533 8.428-.402 13.494.487zM19.494 36.096c-3.272-1.245-6.297-1.745-10.073-1.052C8.211 35.266 7 34.365 7 33.055v-20.24q-.49.102-1 .218v23.55c5.066-.889 8.92-1.02 13.494-.487"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ),
    "/profile/wallet": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5.75 7a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.188 8.004q-.094-.005-.2-.004h-2.773C15.944 8 14 9.736 14 12s1.944 4 4.215 4h2.773q.106.001.2-.004c.923-.056 1.739-.757 1.808-1.737c.004-.064.004-.133.004-.197V9.938c0-.064 0-.133-.004-.197c-.069-.98-.885-1.68-1.808-1.737m-3.217 5.063c.584 0 1.058-.478 1.058-1.067c0-.59-.474-1.067-1.058-1.067s-1.06.478-1.06 1.067c0 .59.475 1.067 1.06 1.067"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M21.14 8.002c0-1.181-.044-2.448-.798-3.355a4 4 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 3 14.644 3 12.806 3h-2.112C8.856 3 7.4 3 6.26 3.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87C2 8.401 2 9.856 2 11.694v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238q.305-.308.526-.66c.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 16 14 14.264 14 12s1.944-4 4.215-4h2.773q.079 0 .151.002"
          opacity="0.5"
        />
      </svg>
    ),
    "/profile/invoices": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Z" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 1.5v-11" />
        </g>
      </svg>
    ),
    "/profile/exams": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="2em"
        height="2em"
        viewBox="0 0 256 256"
        aria-hidden="true"
        className="iconify iconify--ph"
        preserveAspectRatio="xMidYMid meet"
        role="img"
      >
        <g fill="currentColor">
          <path
            d="M224 56v160l-32-16l-32 16l-32-16l-32 16l-32-16l-32 16V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
            opacity=".2"
          />
          <path d="M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.16L64 208.94l28.42 14.22a8 8 0 0 0 7.16 0L128 208.94l28.42 14.22a8 8 0 0 0 7.16 0L192 208.94l28.42 14.22A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16m0 163.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 203.06V56h176Zm-155.58-35.9a8 8 0 0 0 10.74-3.58L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 3.58 10.74M96 113.89L107.06 136H84.94ZM136 128a8 8 0 0 1 8-8h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1-8-8" />
        </g>
      </svg>
    ),
  };
  const title = titlesMap[location.pathname] || "ملف المستخدم";
  const currentSVG = svgsMap[location.pathname] || svgsMap["/profile"];

  return (
    <>
      <Header />
      <div class="py-6 rounded-2xl">
        <div
          id="background"
          class="rounded-md m-1 sm:m-4 shadow-2xl relative h-[300px]"
        ></div>

        <section class="mx-2 sm:mx-[5vw] -mt-28 relative rounded-md mb-20 bg-white shadow-2xl min-h-screen">
          <div class="pt-10">
            <div class="flex justify-center">
              <div class="flex flex-col justify-center items-center">
                <div>
                  <div class="bg-blue-500 text-white p-1 px-5 rounded-full relative -mb-5">
                    {currentSVG}
                  </div>
                </div>
                <div class="text-center bg-slate-200 py-4 sm:w-[300px] w-[200px] rounded-full font-bold text-2xl">
                  {title}
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:flex-col pt-5">
            <ProfileTabs />

            <Outlet />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default ProfileLayout;
