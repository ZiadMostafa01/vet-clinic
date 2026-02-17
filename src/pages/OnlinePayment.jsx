import PagesHeader from "../components/PagesHeader";
function OnlinePayment() {
  return (
    <div>
      <PagesHeader
        title="Online Payment"
        description={
          <>
            Book Your Pet’s Comprehensive <br /> Wellness Appointment Now
          </>
        }
      />
      <main className="h-[500px]"></main>
    </div>
  );
}
export default OnlinePayment;
