import React from 'react';
import { cn } from '../../lib/utils';

export type IssuePriority = 'Low' | 'Medium' | 'High';

interface PriorityBadgeProps {
  priority: IssuePriority;
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  const styles = {
    'High': 'bg-red-600 text-white',
    'Medium': 'bg-yellow-500 text-white',
    'Low': 'bg-green-500 text-white',
  };

  return (
    <span className={cn(
      "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
      styles[priority]
    )}>
      {priority}
    </span>
  );
};
