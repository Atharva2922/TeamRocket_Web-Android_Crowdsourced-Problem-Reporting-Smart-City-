import React from 'react';
import { 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  Activity,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { StatsCard } from '../../components/admin/StatsCard';
import { IssueTable, Issue } from '../../components/admin/IssueTable';
import { FilterBar } from '../../components/admin/FilterBar';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const dummyIssues: Issue[] = [
  {
    id: '1',
    image: 'https://picsum.photos/seed/pothole/200/200',
    title: 'Large Pothole on Main St',
    category: 'Roads',
    location: 'Downtown, Sector 4',
    status: 'Pending',
    priority: 'High',
    reportedAt: '2 hours ago'
  },
  {
    id: '2',
    image: 'https://picsum.photos/seed/light/200/200',
    title: 'Broken Streetlight',
    category: 'Infrastructure',
    location: 'Oak Avenue, Westside',
    status: 'In Progress',
    priority: 'Medium',
    reportedAt: '5 hours ago'
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/waste/200/200',
    title: 'Illegal Waste Dumping',
    category: 'Sanitation',
    location: 'Riverbank Park',
    status: 'Resolved',
    priority: 'High',
    reportedAt: '1 day ago'
  },
  {
    id: '4',
    image: 'https://picsum.photos/seed/pipe/200/200',
    title: 'Water Leakage',
    category: 'Utilities',
    location: 'Market Square',
    status: 'Pending',
    priority: 'Medium',
    reportedAt: '3 hours ago'
  },
  {
    id: '5',
    image: 'https://picsum.photos/seed/graffiti/200/200',
    title: 'Graffiti on Public Wall',
    category: 'Vandalism',
    location: 'Central Station',
    status: 'In Progress',
    priority: 'Low',
    reportedAt: '12 hours ago'
  }
];

const barData = [
  { name: 'Roads', count: 12 },
  { name: 'Sanitation', count: 19 },
  { name: 'Utilities', count: 7 },
  { name: 'Safety', count: 5 },
  { name: 'Other', count: 3 },
];

const pieData = [
  { name: 'Resolved', value: 45, color: '#10b981' },
  { name: 'In Progress', value: 30, color: '#facc15' },
  { name: 'Pending', value: 25, color: '#ef4444' },
];

export const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500">Welcome back, Admin. Here's what's happening in the city today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Issues" 
          value="1,284" 
          icon={Activity} 
          trend={{ value: "+12%", isPositive: true }}
          color="blue"
        />
        <StatsCard 
          title="Pending" 
          value="342" 
          icon={AlertCircle} 
          trend={{ value: "+5%", isPositive: false }}
          color="red"
        />
        <StatsCard 
          title="In Progress" 
          value="456" 
          icon={Clock} 
          trend={{ value: "+18%", isPositive: true }}
          color="yellow"
        />
        <StatsCard 
          title="Resolved" 
          value="486" 
          icon={CheckCircle2} 
          trend={{ value: "+24%", isPositive: true }}
          color="green"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Issues by Category
            </h3>
            <select className="text-xs bg-slate-50 border-none rounded-lg px-2 py-1 focus:ring-0">
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Resolution Status</h3>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-600">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Issues Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Recent Reported Issues</h3>
          <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <FilterBar />
        <IssueTable issues={dummyIssues} />
      </div>
    </div>
  );
};
