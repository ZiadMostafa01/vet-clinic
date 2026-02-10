import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";

import Home from "./pages/Home";
import MonthsCourses from "./pages/courses/MonthsCourses";
import PackageCourses from "./pages/courses/PackageCourses";
import PreMedia from "./pages/courses/PreMedia";
import MediaPreview from "./pages/courses/MediaPreview";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import ProfileInfo from "./pages/profile/ProfileInfo";
import Subscriptions from "./pages/profile/Subscriptions";
import Wallet from "./pages/profile/Wallet";
import Invoices from "./pages/profile/Invoices";
import Exams from "./pages/profile/Exams";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



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
          <Route path="months-courses" element={<MonthsCourses />} />
          <Route path="packages" element={<PackageCourses />} />
          <Route path="pre-media" element={<PreMedia />} />
          <Route path="media-preview" element={<MediaPreview />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Profile Layout */}
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfileInfo />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="exams" element={<Exams />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
