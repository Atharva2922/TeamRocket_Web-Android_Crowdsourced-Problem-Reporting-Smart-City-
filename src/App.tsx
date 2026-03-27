import React, { useState } from 'react';
import { Sidebar } from './components/admin/Sidebar';
import { Navbar } from './components/admin/Navbar';
import { DashboardPage } from './app/admin/DashboardPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Fixed width */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300 ml-20 sm:ml-64">
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-8 max-w-7xl mx-auto w-full">
          {activeTab === 'dashboard' && <DashboardPage />}
          
          {activeTab !== 'dashboard' && (
            <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚧</span>
              </div>
              <h2 className="text-xl font-bold text-slate-600">Section Under Construction</h2>
              <p className="text-sm">We're working hard to bring you the {activeTab} view.</p>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="mt-6 text-blue-600 font-semibold hover:underline"
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-auto py-6 px-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          © 2026 Smart City Issue Reporting System. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
