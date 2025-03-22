import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
  Scale,
  Zap,
  ChevronDown,
  ChevronRight,
  Filter,
  CheckSquare,
  ClipboardList,
  Medal,
  Trophy,
  Workflow
} from 'lucide-react';

interface SidebarLink {
  path: string;
  label: string;
  icon: React.ReactNode;
  exact?: boolean;
  children?: SidebarLink[];
}

interface SidebarProps {
  role: 'admin' | 'judge' | 'participant';
}

export function Sidebar({ role }: SidebarProps) {
  const location = useLocation();
  const [expandedLinks, setExpandedLinks] = useState<Record<string, boolean>>({
    '/judge/evaluations': true,
    '/admin/evaluation-process': false
  });
  
  const toggleExpand = (path: string) => {
    setExpandedLinks({
      ...expandedLinks,
      [path]: !expandedLinks[path]
    });
  };
  
  const adminLinks: SidebarLink[] = [
    { path: '/admin', label: 'Dashboard', icon: <LayoutDashboard size={20} />, exact: true },
    { 
      path: '/admin/evaluation-process', 
      label: 'Evaluation Process', 
      icon: <Workflow size={20} />,
      children: [
        { path: '/admin/submissions', label: 'Submissions', icon: <FileText size={16} /> },
        { path: '/admin/judges', label: 'Judge Management', icon: <Users size={16} /> },
        { path: '/admin/conflicts', label: 'Conflict Resolution', icon: <AlertTriangle size={16} /> },
        { path: '/admin/calibration', label: 'Calibration', icon: <Scale size={16} /> },
      ]
    },
    { path: '/admin/reports', label: 'Reports', icon: <BarChart3 size={20} /> },
    { path: '/admin/awards', label: 'Awards', icon: <Award size={20} /> },
    { path: '/admin/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const judgeLinks: SidebarLink[] = [
    { path: '/judge', label: 'Dashboard', icon: <LayoutDashboard size={20} />, exact: true },
    { 
      path: '/judge/evaluations', 
      label: 'Evaluations', 
      icon: <FileText size={20} />,
      children: [
        { path: '/judge/evaluations/triage', label: 'Initial Triage', icon: <Filter size={16} /> },
        { path: '/judge/evaluations/preliminary', label: 'Preliminary', icon: <CheckSquare size={16} /> },
        { path: '/judge/evaluations/detailed', label: 'Detailed', icon: <ClipboardList size={16} /> },
        { path: '/judge/evaluations/semifinals', label: 'Semi-Finals', icon: <Medal size={16} /> },
        { path: '/judge/evaluations/finals', label: 'Finals', icon: <Trophy size={16} /> },
      ]
    },
    { path: '/judge/completed', label: 'Completed', icon: <BarChart3 size={20} /> },
    { path: '/judge/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const participantLinks: SidebarLink[] = [
    { path: '/participant', label: 'Dashboard', icon: <LayoutDashboard size={20} />, exact: true },
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

  const renderLink = (link: SidebarLink) => {
    const hasChildren = link.children && link.children.length > 0;
    const isExpanded = expandedLinks[link.path];
    const isActive = hasChildren 
      ? location.pathname.startsWith(link.path)
      : link.exact 
        ? location.pathname === link.path
        : location.pathname.startsWith(link.path);
    
    return (
      <li key={link.path}>
        {hasChildren ? (
          <div>
            <button
              onClick={() => toggleExpand(link.path)}
              className={cn(
                'w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              )}
            >
              <div className="flex items-center space-x-3">
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </div>
              <span>
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </span>
            </button>
            
            {isExpanded && link.children && (
              <ul className="ml-6 mt-1 space-y-1">
                {link.children.map((child) => (
                  <li key={child.path}>
                    <NavLink
                      to={child.path}
                      className={({ isActive }) => 
                        cn(
                          'flex items-center space-x-3 px-4 py-2 rounded-md text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-[#43AFFF] text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                        )
                      }
                    >
                      <span>{child.icon}</span>
                      <span>{child.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <NavLink
            to={link.path}
            className={({ isActive: navIsActive }) => {
              // For routes marked as exact, require an exact match
              // Otherwise, use the default isActive from NavLink
              const active = link.exact 
                ? location.pathname === link.path
                : navIsActive;
                
              return cn(
                'flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors',
                active
                  ? 'bg-[#43AFFF] text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              );
            }}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        )}
      </li>
    );
  };

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-background-primary w-64 h-screen fixed left-0 top-0 z-10"
    >
      <div className="h-full flex flex-col">
        <div className="p-6">
          <div className="flex items-start mb-2">
            <Zap className="h-5 w-5 text-[#43AFFF] mr-2 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-white whitespace-nowrap relative z-30" style={{ maxWidth: 'unset' }}>
                World's Largest Hackathon
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Powered by StackBlitz
              </p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {links.map(renderLink)}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}