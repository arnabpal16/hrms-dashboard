// import { Bell, Grid3X3, AlignJustify } from "lucide-react";
// import shree from "@/assets/shree.png";
// import navCalender from "@/assets/navCalender.png";
// import navMail from "@/assets/navMail.png";
// import navRing from "@/assets/navRing.png";



// import profileAvatar from "@/assets/profile-avatar.png";

// const DashboardHeader = () => {
//   return (
//     <header className="bg-card border-b border-border px-6 py-3">
//       <div className="flex items-center justify-between">
//         {/* Breadcrumb */}
//         <div className="flex items-center gap-2 text-sm">
//           <AlignJustify className="w-4 h-4 text-black  " />
//           <span className="text-foreground font-medium">Dashboard</span>
//         </div>

//         {/* Right side */}
//         <div className="flex items-center gap-4">
//           {/* Stats icon */}
//           <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
//             <Grid3X3 className="w-5 h-5" />
//           </button>

//           {/* Notifications */}
//           <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
//             <Bell className="w-5 h-5" />
//           </button>

//           {/* User profile */}
//           <div className="flex items-center gap-3">
//             <div className="text-right">
//               <p className="text-sm font-medium text-foreground">JOYMALYA PODDAR</p>
//               <p className="text-xs text-muted-foreground">ASSOCIATE</p>
//             </div>
//             <img
//               src={profileAvatar}
//               alt="Profile"
//               className="w-10 h-10 rounded-full object-cover border-2 border-primary"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default DashboardHeader;

import { AlignJustify } from "lucide-react";

import shree from "@/assets/shree.png";
import navCalender from "@/assets/navCalender.png";
import navMail from "@/assets/navMail.png";
import navRing from "@/assets/navRing.png";
import profileAvatar from "@/assets/profile-avatar.png";

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">

      {/* 3 column layout */}
      <div className="grid grid-cols-3 items-center">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <AlignJustify className="w-5 h-5 text-black cursor-pointer" />
          <span className="text-[18px] font-medium text-[#191D1D]">
            Dashboard
          </span>
        </div>

        {/* CENTER */}
        <div className="flex justify-center">
          <img
            src={shree}
            alt="shree"
            className="h-[47.5px] w-auto"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-8">
          <img
            src={navCalender}
            alt="calendar"
            className="w-5 h-5 cursor-pointer"
          />

          <img
            src={navRing}
            alt="notification"
            className="w-5 h-5 cursor-pointer"
          />

          <img
            src={navMail}
            alt="mail"
            className="w-5 h-5 cursor-pointer"
          />

          <div className="flex items-center gap-3">

          <img
              src={profileAvatar}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-black"
            />

            <div className="text-left">
              <p className="text-sm font-medium text-[#191D1D]">
                JOYMALYA PODDAR
              </p>
              <p className="text-xs text-[#13AFCD]">
                ASSOCIATE
              </p>
            </div>

            
          </div>
        </div>

      </div>
    </header>
  );
};

export default DashboardHeader;
