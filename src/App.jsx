<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './pages/Home'
import MainLayout from "./layouts/MainLayout";

=======
// import { Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out-cubic",
//       once: true, // الأنيميشن يشتغل مرة واحدة
//       offset: 80,
//     });
//   }, []);
//   return (
//     <>
//       <ScrollToTop />

//       <Routes>
//         {/* Main Layout */}
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="months-courses" element={<MonthsCourses />} />
//           <Route path="packages" element={<PackageCourses />} />
//           <Route path="pre-media" element={<PreMedia />} />

//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//         </Route>

//         {/* Profile Layout */}
//         <Route path="/profile" element={<ProfileLayout />}>
//           <Route index element={<ProfileInfo />} />
//           <Route path="subscriptions" element={<Subscriptions />} />
//           <Route path="wallet" element={<Wallet />} />
//           <Route path="invoices" element={<Invoices />} />
//           <Route path="exams" element={<Exams />} />
//         </Route>

//         {/* Media Layout */}
//         <Route path="/media" element={<MediaPreview />}>
//           <Route index element={<VideoLesson />} />
//           <Route path="homework" element={<HomeworkVideo />} />
//           <Route path="lesson-exam" element={<LessonExam />} />
//           <Route path="lesson-file" element={<LessonFile />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
>>>>>>> fff3a1ad8384b69ddc0236d8ceeeefb1c6d335d2

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
<<<<<<< HEAD
      {/* <ScrollToTop /> */}

      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
=======
      <home />
>>>>>>> fff3a1ad8384b69ddc0236d8ceeeefb1c6d335d2
    </>
  );
}

export default App;
