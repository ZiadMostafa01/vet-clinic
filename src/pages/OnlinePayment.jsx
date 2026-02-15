import bg from "../assets/images/bg_img.png";
function OnlinePayment() {
  return (
    <div>
      <section
        className="bg-purple-700 relative rounded-b-[70px] pt-[79.05px] pt-6 flex justify-center items-center"
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat", // لمنع تكرار الصورة
          backgroundPosition: "bottom center",
          backgroundColor: "#F5F2F8",
          width: "100%",
        }}
      >
        <div className="py-12 sm:py-26 text-center text-[var(--primary1)] space-y-5">
          <h1 className="font-bold  text-5xl sm:text-7xl">Online Payment</h1>
          <p className="font-bold text-sm sm:text-2xl">
            Experience Trusted Pet Care at Pawelle <br /> Veterinary Center
          </p>
        </div>
      </section>
      <div className="h-[500px]"></div>
    </div>
  );
}
export default OnlinePayment;
