import img1 from "../../assets/images/jlt-clinic.jpg";
import img2 from "../../assets/images/business-bay-clinic.jpg";

function ChooseClinic() {
  return (
    <div className="bg-[var(--karas_paper)] py-20 px-4 ">
      <div className="font-heading text-center">
        {" "}
        <h1 className="text-3xl md:text-5xl font-serif text-purple-900 mb-2">
          Choose your Karas clinic
        </h1>
        <p className="text-gray-600 mb-12 md:text-xl">
          Two locations, one standard of care.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* JLT Clinic */}
        <div className="flex flex-col h-full rounded-lg shadow-md overflow-hidden">
          <img
            src={img1}
            alt="JLT Clinic"
            className="w-full object-cover h-64 md:h-72"
          />
          <div className="bg-white p-6 border-t border-gray-200 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-purple-900 mb-2">
                Karas Veterinary Clinic – JLT
              </h2>
              <p className="text-gray-600 mb-4">
                Advanced care for a long standing community.
              </p>
            </div>
            <a
              href="#"
              className="text-purple-900 font-medium hover:underline mt-4"
            >
              VISIT JLT CLINIC →
            </a>
          </div>
        </div>

        {/* Business Bay Clinic */}
        <div className="flex flex-col h-full rounded-lg shadow-md overflow-hidden">
          <img
            src={img2}
            alt="Business Bay Clinic"
            className="w-full object-cover h-64 md:h-72"
          />
          <div className="bg-white p-6 border-t border-gray-200 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-purple-900 mb-2">
                Karas Veterinary Clinic – Business Bay
              </h2>
              <p className="text-gray-600 mb-4">
                Designed for the pace and needs of Business Bay.
              </p>
            </div>
            <a
              href="#"
              className="text-purple-900 font-medium hover:underline mt-4"
            >
              VISIT BUSINESS BAY CLINIC →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseClinic;
