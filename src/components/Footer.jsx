import footerBg from "../assets/images/footer-bg.webp";
import logo from "../assets/images/logo.jpg";


function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${footerBg})` }}
      className="flex flex-col-reverse sm:flex-row justify-center gap-x-28 items-center p-28
       bg-center"
    >
      {/* Right */}
      <div className="text-white text-center space-y-4">
        <div className="text-3xl text-indigo-500">Devoloped By</div>

        <div className="font-bold">
          <a
            href="https://www.linkedin.com/in/ziadmostafa-dev/"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-slate-800 px-3 py-2.5 rounded-lg transition duration-500"
          >
            Ziad Mostafa
          </a>
        </div>

        <div>&lt;All Copy Rights Reserved @2025&gt;</div>
      </div>

      <div className="w-px h-16 bg-gray-400" />

      {/* Left */}
      <div>
        <div className="flex justify-center">
          <img src={logo} width="250" alt="Logo" />
        </div>

        <div className="h-px w-28 sm:w-56 bg-gray-400 m-5 mx-auto" />

        {/* Social Icons */}
        <div className="flex flex-col space-y-4">
          {/* WhatsApp */}
          <div>
            <a
              href="https://wa.me/+201027797648"
              className="flex p-3 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-gradient-to-tr hover:from-green-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <div className="relative z-10 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-7 h-7"
                >
                  <path
                    fill="#25D366"
                    d="M16.003 3.006c-7.18 0-13 5.82-13 13 0 2.293.597 4.528 1.726 6.5L3 29l6.672-1.742A12.902 12.902 0 0016.003 29c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11a10.91 10.91 0 01-5.498-1.487l-.392-.235-3.95 1.03 1.057-3.885-.256-.404A10.928 10.928 0 015.003 16c0-6.065 4.935-11 11-11zm5.922 12.995c-.289-.144-1.713-.847-1.98-.943-.267-.096-.462-.144-.656.145s-.752.942-.922 1.135c-.171.192-.34.217-.628.072s-1.23-.452-2.344-1.44c-.867-.774-1.452-1.729-1.623-2.017s-.018-.447.127-.59c.131-.13.29-.34.434-.51.145-.171.192-.29.289-.482.096-.192.048-.362-.024-.506-.072-.144-.656-1.586-.9-2.172-.238-.572-.48-.494-.656-.504l-.56-.01a1.08 1.08 0 00-.78.362c-.27.289-1.023 1-1.023 2.437s1.047 2.826 1.192 3.02c.145.192 2.06 3.144 4.99 4.408 2.93 1.264 2.93.84 3.457.789.528-.048 1.713-.7 1.953-1.376.24-.675.24-1.253.168-1.376-.072-.12-.265-.192-.554-.337z"
                  />
                </svg>
                <div className="flex justify-center items-center mx-auto text-white">
                  <span className="text-green-600">الدعم الفني :</span>
                  &nbsp;01027797648
                </div>
              </div>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:gap-x-7 gap-x-3">
            {/* Facebook */}
            <a
              href=""
              className="p-3 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <svg
                className="relative z-10 w-7 h-7 fill-current text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V127.42c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.1 44.38-121.1 124.72V195.3H22.89V288h81.36v224h100.17V288z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href=""
              className="p-3 rounded-full backdrop-blur-lg border border-pink-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-pink-500/50 hover:bg-gradient-to-tr hover:from-pink-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 551.034 551.034"
                className="relative z-10 w-7 h-7"
              >
                <linearGradient
                  id="a"
                  x1="275.517"
                  x2="275.517"
                  y1="0"
                  y2="551.034"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#feda75" />
                  <stop offset="0.5" stopColor="#d62976" />
                  <stop offset="1" stopColor="#4f5bd5" />
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M387.477 0H163.557C73.278 0 0 73.278 0 163.557v223.92c0 90.279 73.278 163.557 163.557 163.557h223.92c90.279 0 163.557-73.278 163.557-163.557v-223.92C551.034 73.278 477.756 0 387.477 0zM275.517 133.432c78.373 0 142.084 63.711 142.084 142.084s-63.711 142.084-142.084 142.084-142.084-63.711-142.084-142.084 63.711-142.084 142.084-142.084zm0 230.539c48.758 0 88.455-39.697 88.455-88.455s-39.697-88.455-88.455-88.455-88.455 39.697-88.455 88.455 39.697 88.455 88.455 88.455zm146.245-234.55c0 16.094-13.058 29.151-29.151 29.151s-29.151-13.058-29.151-29.151 13.058-29.151 29.151-29.151 29.151 13.057 29.151 29.151z"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href=""
              className="p-3 rounded-full backdrop-blur-lg border border-red-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-red-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500/50 hover:bg-gradient-to-tr hover:from-red-500/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <svg
                className="relative z-10 w-7 h-7 fill-current text-red-500 group-hover:text-red-400 transition-colors duration-300"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href=""
              className="p-3 rounded-full backdrop-blur-lg border border-[#0088cc]/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-[#0088cc]/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-[#0088cc]/50 hover:bg-gradient-to-tr hover:from-[#0088cc]/10 hover:to-black/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0088cc]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <svg
                className="relative z-10 w-7 h-7 fill-current text-[#0088cc] group-hover:text-[#33aadd] transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 240"
              >
                <path
                  d="M120,0C53.7,0,0,53.7,0,120s53.7,120,120,120s120-53.7,120-120S186.3,0,120,0z M175.8,81.1
        l-22.6,106.4c-1.7,7.7-6.3,9.6-12.7,6L106,162.1l-15.3,14.7c-1.7,1.7-3.1,3.1-6.3,3.1l2.2-31.3l56.9-51.4
        c2.5-2.2-0.5-3.5-3.8-1.3L83,142.1l-29.5-9.2c-6.4-2-6.5-6.4,1.4-9.5l113.1-43.6C173.3,78.3,177.4,75.9,175.8,81.1z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
