import logo from "../assets/images/logo.png";
import coin from "../assets/images/coin.png";
import userIcon from "../assets/images/user.png";

import { useAuth } from "../context/AuthContext";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

function MenuItem({ to, icon, label }) {
  return (
    <Link to={to}>
      <div class="flex items-center px-4 py-2 gap-2 hover:bg-gray-300 rounded-md mb-2">
        <span className="text-[var(--icon)]">{icon}</span>
        <span>{label}</span>
      </div>
    </Link>
  );
}

const menuIcons = {
  main: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 3L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h7v-6h2v6h7v-9.38l1.79 1.36L23 11.4zm-2-2c0 1.66-1.34 3-3 3c-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3c.55 0 1-.45 1-1z"
      />
    </svg>
  ),
  profile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
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
  subscriptions: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 48 48"
    >
      <g fill="currentColor">
        <path d="M11.01 21.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm9.612 5.923c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071zm-9.612 2.077c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm25.98 0c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zM13.5 16v-3h-2v3zm3.5-2v3h-2v-3zm3.5 4v-3h-2v3zm14-2v-3h2v3zM31 14v3h2v-3zm-3.5 4v-3h2v3z" />
        <path
          fill-rule="evenodd"
          d="m24 11.24l.258-.055c4.996-2.406 9.301-4.136 15.268-2.608A1.97 1.97 0 0 1 41 10.492v.281q1.079.217 2.243.498a.99.99 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987c-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.01 1.01 0 0 1 4 37.775V12.236a.99.99 0 0 1 .757-.965A60 60 0 0 1 7 10.773v-.281c0-.88.583-1.687 1.474-1.915c5.967-1.528 10.272.202 15.268 2.608zm1 1.807c4.98-2.404 8.734-3.88 14-2.54v22.548q0 .002-.008.008a.06.06 0 0 1-.052.013c-4.9-.898-8.681.037-12.795 1.826A3 3 0 0 0 25 34.171zm-2 .001v21.123a3 3 0 0 0-1.145.731c-4.114-1.79-7.896-2.724-12.795-1.826a.06.06 0 0 1-.053-.013h-.001L9 33.054V10.507c5.266-1.34 9.02.137 14 2.541m19-.015q-.51-.116-1-.218v20.24c0 1.31-1.21 2.21-2.421 1.989c-3.776-.693-6.8-.193-10.073 1.052c4.573-.533 8.428-.402 13.494.487zM19.494 36.096c-3.272-1.245-6.297-1.745-10.073-1.052C8.211 35.266 7 34.365 7 33.055v-20.24q-.49.102-1 .218v23.55c5.066-.889 8.92-1.02 13.494-.487"
          clip-rule="evenodd"
        />
      </g>
    </svg>
  ),

  wallet: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5.75 7a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M21.188 8.004q-.094-.005-.2-.004h-2.773C15.944 8 14 9.736 14 12s1.944 4 4.215 4h2.773q.106.001.2-.004c.923-.056 1.739-.757 1.808-1.737c.004-.064.004-.133.004-.197V9.938c0-.064 0-.133-.004-.197c-.069-.98-.885-1.68-1.808-1.737m-3.217 5.063c.584 0 1.058-.478 1.058-1.067c0-.59-.474-1.067-1.058-1.067s-1.06.478-1.06 1.067c0 .59.475 1.067 1.06 1.067"
        clip-rule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.14 8.002c0-1.181-.044-2.448-.798-3.355a4 4 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 3 14.644 3 12.806 3h-2.112C8.856 3 7.4 3 6.26 3.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87C2 8.401 2 9.856 2 11.694v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238q.305-.308.526-.66c.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 16 14 14.264 14 12s1.944-4 4.215-4h2.773q.079 0 .151.002"
        opacity="0.5"
      />
    </svg>
  ),
  invoices: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Z" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 1.5v-11" />
      </g>
    </svg>
  ),
  exams: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 256 256"
      aria-hidden="true"
      class="iconify iconify--ph"
      preserveAspectRatio="xMidYMid meet"
      role="img"
    >
      <g fill="currentColor">
        <path
          d="M224 56v160l-32-16l-32 16l-32-16l-32 16l-32-16l-32 16V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
          opacity=".2"
        ></path>
        <path d="M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.16L64 208.94l28.42 14.22a8 8 0 0 0 7.16 0L128 208.94l28.42 14.22a8 8 0 0 0 7.16 0L192 208.94l28.42 14.22A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16m0 163.06l-20.42-10.22a8 8 0 0 0-7.16 0L160 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L96 207.06l-28.42-14.22a8 8 0 0 0-7.16 0L40 203.06V56h176Zm-155.58-35.9a8 8 0 0 0 10.74-3.58L76.94 152h38.12l5.78 11.58a8 8 0 1 0 14.32-7.16l-32-64a8 8 0 0 0-14.32 0l-32 64a8 8 0 0 0 3.58 10.74M96 113.89L107.06 136H84.94ZM136 128a8 8 0 0 1 8-8h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1-8-8"></path>
      </g>
    </svg>
  ),
};

function Header() {
  const location = useLocation();

const fixedRoutes = ["/", "/login", "/register"];

const headerClass = fixedRoutes.includes(location.pathname)
  ? "fixed top-0 w-full z-50"
  : "sticky top-0 w-full z-50";

  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` ${headerClass} mx-auto  transition-colors duration-400 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div class="flex justify-between items-center py-2 max-w-[80rem] mx-auto px-2 sm:px-6 lg:px-8 h-[72px]">
        {/* Header-Img */}
        <Link to="/">
          <img src={logo} alt="logo" class="h-12 sm:h-14 w-auto" />
        </Link>
        {/* Header-Btn */}
        <div class="flex items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-6">
          {isLoggedIn ? (
            <>
              <div>
                <div className="md:hidden flex justify-center items-center rounded-full p-2 bg-transparent border-2 border-cyan-400 hover:bg-cyan-100 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 48 48"
                    className="text-cyan-500"
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
                </div>
                <Link
                  to="/months-courses"
                  className="hidden md:inline-flex relative group items-center px-8 py-2 overflow-hidden text-lg font-medium text-[var(--primary)] border-2 border-[var(--primary)] rounded-md hover:text-white group hover:bg-gray-50"
                >
                  <span className="absolute right-0 block w-full h-0 transition-all bg-[var(--primary)] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-200 ease"></span>

                  <span className="absolute left-0 pl-2 flex items-center justify-end w-10 h-10 duration-300 transform -translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      ></path>
                    </svg>
                  </span>

                  <span className="relative text-base font-semibold transition-all duration-300 group-hover:translate-x-3">
                    الباقات والمحاضرات
                  </span>
                </Link>
              </div>

              <Link to="/profile/wallet">
                <div>
                  <div className="rounded-md bg-slate-900 smooth flex flex-row flex-center-both overflow-hidden items-center">
                    <div className="text-slate-100 md:pb-0.5 font-small md:px-2 px-1">
                      1352 جنيه
                    </div>
                    <div className="text-slate-100 font-h3 bg-[#107fb4] rounded-md md:px-2 md:py-2 py-2 px-1">
                      <span>
                        <img src={coin} alt="" className="w-6" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <div class="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  class="flex items-center justify-center rounded-full cursor-pointer"
                >
                  <img src={userIcon} alt="" class="w-10" />
                </button>

                <div
                  className={`absolute left-0 mt-2 w-56 bg-gray-100 border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-300 ${
                    menuOpen ? "block" : "hidden"
                  }`}
                >
                  <div class="text-sm p-3">
                    <MenuItem
                      to={"/"}
                      label={"الصفحة الرئيسية"}
                      icon={menuIcons.main}
                    />
                    <div class="h-1 bg-gray-300 my-2 mx-auto"></div>
                    <div class="px-4 py-2 text-gray-700 text-center">
                      أهلاً Ziad Mostafa
                    </div>
                    <MenuItem
                      to={"/profile"}
                      label={"حسابي"}
                      icon={menuIcons.profile}
                    />
                    <MenuItem
                      to={"/profile/subscriptions"}
                      label={"اشتراكاتي"}
                      icon={menuIcons.subscriptions}
                    />
                    <MenuItem
                      to={"/profile/wallet"}
                      label={"محفظتي"}
                      icon={menuIcons.wallet}
                    />
                    <MenuItem
                      to={"/profile/invoices"}
                      label={"الفواتير"}
                      icon={menuIcons.invoices}
                    />
                    <MenuItem
                      to={"/profile/exams"}
                      label={"نتائج الامتحانات"}
                      icon={menuIcons.exams}
                    />
                    <button className="w-full cursor-pointer text-start px-4 py-2 hover:bg-gray-300 rounded-md text-red-500">
                      <i class="fa fa-sign-out ml-2"></i>{" "}
                      <span> تسجيل خروج</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/"
                class="hidden md:inline-flex relative group items-center px-8 py-2 overflow-hidden text-lg font-medium text-[var(--primary)] border-2 border-[var(--primary)] rounded-md hover:text-white group hover:bg-gray-50"
              >
                <span class="absolute right-0 block w-full h-0 transition-all bg-[var(--primary)] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-200 ease"></span>

                <span class="absolute left-0 pl-2 flex items-center justify-end w-10 h-10 duration-300 transform -translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                </span>

                <span class="relative text-base font-semibold transition-all duration-300 group-hover:translate-x-3">
                  الرئيسية
                </span>
              </Link>

              <Link
                to="/login"
                class="hidden md:flex relative items-center gap-1 rounded px-5 py-2.5 overflow-hidden group bg-[var(--primary)] hover:bg-gradient-to-r hover:from-[var(--primary)] hover:to-[var(--primary)] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[var(--primary)] transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  class="transition-transform duration-500 ease-in-out group-hover:rotate-180"
                >
                  <path
                    fill="currentColor"
                    d="M27 19c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.995 2.995 0 0 0-2.816 2h-5.77l7.3-7.3c.392.187.824.3 1.286.3c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3c0 .462.114.894.3 1.285L16 14.586V8c0-1.102.897-2 2-2h2V4h-2c-1.2 0-2.266.543-3 1.382A3.98 3.98 0 0 0 12 4h-1c-4.962 0-9 4.037-9 9v6c0 4.963 4.038 9 9 9h1c1.2 0 2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382h2v-2h-2c-1.103 0-2-.897-2-2v-6.586l8.3 8.301c-.187.391-.3.823-.3 1.285c0 1.655 1.346 3 3 3s3-1.345 3-3s-1.346-3-3-3a2.96 2.96 0 0 0-1.285.301l-7.301-7.3h5.77A2.995 2.995 0 0 0 27 19m0-4a1 1 0 0 1 0 2a1 1 0 0 1 0-2m0-11a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2m-13 8h-2v2h2v4h-2c-1.654 0-3 1.346-3 3v2h2v-2a1 1 0 0 1 1-1h2v4c0 1.103-.897 2-2 2h-1c-3.52 0-6.432-2.613-6.92-6H6v-2H4v-4h3c1.654 0 3-1.346 3-3V9H8v2a1 1 0 0 1-1 1H4.08c.488-3.387 3.4-6 6.92-6h1c1.103 0 2 .898 2 2zm14 15a1.001 1.001 0 0 1-2 0c0-.551.449-1 1-1s1 .449 1 1"
                  />
                </svg>

                <span class="relative text-base font-semibold">سجل دخولك</span>
              </Link>

              <Link
                to="/register"
                class="hidden md:flex items-center gap-1 relative rounded px-5 py-2.5 overflow-hidden group bg-[var(--primary)] hover:bg-gradient-to-r hover:from-imber-500 hover:to-[var(--primary)] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[var(--primary)] transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <i class="fa-solid fa-user-astronaut"></i>
                <span class="relative text-base font-semibold">
                  أنشئ حسابك الآن!
                </span>
              </Link>
              <Link to="/">
                <div class="md:hidden flex justify-center items-center rounded-full p-2 bg-transparent border-2 border-cyan-400 hover:bg-cyan-100 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 24 24"
                    class="text-cyan-500"
                  >
                    <path
                      fill="currentColor"
                      d="M12 3L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h7v-6h2v6h7v-9.38l1.79 1.36L23 11.4zm-2-2c0 1.66-1.34 3-3 3c-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3c.55 0 1-.45 1-1z"
                    />
                  </svg>
                </div>
              </Link>
              <div>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4em"
                    height="4em"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <linearGradient
                        id="meteoconsMistFill0"
                        x1="220"
                        x2="292"
                        y1="137.7"
                        y2="262.4"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#a0dcef" />
                        <stop offset=".5" stopColor="#3bc2ee" />
                        <stop offset="1" stopColor="#01aae1" />
                      </linearGradient>

                      <linearGradient
                        id="meteoconsMistFill1"
                        y1="193.7"
                        y2="318.4"
                        href="#meteoconsMistFill0"
                      />

                      <linearGradient
                        id="meteoconsMistFill2"
                        y1="249.7"
                        y2="374.4"
                        href="#meteoconsMistFill0"
                      />
                    </defs>

                    <path
                      fill="none"
                      stroke="url(#meteoconsMistFill0)"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="30"
                      d="M136 200h240"
                    >
                      <animateTransform
                        additive="sum"
                        attributeName="transform"
                        dur="3s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-48 0; 48 0; -48 0"
                      />
                    </path>

                    <path
                      fill="none"
                      stroke="url(#meteoconsMistFill1)"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="30"
                      d="M136 256h240"
                    >
                      <animateTransform
                        additive="sum"
                        attributeName="transform"
                        begin="-0.75s"
                        dur="3s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-48 0; 48 0; -48 0"
                      />
                    </path>

                    <path
                      fill="none"
                      stroke="url(#meteoconsMistFill2)"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="30"
                      d="M136 312h240"
                    >
                      <animateTransform
                        additive="sum"
                        attributeName="transform"
                        dur="3s"
                        repeatCount="indefinite"
                        type="translate"
                        values="48 0; -48 0; 48 0"
                      />
                    </path>
                  </svg>
                </button>{" "}
                <div class="md:hidden">
                  <div
                    className={`absolute flex flex-col items-center space-y-4 bg-blue-500 rounded-xl py-3 text-white left-2 right-2 drop-shadow-lg md:hidden transition-all duration-300 ${
                      mobileMenuOpen ? "block" : "hidden"
                    }`}
                  >
                    <div class="px-4 pt-4 pb-5 space-y-4 w-full">
                      <Link
                        to="/register"
                        class="group rounded-xl relative px-4 py-2 text-sm font-medium block bg-blue-800 hover:bg-blue-900"
                      >
                        <div class="flex justify-center items-center gap-1">
                          <span class="flex-center-both trasnform font-h1 text-blue-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 32 32"
                              class="transition-transform duration-500 ease-in-out group-hover:rotate-180"
                            >
                              <path
                                fill="currentColor"
                                d="M27 19c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.995 2.995 0 0 0-2.816 2h-5.77l7.3-7.3c.392.187.824.3 1.286.3c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3c0 .462.114.894.3 1.285L16 14.586V8c0-1.102.897-2 2-2h2V4h-2c-1.2 0-2.266.543-3 1.382A3.98 3.98 0 0 0 12 4h-1c-4.962 0-9 4.037-9 9v6c0 4.963 4.038 9 9 9h1c1.2 0 2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382h2v-2h-2c-1.103 0-2-.897-2-2v-6.586l8.3 8.301c-.187.391-.3.823-.3 1.285c0 1.655 1.346 3 3 3s3-1.345 3-3s-1.346-3-3-3a2.96 2.96 0 0 0-1.285.301l-7.301-7.3h5.77A2.995 2.995 0 0 0 27 19m0-4a1 1 0 0 1 0 2a1 1 0 0 1 0-2m0-11a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2m-13 8h-2v2h2v4h-2c-1.654 0-3 1.346-3 3v2h2v-2a1 1 0 0 1 1-1h2v4c0 1.103-.897 2-2 2h-1c-3.52 0-6.432-2.613-6.92-6H6v-2H4v-4h3c1.654 0 3-1.346 3-3V9H8v2a1 1 0 0 1-1 1H4.08c.488-3.387 3.4-6 6.92-6h1c1.103 0 2 .898 2 2zm14 15a1.001 1.001 0 0 1-2 0c0-.551.449-1 1-1s1 .449 1 1"
                              />
                            </svg>
                          </span>
                          <span class="flex-center-both text-md">
                            انشئ حسابك الآن!
                          </span>
                        </div>
                      </Link>
                      <Link
                        to="/login"
                        class="group rounded-xl relative px-4 py-2 text-sm font-medium block bg-blue-800 hover:bg-blue-900"
                      >
                        <div class="flex justify-center items-center gap-1">
                          <span class="flex-center-both trasnform font-h1 text-blue-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 32 32"
                              class="transition-transform duration-500 ease-in-out group-hover:rotate-180"
                            >
                              <path
                                fill="currentColor"
                                d="M27 19c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.995 2.995 0 0 0-2.816 2h-5.77l7.3-7.3c.392.187.824.3 1.286.3c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3c0 .462.114.894.3 1.285L16 14.586V8c0-1.102.897-2 2-2h2V4h-2c-1.2 0-2.266.543-3 1.382A3.98 3.98 0 0 0 12 4h-1c-4.962 0-9 4.037-9 9v6c0 4.963 4.038 9 9 9h1c1.2 0 2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382h2v-2h-2c-1.103 0-2-.897-2-2v-6.586l8.3 8.301c-.187.391-.3.823-.3 1.285c0 1.655 1.346 3 3 3s3-1.345 3-3s-1.346-3-3-3a2.96 2.96 0 0 0-1.285.301l-7.301-7.3h5.77A2.995 2.995 0 0 0 27 19m0-4a1 1 0 0 1 0 2a1 1 0 0 1 0-2m0-11a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2m-13 8h-2v2h2v4h-2c-1.654 0-3 1.346-3 3v2h2v-2a1 1 0 0 1 1-1h2v4c0 1.103-.897 2-2 2h-1c-3.52 0-6.432-2.613-6.92-6H6v-2H4v-4h3c1.654 0 3-1.346 3-3V9H8v2a1 1 0 0 1-1 1H4.08c.488-3.387 3.4-6 6.92-6h1c1.103 0 2 .898 2 2zm14 15a1.001 1.001 0 0 1-2 0c0-.551.449-1 1-1s1 .449 1 1"
                              />
                            </svg>
                          </span>
                          <span class="flex-center-both text-md">
                            سجل دخولك
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <ProgressBar />
    </header>
  );
}
export default Header;
