import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { MONTHLY_PAYROLL } from "@/constants/dashboardData";

const MonthlyPayrollChart = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      {/* Header */}
      <h3 className="text-sm font-medium text-foreground mb-4 border-b pb-2">Total Payroll by Month</h3>

      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MONTHLY_PAYROLL}>
            <defs>
              <linearGradient id="payrollGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(272, 29.80%, 59.80%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(260, 39.20%, 47.10%)" stopOpacity={0} />
              </linearGradient>
            </defs>
             <XAxis
              dataKey="month"
              type="category"
              scale="point"
              axisLine={{ stroke: "#D1D5DB" }}
              tickLine={false}
              padding={{ left: 20, right: 20 }}
              tick={{ fontSize: 11, fill: "hsl(220, 10%, 50%)" }}
            />
            {/* {{ stroke: "#D1D5DB" }} */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "hsl(279, 19.50%, 49.20%)" }}
              tickFormatter={(value) => `${value}L`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 10%, 88%)",
                borderRadius: "8px",
                fontSize: "12px"
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(258, 58.30%, 59.60%)"
              strokeWidth={2}
              fill="url(#payrollGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyPayrollChart;
