// Mock data for the HR Dashboard

import DashboardIcon from "@/assets/Dashboard.png";
import EmployeeOnboardingIcon from "@/assets/EmployeeOnboarding.png";
import AttendanceOverviewIcon from "@/assets/AttendanceOverview.png";
import AdvanceAdjustmentIcon from "@/assets/AdvanceAdjustment.png";
import PayrollManagementIcon from "@/assets/PayrollManagement.png";

export const KPI_DATA = {
  totalEmployees: {
    label: "Total Employees",
    value: 148,
    breakdown: [
      { label: "BLLP", value: 55 },
      { label: "BSSPL", value: 65 },
      { label: "Bald & Company", value: 28 }
    ]
  },
  presentToday: {
    label: "Present Today",
    value: 98,
    breakdown: [
      { label: "BLLP", value: 45 },
      { label: "BSSPL", value: 55 },
      { label: "Bald & Company", value: 48 }
    ]
  },
  absentToday: {
    label: "Absent Today",
    value: 50,
    breakdown: [
      { label: "BLLP", value: 30 },
      { label: "BSSPL", value: 20 },
      { label: "Bald & Company", value: 10 }
    ]
  },
  attendanceRate: {
    label: "Total Attendance Rate",
    value: 87,
    breakdown: [
      { label: "BLLP", value: 77, suffix: "%" },
      { label: "BSSPL", value: 84, suffix: "%" },
      { label: "Bald & Company", value: 82, suffix: "%" }
    ]
  }
};

export const TABS = ["ALL", "BLLP", "BSSPL", "Bald & Company"];

export const PAYROLL_BY_DEPARTMENT = [
  { name: "Marketing", value: 20, color: "hsl(188, 85%, 45%)" },
  { name: "Development", value: 30, color: "hsl(45, 100%, 55%)" },
  { name: "Designing", value: 25, color: "hsl(145, 65%, 45%)" },
  { name: "Client", value: 25, color: "hsl(25, 100%, 55%)" }
];

// export const DEPT_ATTENDANCE = [
//   { name: "Present Employees", value: 60, color: "hsl(145, 65%, 45%)" },
//   { name: "60 Emp", value: 60, color: "hsl(145, 65%, 45%)" },
//   { name: "20 Emp", value: 20, color: "hsl(25, 100%, 55%)" }
// ];
export const DEPT_ATTENDANCE = {
  total: 80,
  present: {
    label: "Present Employees",
    value: 60,
    color: "hsl(45, 95%, 50%)"
  },
  absent: {
    label: "Absent Employees",
    value: 20,
    color: "hsl(45, 95%, 85%)"
  }
};


export const PENDING_ONBOARDING = [
  { name: "Completed", value: 65, color: "hsl(188, 85%, 45%)" },
  { name: "Pending", value: 35, color: "hsl(220, 10%, 80%)" }
];

export const MONTHLY_PAYROLL = [
  { month: "Jan", value: 1.7 },
  { month: "Feb", value: 3.5 },
  { month: "Mar", value: 5.9 },
  { month: "Apr", value: 4.0 },
  { month: "May", value: 4.3 },
  { month: "Jun", value: 7.8 }
];

// export const YEARLY_PAYROLL = [
//   { month: "Jan", year2025: 45000, year2026: 52000 },
//   { month: "Feb", year2025: 48000, year2026: 55000 },
//   { month: "Mar", year2025: 42000, year2026: 58000 },
//   { month: "Apr", year2025: 55000, year2026: 62000 },
//   { month: "May", year2025: 52000, year2026: 68000 },
//   { month: "Jun", year2025: 58000, year2026: 72000 },
//   { month: "Jul", year2025: 62000, year2026: 75000 },
//   { month: "Aug", year2025: 65000, year2026: 78000 },
//   { month: "Sep", year2025: 68000, year2026: 82000 },
//   { month: "Oct", year2025: 72000, year2026: 85000 },
//   { month: "Nov", year2025: 75000, year2026: 88000 },
//   { month: "Dec", year2025: 80000, year2026: 92000 }
// ];

export const YEARLY_PAYROLL = [
  { month: "Jan", year2025: 180000, year2026: 220000 },
  { month: "Feb", year2025: 260000, year2026: 300000 },
  { month: "Mar", year2025: 210000, year2026: 280000 },
  { month: "Apr", year2025: 320000, year2026: 400000 },
  { month: "May", year2025: 290000, year2026: 380000 },
  { month: "Jun", year2025: 260000, year2026: 420000 },
  { month: "Jul", year2025: 350000, year2026: 520000 },
  { month: "Aug", year2025: 420000, year2026: 680000 },
  { month: "Sep", year2025: 360000, year2026: 560000 },
  { month: "Oct", year2025: 400000, year2026: 650000 },
  { month: "Nov", year2025: 450000, year2026: 720000 },
  { month: "Dec", year2025: 550000, year2026: 950000 }
];


export const EMPLOYEES = [
  {
    id: 1,
    code: "XXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "BLLP",
    status: "Permanent"
  },
  {
    id: 2,
    code: "XXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "BSSPL",
    status: "Permanent"
  },
  {
    id: 3,
    code: "XXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "Company",
    status: "Probation"
  },
  {
    id: 4,
    code: "XXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "Company",
    status: "Permanent"
  },
  {
    id: 5,
    code: "XXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "Company",
    status: "Probation"
  },
  {
    id: 6,
    code: "XXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "Company",
    status: "Permanent"
  }
];

export const SIDEBAR_MENU = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    active: true
  },
  {
    id: "onboarding",
    label: "Employee Onboardig",
    icon: EmployeeOnboardingIcon,
    active: false
  },
  {
    id: "attendance",
    label: "Attendance Overview",
    icon: AttendanceOverviewIcon,
    active: false
  },
  {
    id: "adjustment",
    label: "Advance Adjustment",
    icon: AdvanceAdjustmentIcon,
    active: false
  },
  {
    id: "payroll",
    label: "Payroll Management",
    icon: PayrollManagementIcon,
    active: false
  }
];
