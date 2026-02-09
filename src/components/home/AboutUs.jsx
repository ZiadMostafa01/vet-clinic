import img from "../../assets/images/us-img.png";
import bg from "../../assets/images/footer-bg.webp";
function AboutUs() {
  return (
    <section id="who" className="py-16">
      <div
        className="text-center mx-auto font-rubik font-semibold text-5xl pb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        مين <span className="text-[var(--primary)]">احنا..؟ </span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-x-20 p-5">
        <div
          className="flex flex-col justify-center items-center lg:w-[700px] md:w-[600px] rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{
            background: `url(${bg})`,
          }}
        >
          <div className="h-1 w-28 sm:w-96 mt-5 rounded-full bg-cyan-500 mx-auto"></div>

          <div className="rounded-xl text-center p-10 mt-5">
            <div className="text-white text-lg font-semibold leading-loose">
              <span className="text-xl font-bold">
                احنا عيلة الهواري
                <br />
              </span>
              منصة تعليمية بُنيت على خبرة، التزام، ورؤية واضحة. هدفنا مش بس
              نجهّز الطالب للامتحان، لكن كمان نكون معاه خطوة بخطوة بعد الامتحان،
              نرشّده، نوجّهه، ونساعده يختار طريقه بثقة. إحنا عيلة بتهتم بالتعليم
              الحقيقي، اللي بيبني عقل، ويقوّي شخصية. في منصة الهواري، بنوفّر
              محتوى تعليمي مبسّط، منظم، ومُجرّب، وبنستخدم طرق شرح حديثة تساعد
              الطالب يفهم ويوصل لأفضل نتيجة ممكنة.
              <span className="text-cyan-500">
                <br />
                إحنا مش مجرد منصة.. إحنا شُركاء في رحلتك.
              </span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <img src={img} width="400" alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
