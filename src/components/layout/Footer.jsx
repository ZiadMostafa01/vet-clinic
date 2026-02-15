import logo from "../../assets/images/Logo_main_light.png";

function Footer() {
  return (
    <footer className="bg-[#2a2140] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">
            {" "}
            <span className="inline-flex items-center gap-2 bg-[#F6844D] text-white px-3 py-2 rounded-full text-xs sm:text-sm  mb-4">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-paw w-4"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path>
              </svg>
              WELCOME TO KARAS
            </span>
          </h3>
          <div className="space-y-2 text-sm max-w-sm mb-4">
            Karas Veterinary Clinic provides loving and professional care for
            pets. We focus on their health, comfort, and happiness, offering
            preventive care, treatments, and guidance.
          </div>
          <div className="flex gap-2 ">
            <a
              href=""
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] hover:-translate-y-2 transition duration-300 p-2 rounded-full"
            >
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fab-facebook-f fill-current w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a
              href=""
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] hover:-translate-y-2 transition duration-300 p-2 rounded-full"
            >
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fab-facebook-f fill-current w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </a>
            <a
              href=""
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] hover:-translate-y-2 transition duration-300 p-2 rounded-full"
            >
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fab-facebook-f fill-current w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              href=""
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] hover:-translate-y-2 transition duration-300 p-2 rounded-full"
            >
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fab-facebook-f fill-current w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </div>
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>✔ Book an Appointment</li>
            <li>✔ Contact Us</li>
            <li>✔ Customer Support</li>
            <li>✔ FAQs</li>
            <li>✔ Pet Emergency Help</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>✔ About Pawelle</li>
            <li>✔ Our Services</li>
            <li>✔ Pet Wellness Blog</li>
            <li>✔ Meet Our Vets</li>
          </ul>
        </div>

        {/* Our Clinic */}
        <div>
          <h3 className="font-semibold mb-4">Our Clinic</h3>
          <p className="text-sm mb-2">
            Jalan Cempaka Wangi No 22 <br /> Jakarta - Indonesia
          </p>
          <p className="text-sm mb-2">✉ support@yourdomain.tld</p>
          <p className="text-sm">📞 (888) 04 575 6 444</p>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <img src={logo} className="w-52" alt="" />{" "}
        <p className="text-gray-400 text-center md:text-right">
          Copyright © 2026 Karas Veterinary Clinic, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
