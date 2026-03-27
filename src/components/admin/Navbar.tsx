import React from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 h-16 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search issues, users, or locations..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        <button className="flex items-center gap-3 p-1 pr-3 hover:bg-slate-50 rounded-full transition-all group">
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
            <User className="w-5 h-5 text-slate-500" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-semibold text-slate-800">Admin User</p>
            <p className="text-[10px] text-slate-500">Super Admin</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </button>
      </div>
    </header>
  );
};
