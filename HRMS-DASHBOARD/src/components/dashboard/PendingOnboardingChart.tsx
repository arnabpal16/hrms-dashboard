import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell
} from "recharts";
import { ArrowRight } from "lucide-react";

const ONBOARDING_DATA = [
  { name: "Completed", value: 6 },
  { name: "Pending", value: 2 }
];

const COLORS = ["#0B6FA4", "#D6E6EF"];

const PendingOnboardingChart = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b">
        <h3 className="text-lg font-semibold text-[#191D1D]">
          Pending Onboarding
        </h3>

        <select className="text-sm border border-blue-500 rounded-md px-3 py-1 text-blue-600 bg-white">
          <option>Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ONBOARDING_DATA}
            barSize={48}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <YAxis
              axisLine={{ stroke: "#D1D5DB" }}
              tickLine={false}
              ticks={[0, 2, 4, 6, 8, 10]}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />

            <XAxis
              dataKey="name"
              axisLine={{ stroke: "#D1D5DB" }}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#191D1D" }}
            />

            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {ONBOARDING_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Button */}
      <div className="flex justify-end mt-4">
        <button className="flex items-center justify-center gap-2 bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded-md hover:bg-blue-800 transition">
          VIEW ALL PENDING ONBOARDING
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default PendingOnboardingChart;

