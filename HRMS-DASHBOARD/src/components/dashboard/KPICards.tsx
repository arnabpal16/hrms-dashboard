// import { KPI_DATA } from "@/constants/dashboardData";

// const KPICards = () => {
//   const cards = [
//     { data: KPI_DATA.totalEmployees, isRate: false, color: "text-primary" },
//     { data: KPI_DATA.presentToday, isRate: false, color: "text-[hsl(var(--success))]" },
//     { data: KPI_DATA.absentToday, isRate: false, color: "text-[hsl(var(--secondary))]" },
//     { data: KPI_DATA.attendanceRate, isRate: true, color: "text-primary" }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       {cards.map((card, index) => (
//         <div key={index} className="bg-card rounded-lg border border-border p-4">
//           <h3 className="text-sm font-medium text-muted-foreground mb-3">
//             {card.data.label}
//           </h3>

//           {/* Breakdown */}
//           <div className="space-y-1 text-xs text-muted-foreground mb-2">
//             {card.data.breakdown.map((item, i) => (
//               <div key={i} className="flex justify-between">
//                 <span>{item.label}</span>
//                 <span>
//                   {item.value}
//                   {(item as { suffix?: string }).suffix || ""}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Main value */}
//           <div className={`text-3xl font-bold ${card.color}`}>
//             {card.data.value}
//             {card.isRate ? "%" : ""}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default KPICards;

import { KPI_DATA } from "@/constants/dashboardData";

const KPICards = () => {
  const cards = [
    { data: KPI_DATA.totalEmployees, isRate: false, color: "text-blue-600", borderColor: "ext-blue-600" },
    { data: KPI_DATA.presentToday, isRate: false, color: "text-yellow-500", borderColor: "text-yellow-500" },
    { data: KPI_DATA.absentToday, isRate: false, color: "text-sky-500", borderColor: "text-sky-500" },
    { data: KPI_DATA.attendanceRate, isRate: true, color: "text-purple-600", borderColor: "text-purple-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg border border-gray-200 p-4"
        >
          {/* RIGHT COLORED LINE */}
          <div className="absolute right-0 top-0 h-full w-1 bg-orange-500 rounded-r-lg" />

          {/* HEADER */}
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            {card.data.label}
          </h3>

          {/* CONTENT ROW */}
          <div className="flex justify-between items-center">

            {/* LEFT — breakdown */}
            <div className="space-y-1 text-xs text-gray-500">
              {card.data.breakdown.map((item, i) => (
                <div key={i}>
                  {item.label} - {item.value}
                </div>
              ))}
            </div>

            {/* RIGHT — value */}
            <div
              className={`text-4xl font-bold ${card.color}`}
            >
              {card.data.value}
              {card.isRate && "%"}
            </div>
          </div>
        </div>

      ))}
    </div>
  );
};

export default KPICards;
