import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Area,
} from "recharts";

import { YEARLY_PAYROLL } from "@/constants/dashboardData";

const YearlyPayrollChart = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <h3 className="text-sm font-medium text-foreground">
          Yearly Payroll Analysis
        </h3>

        <select className="text-xs border border-border rounded px-2 py-1 bg-background text-foreground">
          <option>2026</option>
          <option>2025</option>
        </select>
      </div>

      {/* INFO */}
      <div className="flex justify-center items-center gap-3 mb-4">
        <p className="text-xs text-[hsl(var(--success))]">+12.4% YoY</p>

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-2 text-xs flex flex-col gap-2">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 rounded bg-[hsl(25,100%,55%)]" />
              <span className="text-gray-600">December, 2026</span>
            </div>
            <span className="font-semibold text-[hsl(25,100%,55%)]">
              ₹950K
            </span>
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 rounded bg-[hsl(188,85%,45%)]" />
              <span className="text-gray-600">December, 2025</span>
            </div>
            <span className="font-semibold text-[hsl(188,85%,45%)]">
              ₹550K
            </span>
          </div>
        </div>
      </div>

      {/* CHART */}
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={YEARLY_PAYROLL}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="month" hide />

            <YAxis
              domain={[0, 1000000]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "hsl(220, 10%, 50%)" }}
              tickFormatter={(value) => `${value / 1000}K`}
            />

<Tooltip
  contentStyle={{
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    fontSize: "12px",
  }}
  formatter={(value, name) => {
    const num = Number(value || 0);

    return [
      `₹${(num / 1000).toFixed(0)}K`,
      name === "year2026" ? "2026" : "2025",
    ];
  }}
  labelFormatter={(label) => `Month: ${label}`}
/>


            {/* GRADIENTS */}
            <defs>
              <linearGradient id="shadow2026" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(25,100%,55%)" stopOpacity={0.25} />
                <stop offset="60%" stopColor="hsl(25,100%,55%)" stopOpacity={0.1} />
                <stop offset="100%" stopColor="hsl(25,100%,55%)" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="shadow2025" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(188,85%,45%)" stopOpacity={0.25} />
                <stop offset="60%" stopColor="hsl(188,85%,45%)" stopOpacity={0.1} />
                <stop offset="100%" stopColor="hsl(188,85%,45%)" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* AREA SHADOW */}
            <Area
              type="monotone"
              dataKey="year2026"
              stroke="none"
              fill="url(#shadow2026)"
              isAnimationActive={false}
            />

            <Area
              type="monotone"
              dataKey="year2025"
              stroke="none"
              fill="url(#shadow2025)"
              isAnimationActive={false}
            />

            {/* LINES */}
            <Line
              type="monotone"
              dataKey="year2026"
              stroke="hsl(25,100%,55%)"
              strokeWidth={2.5}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="year2025"
              stroke="hsl(188,85%,45%)"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyPayrollChart;
