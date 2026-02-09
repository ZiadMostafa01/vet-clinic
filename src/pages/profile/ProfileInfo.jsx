function ProfileInfo() {
  return (
    <div class="flex flex-col py-5 w-full px-[5vw] my-16">
      <div class="w-full bg-white rounded-xl shadow-lg border border-cyan-500 p-6 md:p-10">
        <div class="flex justify-center -mt-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8em"
            height="8em"
            viewBox="0 0 32 32"
            class="bg-white text-blue-500"
          >
            <path
              fill="none"
              d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0M20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5"
            />
            <path
              fill="currentColor"
              d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.9 13.9 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3q.418.457.87.87q.14.124.28.242q.48.415.99.782c.044.03.084.069.128.1v-.012a13.9 13.9 0 0 0 16 0v.012c.044-.031.083-.07.128-.1q.51-.368.99-.782q.14-.119.28-.242q.451-.413.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0"
            />
          </svg>
        </div>
        <form class="space-y-6">
          <div class="flex flex-col md:flex-row gap-4 text-right">
            <div class="w-full">
              <label class="block text-sm text-gray-700 mb-2">اسم الطالب</label>
              <input
                value="زياد مصطفي علي امين"
                type="text"
                class="w-full border border-gray-300 bg-gray-100 rounded-md px-4 py-3 focus:outline-none"
                readonly
              />
            </div>

            <div class="w-full">
              <label class="block text-sm text-gray-700 mb-2">
                السنة الدراسية
              </label>
              <input
                value="الصف الثالث الثانوي"
                type="text"
                class="w-full border border-gray-300 bg-gray-100 rounded-md px-4 py-3 focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-4 text-right">
            <div class="w-full">
              <label class="block text-sm text-gray-700 mb-2">رقم الهاتف</label>
              <input
                value="01027797648"
                type="text"
                class="w-full border border-gray-300 bg-gray-100 rounded-md px-4 py-3 focus:outline-none"
                readonly
              />
            </div>

            <div class="w-full">
              <label class="block text-sm text-gray-700 mb-2">
                رقم هاتف ولي الأمر
              </label>
              <input
                value="01027797648"
                type="text"
                class="w-full border border-gray-300 bg-gray-100 rounded-md px-4 py-3 focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-4 text-right">
            <div class="w-full">
              <label class="block text-sm text-gray-700 mb-2">الحالة</label>
              <input
                value="سنتر"
                type="text"
                class="w-full border border-gray-300 bg-gray-100 rounded-md px-4 py-3 focus:outline-none"
                readonly
              />
            </div>

            <div class="w-full">
              <label class="block text-sm text-gray-700 mb-2">المجموعة</label>
              <input
                value="الاربعاء"
                type="text"
                class="w-full border border-gray-300 bg-gray-100 rounded-md px-4 py-3 focus:outline-none"
                readonly
              />
            </div>
          </div>

          <div class="text-center mt-6">
            <button
              type="submit"
              class="bg-green-600 hover:bg-transparent hover:text-green-600 border-2 border-green-600 text-white font-semibold py-3 px-12 rounded-md transition duration-300"
            >
              تعديل
            </button>
          </div>
        </form>
      </div>

      <div class="h-1 w-[80%] my-16 rounded-full bg-gray-400 m-5 mx-auto"></div>

      <div class="w-full bg-white rounded-xl shadow-lg border border-cyan-500 p-6 md:p-10">
        <h2 class="text-right text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
          تغيير كلمة المرور
        </h2>

        <form class="space-y-6">
          <div class="text-right">
            <label for="oldPassword" class="block text-sm text-gray-700 mb-2">
              كلمة المرور القديمة
            </label>
            <input
              type="password"
              id="oldPassword"
              class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="flex flex-col md:flex-row gap-4 text-right">
            <div class="w-full">
              <label for="newPassword" class="block text-sm text-gray-700 mb-2">
                كلمة المرور الجديدة
              </label>
              <input
                type="password"
                id="newPassword"
                class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div class="w-full">
              <label
                for="confirmPassword"
                class="block text-sm text-gray-700 mb-2"
              >
                تأكيد كلمة المرور الجديدة
              </label>
              <input
                type="password"
                id="confirmPassword"
                class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="text-center mt-6">
            <button
              type="submit"
              class="bg-green-600 hover:bg-transparent hover:text-green-600 border-2 border-green-600 text-white font-semibold py-3 px-12 rounded-md transition duration-300"
            >
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProfileInfo;
