"use client";

import { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

type CityIssue = {
  id: string;
  title: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  priority: 'High' | 'Medium' | 'Low';
  coordinates: [number, number];
  location: string;
};

const cityIssues: CityIssue[] = [
  {
    id: 'ISS-102',
    title: 'Large Pothole near FC Road',
    status: 'Pending',
    priority: 'High',
    coordinates: [18.52097, 73.84191],
    location: 'FC Road Junction',
  },
  {
    id: 'ISS-103',
    title: 'Streetlight outage',
    status: 'In Progress',
    priority: 'Medium',
    coordinates: [18.51401, 73.85611],
    location: 'Shivajinagar Bus Stop',
  },
  {
    id: 'ISS-104',
    title: 'Garbage overflow point',
    status: 'Resolved',
    priority: 'Low',
    coordinates: [18.53174, 73.84727],
    location: 'Deccan Corner',
  },
  {
    id: 'ISS-105',
    title: 'Water leakage from main line',
    status: 'Pending',
    priority: 'High',
    coordinates: [18.50732, 73.87111],
    location: 'Swargate Market',
  },
];

function badgeClasses(status: CityIssue['status']) {
  if (status === 'Resolved') return 'bg-green-50 text-green-700 border-green-200';
  if (status === 'In Progress') return 'bg-amber-50 text-amber-700 border-amber-200';
  return 'bg-rose-50 text-rose-700 border-rose-200';
}

export function MapViewPanel() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: unknown })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Map View</h1>
        <p className="text-slate-500">Track all reported issues geographically in real time.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="h-[520px] overflow-hidden rounded-xl border border-slate-200">
            <MapContainer center={[18.5204, 73.8567]} zoom={13} scrollWheelZoom className="h-full w-full">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {cityIssues.map((issue) => (
                <Marker key={issue.id} position={issue.coordinates}>
                  <Popup>
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900">{issue.title}</p>
                      <p className="text-xs text-slate-600">{issue.location}</p>
                      <p className="text-xs text-slate-500">Priority: {issue.priority}</p>
                      <p className="text-xs text-slate-500">Status: {issue.status}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Recent map markers</h2>
          <div className="mt-4 space-y-3">
            {cityIssues.map((issue) => (
              <div key={issue.id} className="rounded-xl border border-slate-100 p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{issue.title}</p>
                    <p className="text-xs text-slate-500">{issue.location}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500">{issue.id}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${badgeClasses(issue.status)}`}>
                    {issue.status}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                    {issue.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
