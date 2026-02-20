import { Link } from "react-router-dom";

import PagesHeader from "../components/PagesHeader";
import doctor1 from "../assets/images/doctors/Ajla Zahirovic.jpg";
import doctor2 from "../assets/images/doctors/Abdullah Ghonim.jpg";
import doctor3 from "../assets/images/doctors/Milana Skoric.jpg";
import doctor4 from "../assets/images/doctors/Dr. Mostafa Zein.jpg";
import doctor5 from "../assets/images/doctors/Usama Rehman.jpg";
import nurse1 from "../assets/images/doctors/Mohamed Bekhit.jpg";
import nurse2 from "../assets/images/doctors/Alfredo Avelino.jpg";
import nurse3 from "../assets/images/doctors/Stepan Visaya.jpg";
import nurse4 from "../assets/images/doctors/Emmanuel Yap.jpg";
import nurse5 from "../assets/images/doctors/Jyrus Lapuz.jpg";
import nurse6 from "../assets/images/doctors/Linda Asobo.jpg";
import animalHandler1 from "../assets/images/doctors/Nalding Lloza.jpg";
import animalHandler2 from "../assets/images/doctors/Romel Mabborang.jpg";
import animalHandler3 from "../assets/images/doctors/Carlo Nodalo.jpg";
import animalHandler4 from "../assets/images/doctors/Mark Dylan Marcelo.jpg";
import Administrator1 from "../assets/images/doctors/Imma Lozano.jpg";
import Administrator2 from "../assets/images/doctors/Janna Barrios.jpg";
import Administrator3 from "../assets/images/doctors/John Francis Labtingao.jpg";
import Administrator4 from "../assets/images/doctors/Thomas Ypil.jpg";
import Administrator5 from "../assets/images/doctors/Wael Ragab.jpg";
import Administrator6 from "../assets/images/doctors/Angelo Quinones.jpg";

// مصفوفة البيانات موحدة ومصدرة لاستخدامها في صفحة التفاصيل
export const allStaffData = [
  {
    id: "ajla-zahirovic",
    name: "Dr. Ajla Zahirovic, DVM (RVMP)",
    title: "Medical Director | JLT Branch",
    image: doctor1,
    about: "Expert in veterinary medicine with years of clinical leadership.",
    education: "DVM (RVMP)",
  },
  {
    id: "abdullah-mahmoud",
    name: "Dr. Abdullah Mahmoud, DVM",
    title: "Veterinary Surgeon | JLT Branch",
    image: doctor2,
    about: "Specialized in advanced surgical procedures and trauma care.",
    education: "DVM",
  },
  {
    id: "milana-skoric",
    name: "Dr. Milana Skoric, DVM, CVA",
    title: "Veterinary Clinician | JLT Branch",
    image: doctor3,
    about: "Dedicated clinician with a focus on holistic animal health.",
    education: "DVM, CVA",
  },
  {
    id: "mostafa-zein",
    name: "Dr. Mostafa Zein, DVM",
    title: "Senior Veterinary Surgeon | Business Bay Branch",
    image: doctor4,
    about: "Leading surgeon at our Business Bay branch.",
    education: "DVM",
  },
  {
    id: "usama-rehman",
    name: "Dr. Usama Rehman, DVM",
    title: "Veterinary General Practitioner | Business Bay Branch",
    image: doctor5,
    about: "Passionate about preventive care and general practice.",
    education: "DVM",
  },
  // التمريض
  {
    id: "mohamed-bekhit",
    name: "Mohamed Bekhit",
    title: "Veterinary Nurse",
    image: nurse1,
    about: "Providing top-notch nursing care.",
    education: "Veterinary Nursing Cert.",
  },
  {
    id: "alfredo-avelino",
    name: "Alfredo Avelino",
    title: "Veterinary Nurse",
    image: nurse2,
    about: "Experienced in patient recovery.",
    education: "Veterinary Nursing Cert.",
  },
  {
    id: "stepan-visaya",
    name: "Stepan Visaya",
    title: "Veterinary Nurse",
    image: nurse3,
    about: "Expert in anesthesia support.",
    education: "Veterinary Nursing Cert.",
  },
  {
    id: "emmanuel-yap",
    name: "Emmanuel Yap",
    title: "Veterinary Nurse",
    image: nurse4,
    about: "Dedicated to pet wellness.",
    education: "Veterinary Nursing Cert.",
  },
  {
    id: "jyrus-lapuz",
    name: "Jyrus Lapuz",
    title: "Veterinary Nurse",
    image: nurse5,
    about: "Skilled in clinical assistance.",
    education: "Veterinary Nursing Cert.",
  },
  {
    id: "linda-asobo",
    name: "Linda Asobo",
    title: "Veterinary Nurse",
    image: nurse6,
    about: "Compassionate nursing specialist.",
    education: "Veterinary Nursing Cert.",
  },
  // Handlers
  {
    id: "nalding-lloza",
    name: "Nalding Lloza",
    title: "Animal Handler",
    image: animalHandler1,
    about: "Professional animal handling.",
    education: "Safety Cert.",
  },
  {
    id: "romel-mabborang",
    name: "Romel Mabborang",
    title: "Animal Handler",
    image: animalHandler2,
    about: "Ensuring pet comfort.",
    education: "Safety Cert.",
  },
  {
    id: "carlo-nodalo",
    name: "Carlo Nodalo",
    title: "Animal Handler",
    image: animalHandler3,
    about: "Animal care specialist.",
    education: "Safety Cert.",
  },
  {
    id: "mark-dylan",
    name: "Mark Dylan Marcelo",
    title: "Animal Handler",
    image: animalHandler4,
    about: "Expert handler.",
    education: "Safety Cert.",
  },
  // Admins
  {
    id: "imma-lozano",
    name: "Imma Lozano",
    title: "Administration",
    image: Administrator1,
    about: "Clinic operations lead.",
    education: "Business Admin.",
  },
  {
    id: "janna-barrios",
    name: "Janna Barrios",
    title: "Administration",
    image: Administrator2,
    about: "Patient coordination.",
    education: "Business Admin.",
  },
  {
    id: "john-labtingao",
    name: "John Francis Labtingao",
    title: "Administration",
    image: Administrator3,
    about: "Front desk management.",
    education: "Business Admin.",
  },
  {
    id: "thomas-ypil",
    name: "Thomas Ypil",
    title: "Administration",
    image: Administrator4,
    about: "Logistic support.",
    education: "Business Admin.",
  },
  {
    id: "wael-ragab",
    name: "Wael Ragab",
    title: "Administration",
    image: Administrator5,
    about: "Operations support.",
    education: "Business Admin.",
  },
  {
    id: "angelo-quinones",
    name: "Angelo Quinones",
    title: "Administration",
    image: Administrator6,
    about: "Client relations.",
    education: "Business Admin.",
  },
];

const TeamMember = ({ name, title, image, id }) => (
  <Link to={`/doctor/${id}`} className="flex flex-col items-start group">
    <div className="bg-white p-2 shadow-sm border border-[#e5e1d8] mb-4 w-full aspect-[3/4] overflow-hidden">
      <img
        src={image || "https://via.placeholder.com/400x533"}
        alt={name}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
    <h4 className="text-[13px] font-bold text-[#333] uppercase tracking-widest leading-tight group-hover:text-[var(--primary)] transition-colors">
      {name}
    </h4>
    <p className="text-[11px] text-[#888] mt-1 italic leading-tight">{title}</p>
  </Link>
);

const TeamSection = ({ title, subtitle, members }) => (
  <section className="mb-20">
    <div className="border-b border-[#d1cdc2] mb-10 pb-2">
      <h2 className="text-2xl font-serif italic text-[#444]">{title}</h2>
      {subtitle && (
        <p className="text-[11px] text-[#aaa] mt-1 uppercase tracking-tighter">
          {subtitle}
        </p>
      )}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
      {members.map((m) => (
        <TeamMember key={m.id} {...m} />
      ))}
    </div>
  </section>
);

function OurTeam() {
  const doctorsJLT = allStaffData.filter(
    (m) =>
      m.id.includes("ajla") ||
      m.id.includes("abdullah") ||
      m.id.includes("milana"),
  );
  const doctorsBB = allStaffData.filter(
    (m) => m.id.includes("mostafa") || m.id.includes("usama"),
  );
  const nurses = allStaffData.filter((m) => m.title === "Veterinary Nurse");
  const handlers = allStaffData.filter((m) => m.title === "Animal Handler");
  const admins = allStaffData.filter((m) => m.title === "Administration");

  return (
    <div className="bg-[var(--karas_paper)] min-h-screen py-10">
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 ">
        <div className="py-24 text-center space-y-6">
          <h3 className="text-sm font-serif tracking-widest text-[var(--primary)]">
            JLT BRANCH – OUR TEAM
          </h3>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif italic text-[#555]">
            The clinical core of Karas
          </h2>
          <p className="text-sm max-w-4xl mx-auto text-gray-600 leading-relaxed italic">
            The JLT branch is led by senior clinicians handling complex cases
            and advanced diagnostics.
          </p>
        </div>

        <TeamSection title="Doctors" members={doctorsJLT} />
        <TeamSection
          title="Nursing Team | JLT"
          subtitle="24-hour care and support."
          members={nurses.slice(0, 5)}
        />
        <TeamSection
          title="Animal Handlers | JLT"
          members={handlers.slice(0, 1)}
        />
        <TeamSection
          title="Administrators | JLT"
          members={admins.slice(0, 4)}
        />

        <div className="py-24 text-center border-t border-[#d1cdc2] mt-20 space-y-6">
          <h3 className="text-sm font-serif tracking-widest text-[var(--primary)]">
            BUSINESS BAY BRANCH – OUR TEAM
          </h3>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif italic text-[#555]">
            Focused care for a fast-paced environment
          </h2>
        </div>

        <TeamSection title="Doctors" members={doctorsBB} />
        <TeamSection title="Nursing Team | BB" members={nurses.slice(5, 6)} />
        <TeamSection
          title="Animal Handlers | BB"
          members={handlers.slice(1, 4)}
        />
        <TeamSection title="Administrators | BB" members={admins.slice(4, 6)} />
      </main>
    </div>
  );
}

export default OurTeam;
