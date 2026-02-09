function DataTable({ columns, rows }) {
  return (
    <div className="overflow-x-auto mt-6">
      <div className="inline-block min-w-full">
        <table className="min-w-[90%] mx-auto text-sm text-center border border-gray-200 rounded-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-4 py-3 border">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {rows.length > 0 ? (
              rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 border">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-sm text-gray-500"
                >
                  لا توجد نتائج حتى الآن.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Exams() {
  const columns = [
    "#",
    "اسم الامتحان",
    "درجة الطالب",
    "الدرجة الكلية",
    "الحالة",
    "المدة التي قضيتها في الامتحان",
    "تاريخ التقديم",
    "مشاهدة",
  ];

  // مصفوفة الجداول: كل عنصر فيه بيانات جدول
  const tablesData = [
    [
      [1, "رياضيات", 85, 100, "ناجح", "1 ساعة", "2026-02-09", "عرض"],
      [2, "فيزياء", 78, 100, "ناجح", "50 دقيقة", "2026-02-08", "عرض"],
    ],
    [], // جدول 2
    [], // جدول 3
    [], // جدول 3
  ];

  return (
    <div className="my-10 mx-2">
      <div className="text-center text-2xl font-bold">نتائج امتحاناتي</div>

      {/* نعمل map على كل جدول */}
      {tablesData.map((rows, idx) => (
        <DataTable key={idx} columns={columns} rows={rows} />
      ))}
    </div>
  );
}

export default Exams;
