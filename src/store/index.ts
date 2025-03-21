import { create } from 'zustand';
import { User, DashboardStats } from '@/types';

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  dashboardStats: DashboardStats;
  // Mock login/logout functions
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  isAuthenticated: false,
  dashboardStats: {
    totalSubmissions: 1000000,
    evaluationsComplete: 750000,
    pendingEvaluations: 250000,
    flaggedSubmissions: 2500,
    judgesActive: 1250,
  },
  login: async (email, password) => {
    // In a real app, you would validate credentials with an API
    // This is just for demonstration purposes
    if (email && password) {
      let role: 'admin' | 'judge' | 'participant' = 'participant';
      
      if (email.includes('admin')) {
        role = 'admin';
      } else if (email.includes('judge')) {
        role = 'judge';
      }
      
      set({
        user: {
          id: '1',
          name: 'John Doe',
          email,
          role,
        },
        isAuthenticated: true,
      });
    }
  },
  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));