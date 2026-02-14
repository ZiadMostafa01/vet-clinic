import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './pages/Home'
import MainLayout from "./layouts/MainLayout";


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
      {/* <ScrollToTop /> */}

      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
