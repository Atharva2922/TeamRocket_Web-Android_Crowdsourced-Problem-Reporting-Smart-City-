import React from 'react';
import { cn } from '../../lib/utils';

export type IssueStatus = 'Pending' | 'In Progress' | 'Resolved';

interface StatusBadgeProps {
  status: IssueStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    'Pending': 'bg-red-50 text-red-600 border-red-100',
    'In Progress': 'bg-yellow-50 text-yellow-600 border-yellow-100',
    'Resolved': 'bg-green-50 text-green-600 border-green-100',
  };

  return (
    <span className={cn(
      "px-2.5 py-1 rounded-full text-xs font-semibold border",
      styles[status]
    )}>
      {status}
    </span>
  );
};
