import { Bell, Box, LogOut, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8  h-14 shadow-md">
      <div className="flex items-center gap-2">
        <Box size={20} />
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-4">
          <button className="p-2 rounded-md bg-gray-100 shadow-sm">
            <User size={20} />
          </button>
          <button className="p-2 rounded-md bg-gray-100 shadow-sm">
            <Bell size={20} />
          </button>
          <button className="p-2 rounded-md bg-gray-100 shadow-sm">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
