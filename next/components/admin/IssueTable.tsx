"use client";

import { Eye, MapPin, MoreVertical } from 'lucide-react';
import { PriorityBadge, IssuePriority } from './PriorityBadge';
import { StatusBadge, IssueStatus } from './StatusBadge';

export interface Issue {
  id: string;
  image: string;
  title: string;
  category: string;
  location: string;
  status: IssueStatus;
  priority: IssuePriority;
  reportedAt: string;
}

interface IssueTableProps {
  issues: Issue[];
}

export function IssueTable({ issues }: IssueTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Issue</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {issues.map((issue) => (
              <tr key={issue.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{issue.title}</p>
                      <p className="text-xs text-slate-500">{issue.reportedAt}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600">{issue.category}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-sm">{issue.location}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={issue.status} />
                </td>
                <td className="px-6 py-4">
                  <PriorityBadge priority={issue.priority} />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
        <p className="text-xs text-slate-500">Showing 1 to {issues.length} of 42 issues</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 disabled:opacity-50">
            Previous
          </button>
          <button className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
