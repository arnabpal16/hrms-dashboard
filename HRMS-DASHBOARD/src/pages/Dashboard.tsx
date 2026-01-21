import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPICards from "@/components/dashboard/KPICards";
import TabFilter from "@/components/dashboard/TabFilter";
import PayrollDepartmentChart from "@/components/dashboard/PayrollDepartmentChart";
import DeptAttendanceChart from "@/components/dashboard/DeptAttendanceChart";
import PendingOnboardingChart from "@/components/dashboard/PendingOnboardingChart";
import MonthlyPayrollChart from "@/components/dashboard/MonthlyPayrollChart";
import YearlyPayrollChart from "@/components/dashboard/YearlyPayrollChart";
import EmployeeTable from "@/components/dashboard/EmployeeTable";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto scrollbar-thin">
          {/* Page Title */}
          <h1 className="text-xl font-semibold text-foreground mb-6">Dashboard</h1>

          {/* KPI Cards */}
          <KPICards />

          {/* Tab Filter */}
          <div className="mt-6 mb-4">
            <TabFilter />
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <PayrollDepartmentChart />
            <DeptAttendanceChart />
            <PendingOnboardingChart />
          </div>

          {/* Charts Row 2 */}
          {/* Charts Row 2 */}
<div className="grid grid-cols-[36.5%_63.5%] lg:gap-4 gap-2 mb-4">
  <MonthlyPayrollChart />
  <YearlyPayrollChart />
</div>


          {/* Employee Table */}
          <EmployeeTable />

          {/* Footer */}
          <div className="text-left text-xs text-muted-foreground mt-6 py-4">
            Copyright © 2025 Inbest.
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
