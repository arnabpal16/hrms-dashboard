import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { YEARLY_PAYROLL } from "@/constants/dashboardData";

const YearlyPayrollChart = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-foreground">Yearly Payroll Analysis</h3>
          <p className="text-xs text-[hsl(var(--success))] mt-1">+12.4% YoY</p>
        </div>
        <select className="text-xs border border-border rounded px-2 py-1 bg-background text-foreground">
          <option>2024</option>
        </select>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-[hsl(25,100%,55%)]" />
          <span className="text-muted-foreground">December, 2024</span>
          <span className="px-2 py-0.5 bg-[hsl(25,100%,55%)] text-white rounded text-xs">₹80M</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-[hsl(188,85%,45%)]" />
          <span className="text-muted-foreground">December, 2025</span>
          <span className="px-2 py-0.5 bg-[hsl(188,85%,45%)] text-white rounded text-xs">₹92M</span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={YEARLY_PAYROLL} barGap={2}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "hsl(220, 10%, 50%)" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "hsl(220, 10%, 50%)" }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 10%, 88%)",
                borderRadius: "8px",
                fontSize: "12px"
              }}
            />
            <Bar dataKey="year2024" fill="hsl(25, 100%, 55%)" radius={[2, 2, 0, 0]} />
            <Bar dataKey="year2025" fill="hsl(188, 85%, 45%)" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyPayrollChart;

