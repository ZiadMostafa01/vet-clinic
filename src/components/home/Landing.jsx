import landingImg from "../../assets/images/hero-photo.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section
      id="landing"
      className="pt-[15rem] sm:pt-[20rem] md:pt-[72px] flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        {/* النص */}
        <div
          id="hero-word"
          className="font-semibold md:basis-7/12 basis-full text-center flex-center-both"
        >
          <div id="hero-fw" className="space-y-3 pb-10 font-aqsa">
            <div className="text-3xl md:text-4xl text-[var(--primary)]">
              مستر
            </div>
            <div className="text-[3rem] md:text-8xl">
              أحمد <span className="text-[var(--primary)]">الهواري</span>
            </div>
          </div>

          <div
            id="hero-sw"
            className="flex-col text-center space-y-3 font-black"
          >
            <div className="text-2xl">اهلاً بك في عائلة الهواري</div>
            <div className="text-xl">دفعة 2026</div>
            <div className="text-2xl">
              لكل ما يتعلق بمنهج{" "}
              <span id="multiple-text" className="text-[var(--primary)]">
                الفيزياء
              </span>
            </div>
            <div className="text-xl">للثانوية العامة</div>

            <div>
              <Link to="register">
                <button className="cursor-pointer relative rounded px-5 py-2.5 overflow-hidden group bg-[var(--primary)] hover:bg-gradient-to-r hover:from-[var(--primary)] hover:to-[var(--primary)] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[var(--primary)] transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative text-base font-semibold font-mono">
                    انضم لعيلتنا دالوقتي!
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* الصورة */}
        <div
          data-aos="fade-up"
          data-aos-duration="850"
          id="hero-img"
          className="md:basis-7/12 basis-full flex-center-both"
        >
          <img src={landingImg} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Landing;
