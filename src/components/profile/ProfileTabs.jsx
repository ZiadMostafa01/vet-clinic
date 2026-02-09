import { NavLink } from "react-router-dom";

const tabs = [
  { to: "", label: "ملف المستخدم", end: true },
  { to: "subscriptions", label: "اشتراكاتي" },
  { to: "wallet", label: "محفظتي" },
  { to: "invoices", label: "الفواتير" },
  { to: "exams", label: "نتائج الامتحانات" },
];

function ProfileTabs() {
    
  return (
    <div className="border-2 border-gray-100 p-6 rounded-xl shadow-xl mx-[2vw] mb-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-4 py-4 w-full text-center font-bold">
        {tabs.map(({ to, label, end }) => (
          <NavLink
            key={to || "profile"}
            to={to}
            end={end}
            className={({ isActive }) =>
              `
              py-2 px-3 rounded-md shadow-md w-full border-2
              transition duration-300
              ${
                isActive
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-slate-200 hover:border-blue-500 hover:text-blue-500"
              }
              `
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default ProfileTabs;
