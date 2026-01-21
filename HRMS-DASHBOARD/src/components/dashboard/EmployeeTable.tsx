import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { EMPLOYEES } from "@/constants/dashboardData";
import profileAvatar from "@/assets/profile-avatar.png";

const EmployeeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-card rounded-lg border border-border p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-foreground">Employee Overview</h3>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search here"
            className="pl-9 pr-4 py-1.5 text-xs border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Profile</th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Employee Code</th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Employee Name</th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Department</th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Designation</th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Company</th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {EMPLOYEES.map((employee) => (
              <tr key={employee.id} className="border-b border-border last:border-0">
                <td className="py-3 px-2">
                  <img
                    src={profileAvatar}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-2 text-xs text-foreground">{employee.code}</td>
                <td className="py-3 px-2 text-xs text-foreground">{employee.name}</td>
                <td className="py-3 px-2 text-xs text-muted-foreground">{employee.department}</td>
                <td className="py-3 px-2 text-xs text-muted-foreground">{employee.designation}</td>
                <td className="py-3 px-2 text-xs text-muted-foreground">{employee.company}</td>
                <td className="py-3 px-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      employee.status === "Permanent"
                        ? "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]"
                        : "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 mt-4">
        <button className="p-1 rounded hover:bg-muted">
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-6 h-6 text-xs rounded ${
              currentPage === page
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="p-1 rounded hover:bg-muted">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
