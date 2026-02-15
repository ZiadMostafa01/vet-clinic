import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo_main.png";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";

function Header() {
  const [subOpen, setSubOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const underline = "hover:text-[#F6844D] transition duration-300";
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-400
        ${scrolled ? "bg-white " : "bg-transparent"}
      `}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} className="w-44 sm:w-52" alt="" />{" "}
        </Link>
        <div className="flex items-center gap-6  text-gray-700">
          <nav className="translate-y-0.5 hidden lg:flex gap-6">
            <Link to="/" className={underline}>
              Home
            </Link>

            <div className="relative group">
              <a
                href="#about"
                className={`${underline} flex items-center gap-1`}
              >
                <span>About Us</span>
                <svg
                  aria-hidden="true"
                  class="e-font-icon-svg e-fas-angle-down w-2.5"
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                </svg>
              </a>
              <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <a href="#team" className="block px-4 py-2 hover:bg-purple-100">
                  Why Karas
                </a>
                <a href="#team" className="block px-4 py-2 hover:bg-purple-100">
                  Our Team
                </a>
                <a
                  href="#history"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Testimonials
                </a>
                <a
                  href="#mission"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  Volunteer
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Main dropdown trigger */}
              <div className="relative group">
                <a
                  href="#services"
                  className={`${underline} flex items-center gap-1`}
                >
                  <span>Services</span>
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fas-angle-down w-2.5"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>{" "}
                </a>

                {/* Main dropdown */}

                <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                  <div
                    className="relative"
                    onMouseEnter={() => setSubOpen(true)}
                    onMouseLeave={() => setSubOpen(false)}
                  >
                    <a
                      href="#surgery"
                      className="block px-4 py-2 hover:bg-purple-100 flex justify-between items-center"
                    >
                      Our Services
                      <i className="fa-solid fa-angle-right"></i>
                    </a>

                    {/* Sub-dropdown يظهر فقط عند hover على Surgery */}
                    {subOpen && (
                      <div className="absolute top-0 left-full mt-0 w-40 bg-white shadow-lg rounded-md z-50">
                        <a
                          href="#orthopedic"
                          className="block px-4 py-2 hover:bg-purple-100"
                        >
                          Diagnosis
                        </a>
                        <a
                          href="#dental"
                          className="block px-4 py-2 hover:bg-purple-100"
                        >
                          Microchipping
                        </a>
                        <a
                          href="#cardiology"
                          className="block px-4 py-2 hover:bg-purple-100"
                        >
                          Pet Vaccinations
                        </a>
                        <a
                          href="#cardiology"
                          className="block px-4 py-2 hover:bg-purple-100"
                        >
                          Flea & Tick Prevention
                        </a>
                        <a
                          href="#cardiology"
                          className="block px-4 py-2 hover:bg-purple-100"
                        >
                          Pharmacy & Refills
                        </a>
                        <a
                          href="#cardiology"
                          className="block px-4 py-2 hover:bg-purple-100"
                        >
                          Nutritional Counseling
                        </a>
                        <a
                          href="#cardiology"
                          className="block px-4 py-2 hover:bg-purple-100"
                        >
                          Pain Managment
                        </a>
                      </div>
                    )}
                  </div>
                  <a
                    href="#consulting"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    Our Prices
                  </a>

                  {/* عنصر Surgery مع sub-dropdown */}

                  <a
                    href="#vaccination"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    PCR Prices
                  </a>
                </div>
              </div>
            </div>
            <Link to="payment" className={underline}>
              Online Payment
            </Link>
            {/* For Vets Dropdown */}
            <div className="relative group">
              <a
                href="#vets"
                className={`${underline} flex items-center gap-1`}
              >
                <span>For Vets</span>
                <svg
                  aria-hidden="true"
                  class="e-font-icon-svg e-fas-angle-down w-2.5"
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                </svg>{" "}
              </a>
              <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <a
                  href="#resources"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  PCR Referral
                </a>
                <a
                  href="#signup"
                  className="block px-4 py-2 hover:bg-purple-100"
                >
                  X-Ray Referral
                </a>
              </div>
            </div>
          </nav>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="relative cursor-pointer block lg:hidden p-2 rounded-xl bg-[var(--primary)] hover:bg-[#F5D7DF] text-white hover:text-[var(--primary)] transition duration-300  w-10 h-10"
          >
            {/* Menu icon */}
            <svg
              viewBox="0 0 448 512"
              className={`absolute inset-0 m-auto w-5 h-5  transition-all duration-300
      ${mobileMenu ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}
    `}
              fill="currentColor"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>

            {/* Close icon */}
            <svg
              viewBox="0 0 352 512"
              className={`absolute inset-0 m-auto w-5 h-5 transition-all duration-300
      ${mobileMenu ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}
    `}
              fill="currentColor"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          </button>

          {/* Mobile Dropdown Panel */}
          <div
            className={`lg:hidden absolute top-full left-1/2 -translate-x-1/2
              rounded-b-2xl
  w-[calc(100%-3rem)] bg-white shadow-lg overflow-hidden
  transition-all duration-300 ease-in-out
  ${mobileMenu ? "max-h-screen " : "max-h-0 "}`}
          >
            <nav className="flex flex-col text-[15px] font-medium text-[#4b2e83]">
              <a className="mx-6 py-4 border-b border-dashed " href="#">
                Home
              </a>

              <details className="mx-6 py-4 border-b border-dashed group">
                <summary className="flex justify-between cursor-pointer">
                  About us
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fas-angle-down w-2.5 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>
                </summary>
                <div className="mt-3 flex flex-col gap-2 text-gray-600">
                  <a href="#" className={underline}>
                    Why Karas
                  </a>
                  <a href="#" className={underline}>
                    Our Team
                  </a>
                  <a href="#" className={underline}>
                    Testimonials
                  </a>
                  <a href="#" className={underline}>
                    Volunteer
                  </a>
                </div>
              </details>

              <details className="mx-6 py-4 border-b border-dashed group">
                <summary className="flex justify-between cursor-pointer">
                  Services
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fas-angle-down w-2.5 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>
                </summary>
                <div className="mt-3 flex flex-col gap-2 text-gray-600">
                  <a href="#" className={underline}>
                    Our Services
                  </a>
                  <a href="#" className={underline}>
                    Our Prices
                  </a>
                  <a href="#" className={underline}>
                    PCR Prices
                  </a>
                </div>
              </details>

              <a className="mx-6 py-4 border-b border-dashed " href="#">
                Online Payment
              </a>

              <details className="mx-6 py-4 group">
                <summary className="flex justify-between cursor-pointer">
                  For Vets
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fas-angle-down w-2.5 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>
                </summary>
                <div className="mt-3 flex flex-col gap-2 text-gray-600">
                  <a href="#" className={underline}>
                    PCR Referral
                  </a>
                  <a href="#" className={underline}>
                    X-Ray Referral
                  </a>
                </div>
              </details>
            </nav>
          </div>

          {/* Book Now Button */}
          <button className="hidden sm:flex cursor-pointer  items-center gap-1  text-sm bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] px-6 py-2 rounded-full transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v5.025q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V5H5v14h5q.425 0 .713.288T11 20t-.288.713T10 21zm0-3v1V5v6.075V11zm3-1h2.5q.425 0 .713-.288T11.5 16t-.288-.712T10.5 15H8q-.425 0-.712.288T7 16t.288.713T8 17m0-4h5q.425 0 .713-.288T14 12t-.288-.712T13 11H8q-.425 0-.712.288T7 12t.288.713T8 13m0-4h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8t.288.713T8 9m4.538-4.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213M18 23q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-.5-4.5v2q0 .2.15.35T18 21t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 18t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 15t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 18t.15.35t.35.15z"
              />
            </svg>{" "}
            <span>Book an Appointment</span>
          </button>
        </div>
      </div>
      <ProgressBar />
    </header>
  );
}
export default Header;
