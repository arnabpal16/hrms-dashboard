import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const ATTENDANCE_DATA = [
  { name: "Present", value: 60, color: "hsl(45, 95%, 50%)" },
  { name: "Absent", value: 20, color: "hsl(45, 95%, 85%)" }
];

const DeptAttendanceChart = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b">
        <h3 className="text-sm font-medium text-foreground">Dept Attendance</h3>
        <select className="text-xs border border-border rounded px-2 py-1 bg-background text-foreground">
          <option>UI/UX</option>
        </select>
      </div>

      {/* Chart */}
      <div className="flex items-center gap-12">
        <div className="relative w-56 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ATTENDANCE_DATA}
                cx="50%"
                cy="50%"
                innerRadius={44}
                outerRadius={60}
                dataKey="value"
                strokeWidth={0}
              >
                {ATTENDANCE_DATA.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-[#4A4D56]">80</span>
          <span className="text-xs text-muted-foreground">Employees</span>
          </div>
        </div>

        {/* Legend */}
        {/* <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-3 h-3 rounded-full bg-[hsl(145,65%,45%)]" />
            <span className="text-[hsl(145,65%,45%)] font-medium">Present Employees</span>
          </div>
          <div className="text-xs text-muted-foreground">60 Emp</div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-3 h-3 rounded-full bg-[hsl(25,100%,55%)]" />
            <span className="text-[hsl(25,100%,55%)] font-medium">20 Emp</span>
          </div>
        </div> */}

        {/* Legend */}
        <div className="space-y-4">

          {/* Present */}
          <div>
            <p className="text-sm font-medium text-[#F2A900]">
              Present Employees
            </p>
            <p className="text-sm text-[#4A4D56]">
              60 Emp
            </p>
          </div>

          {/* Absent */}
          <div>
            <p className="text-sm font-medium text-[#F7DFA3]">
              Absent Employees
            </p>
            <p className="text-sm text-[#4A4D56]">
              20 Emp
            </p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default DeptAttendanceChart;
