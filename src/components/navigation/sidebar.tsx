import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  AlertTriangle, 
  BarChart3, 
  Award, 
  Settings,
  Scale
} from 'lucide-react';

interface SidebarLink {
  path: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  role: 'admin' | 'judge' | 'participant';
}

export function Sidebar({ role }: SidebarProps) {
  const adminLinks: SidebarLink[] = [
    { path: '/admin', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/admin/judges', label: 'Judge Management', icon: <Users size={20} /> },
    { path: '/admin/submissions', label: 'Submissions', icon: <FileText size={20} /> },
    { path: '/admin/conflicts', label: 'Conflict Resolution', icon: <AlertTriangle size={20} /> },
    { path: '/admin/calibration', label: 'Calibration', icon: <Scale size={20} /> },
    { path: '/admin/reports', label: 'Reports', icon: <BarChart3 size={20} /> },
    { path: '/admin/awards', label: 'Awards', icon: <Award size={20} /> },
    { path: '/admin/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const judgeLinks: SidebarLink[] = [
    { path: '/judge', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/judge/evaluations', label: 'Evaluations', icon: <FileText size={20} /> },
    { path: '/judge/completed', label: 'Completed', icon: <BarChart3 size={20} /> },
    { path: '/judge/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const participantLinks: SidebarLink[] = [
    { path: '/participant', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/participant/submissions', label: 'Submissions', icon: <FileText size={20} /> },
    { path: '/participant/leaderboard', label: 'Leaderboard', icon: <BarChart3 size={20} /> },
    { path: '/participant/awards', label: 'Awards', icon: <Award size={20} /> },
    { path: '/participant/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const links = role === 'admin' 
    ? adminLinks 
    : role === 'judge' 
    ? judgeLinks 
    : participantLinks;

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-background-primary w-64 h-screen fixed left-0 top-0 z-10"
    >
      <div className="h-full flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white">
            GWR Hackathon
          </h2>
          <p className="text-sm text-gray-400">
            {role === 'admin' 
              ? 'Administrator Portal' 
              : role === 'judge' 
              ? 'Judge Portal' 
              : 'Participant Portal'}
          </p>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-accent-blue text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    )
                  }
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}