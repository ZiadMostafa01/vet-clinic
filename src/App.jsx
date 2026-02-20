import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ScrollToTop from "./components/layout/ScrollToTop";
import OnlinePayment from "./pages/OnlinePayment";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import OurTeam from "./pages/OurTeam";
import OurServices from "./pages/OurServices";
import Clinics from "./pages/Clinics";
import ChatBot from "./components/ChatBot";
import DoctorDetails from "./layouts/DoctorDetails";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true, // الأنيميشن يشتغل مرة واحدة
      offset: 80,
    });
  }, []);
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="payment" element={<OnlinePayment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="all-services" element={<OurServices />} />
          <Route path="clinics" element={<Clinics />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
        </Route>
      </Routes>
      <ChatBot />
    </>
  );
}

export default App;
