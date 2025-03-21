import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/navigation/header';
import { Sidebar } from '../components/navigation/sidebar';
import { useAppStore } from '../store';

interface MainLayoutProps {
  role: 'admin' | 'judge' | 'participant';
}

function MainLayout({ role }: MainLayoutProps) {
  // In a real application, you would check authentication status
  // and redirect unauthenticated users to the login page
  const { user } = useAppStore();
  const navigate = useNavigate();
  
  // For demo purposes, we'll use the provided role
  const userName = user?.name || 'John Doe';

  return (
    <div className="bg-background-primary text-text-primary min-h-screen">
      <Sidebar role={role} />
      <div className="ml-64">
        <Header userName={userName} role={role} />
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;