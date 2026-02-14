<<<<<<< HEAD
function Home() {
  return (
    <div>
      <div></div>
    </div>
  );
}
export default Home;
=======
import Landing from "../components/home/Landing";
import AboutUs from "../components/home/AboutUs";
import OurServices from "../components/home/OurServices";
import AcademicYears from "../components/home/AcademicYears";

function Home() {
  return (
    <>
      <Landing />
      <AboutUs />
      <OurServices />
      <AcademicYears />
    </>
  );
}

export default Home;
>>>>>>> fff3a1ad8384b69ddc0236d8ceeeefb1c6d335d2
