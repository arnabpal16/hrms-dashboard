import { LayoutDashboard, UserPlus, Calendar, Settings, DollarSign } from "lucide-react";
import inbestLogo from "@/assets/inbest-logo.png";
import Rectangle from "@/assets/Rectangle.png"
import { SIDEBAR_MENU } from "@/constants/dashboardData";

// Icon mapping
const iconMap = {
  LayoutDashboard,
  UserPlus,
  Calendar,
  Settings,
  DollarSign
};

type IconName = keyof typeof iconMap;

const Sidebar = () => {
  return (
    //<aside className="w-56 min-h-screen bg-[hsl(var(--sidebar-bg))] text-white flex flex-col">
    <aside className="w-[222px] min-h-screen bg-white flex flex-col">

      {/* Logo Section */}
      <div className="p-4 border-b border-white/10  flex flex-col items-center">

        {/* SAME DIV → logo + rectangle */}
        <div className="flex items-center gap-2">
          <img
            src={inbestLogo}
            alt="Inbest Logo"
            className="h-8 w-auto"
          />

          <img
            src={Rectangle}
            alt="Inbest Rectangle"
            className="h-8 w-auto"
          />
        </div>

        {/* HRMS centered */}
        <div className="mt-1 text-[18px] font-bold tracking-[4px] text-[#191D1D] text-center">
          HRMS
        </div>

      </div>





      {/* Navigation */}
      <nav className="flex-1 p-3">
        <ul className="space-y-1">
          {SIDEBAR_MENU.map((item) => {
            const Icon = iconMap[item.icon as IconName];
            return (
              <li key={item.id}>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${item.active ? "bg-[#E9F0FF] text-[#1F4FDB]"
                    : "text-[#4A4D56] hover:bg-[#F5F7FA]"
                    // ? "bg-[hsl(var(--sidebar-active))] text-white"
                    // : "text-white/70 hover:bg-[hsl(var(--sidebar-hover))] hover:text-white"
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 text-xs text-white/50 text-center border-t border-white/10">
        Copyright © 2025 Inbest.
      </div>
    </aside>
  );
};

export default Sidebar;
