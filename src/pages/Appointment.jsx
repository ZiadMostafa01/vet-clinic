import PagesHeader from "../components/PagesHeader";
import AppointmentFeature from "../components/appointment/AppointmentFeature";
import AppointmentForm from "../components/appointment/AppointmentForm";
import AppointmentSupport from "../components/appointment/AppointmentSupport";

export default function Appointment() {
  return (
    <div>
      <PagesHeader
        title="Appointment"
        description={
          <>
            Book Your Pet’s Comprehensive <br /> Wellness Appointment Now
          </>
        }
      />

      <main className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
        <AppointmentFeature />
        <AppointmentForm />
        <AppointmentSupport />
      </main>
    </div>
  );
}
