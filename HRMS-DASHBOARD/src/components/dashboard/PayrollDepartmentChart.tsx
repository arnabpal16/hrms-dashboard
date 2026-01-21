import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { PAYROLL_BY_DEPARTMENT } from "@/constants/dashboardData";

const PayrollDepartmentChart = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <h3 className="text-sm font-medium text-foreground">Payroll by Department</h3>
        <select className="text-xs border border-border rounded px-2 py-1 bg-background text-foreground">
          <option>Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="flex items-center gap-12">
        <div className="relative w-32 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={PAYROLL_BY_DEPARTMENT}
                cx="50%"
                cy="50%"
                innerRadius={44}
                outerRadius={60}
                dataKey="value"
                strokeWidth={0}
              >
                {PAYROLL_BY_DEPARTMENT.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-foreground">80</span>
            <span className="text-xs text-muted-foreground">Employees</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {PAYROLL_BY_DEPARTMENT.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayrollDepartmentChart;
