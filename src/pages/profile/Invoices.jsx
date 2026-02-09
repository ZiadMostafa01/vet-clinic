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
                  لا توجد أي مشتريات حتى الآن.{" "}
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
    "رقم التسلسل",
    "النوع",
    "العنوان",
    "القيمة",
    "الحالة",
    "تاريخ الشراء",
  ];

  // مصفوفة الجداول: كل عنصر فيه بيانات جدول
  const tablesData = [
    [
      [1, "A001", "كتاب", "تعلم React", "$25", "مكتمل", "2026-02-01"],
      [2, "A002", "دورة", "JavaScript للمبتدئين", "$50", "مكتمل", "2026-02-05"],
      [
        3,
        "A003",
        "اشتراك",
        "Premium Membership",
        "$100",
        "قيد المعالجة",
        "2026-02-08",
      ],
    ],
    [], // جدول 2
    [], // جدول 3
    [], // جدول 3
  ];

  return (
    <div className="my-10 mx-2">
      <div className="text-center text-2xl font-bold">مشترياتي</div>

      {/* نعمل map على كل جدول */}
      {tablesData.map((rows, idx) => (
        <DataTable key={idx} columns={columns} rows={rows} />
      ))}
    </div>
  );
}

export default Exams;
