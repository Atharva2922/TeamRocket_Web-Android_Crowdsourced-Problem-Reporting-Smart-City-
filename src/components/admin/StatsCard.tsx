import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color: 'blue' | 'red' | 'yellow' | 'green';
}

const colorMap = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100',
  red: 'bg-red-50 text-red-600 border-red-100',
  yellow: 'bg-yellow-50 text-yellow-600 border-yellow-100',
  green: 'bg-green-50 text-green-600 border-green-100',
};

const iconColorMap = {
  blue: 'bg-blue-600',
  red: 'bg-red-600',
  yellow: 'bg-yellow-500',
  green: 'bg-green-600',
};

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, trend, color }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
          
          {trend && (
            <div className="mt-2 flex items-center gap-1.5">
              <span className={cn(
                "text-xs font-semibold px-1.5 py-0.5 rounded-md",
                trend.isPositive ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
              )}>
                {trend.value}
              </span>
              <span className="text-xs text-slate-400">vs last month</span>
            </div>
          )}
        </div>
        
        <div className={cn(
          "p-3 rounded-xl transition-colors",
          colorMap[color]
        )}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
