import { useState } from "react";
import { TABS } from "@/constants/dashboardData";

const TabFilter = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <div className="flex gap-2">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-1.5 text-sm font-medium rounded transition-colors ${
            activeTab === tab
              ? "bg-[hsl(var(--secondary))] text-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabFilter;
