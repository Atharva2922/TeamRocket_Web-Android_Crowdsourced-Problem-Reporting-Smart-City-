import React from 'react';
import { Filter, ChevronDown, Calendar } from 'lucide-react';

export const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex flex-wrap items-center gap-3">
        {/* Status Filter */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-slate-300 transition-all">
            <Filter className="w-4 h-4 text-slate-400" />
            Status: All
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Category Filter */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-slate-300 transition-all">
            Category: All
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Priority Filter */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-slate-300 transition-all">
            Priority: All
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-slate-300 transition-all">
          <Calendar className="w-4 h-4 text-slate-400" />
          Last 30 Days
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
        
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 shadow-sm shadow-blue-200 transition-all">
          Export Report
        </button>
      </div>
    </div>
  );
};
