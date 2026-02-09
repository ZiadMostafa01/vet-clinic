import logo from "../../assets/images/logo.jpg";
import main from "../../assets/images/hero-photo.png";
import bg from "../../assets/images/funky-lines.webp";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      class="min-h-screen flex flex-col md:flex-row"
      style={{ background: `url(${bg})` }}
    >
      <div class="w-full md:w-3/4 mx-auto my-auto flex flex-col justify-center px-6 py-12 lg:px-20">
        <img src={logo} alt="Logo" width="400px" class="mb-6 self-center" />

        <h2 class="text-2xl md:text-3xl font-bold text-[#3fc7f3] mb-1 text-center md:text-right">
          تسجيل الدخول 📇
        </h2>
        <p class="text-gray-600 mb-6 text-center md:text-right">
          ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل
        </p>

        <form id="loginForm" class="space-y-4">
          <div class="flex-1" dir="rtl">
            <div class="relative h-12 w-full min-w-[200px]">
              <input
                class="peer h-full w-full rounded-[7px] border border-gray-200 bg-white px-3 py-2.5 !pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                id="phone"
                type="tel"
              />

              <label class="before:content[' '] after:content[' '] pointer-events-none text-gray-400 absolute right-0 -top-1 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:ml-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-t before:border-r before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:mr-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-t after:border-l after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-r-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-l-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                رقم الهاتف
              </label>
            </div>
          </div>

          <div class="flex-1" dir="rtl">
            <div class="relative h-12 w-full min-w-[200px]">
              <input
                class="peer h-full w-full rounded-[7px] border border-gray-200 bg-white px-3 py-2.5 !pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                id="phone"
                type="tel"
              />

              <label class="before:content[' '] after:content[' '] pointer-events-none text-gray-400 absolute right-0 -top-1 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:ml-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-t before:border-r before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:mr-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-t after:border-l after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-r-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-l-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                كلمة المرور
              </label>
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition"
          >
            تسجيل الدخول
          </button>

          <p class="text-sm text-center  text-gray-600 mt-4">
            لا يوجد لديك حساب؟
            <Link
              to="/register"
              class="text-orange-500 font-semibold hover:underline mr-1"
            >
              أنشئ حسابك الآن!
            </Link>
          </p>
        </form>
      </div>

      <div class="hidden md:flex items-center justify-center min-h-screen">
        <div class="w-[0.25vw] h-[75vh] bg-[#3fc7f3]"></div>
      </div>

      <div class="w-1/2 hidden md:flex items-center justify-center relative bg-cover bg-center">
        <img
          src={main}
          alt="شخص"
          class="w-[100vw] h-[60vh] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
export default Login;
