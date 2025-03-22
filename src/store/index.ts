import { create } from 'zustand';
import { User, DashboardStats } from '@/types';
import { STACKBLITZ } from '@/assets/images';

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  dashboardStats: DashboardStats;
  // Categories for projects and evaluations
  projectCategories: string[];
  evaluationCategories: string[];
  prizes: Prize[];
  // Mock login/logout functions
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  // Category management functions
  updateProjectCategories: (categories: string[]) => void;
  updateEvaluationCategories: (categories: string[]) => void;
}

// Prize interface
interface Prize {
  id: string;
  name: string;
  description: string;
  amount: string;
  category: string;
  sponsor?: string;
  logoUrl?: string;
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
  // Default categories
  projectCategories: ["AI/ML", "Web", "Mobile", "DevTools", "Games", "IoT"],
  evaluationCategories: ["Innovation", "Technical", "Design", "UX", "Impact", "Popularity"],
  
  // Sample prizes data
  prizes: [
    {
      id: '1',
      name: 'Grand Prize',
      description: 'Best overall project across all categories',
      amount: '$500,000',
      category: 'Overall',
      sponsor: 'Stackblitz',
      logoUrl: STACKBLITZ
    },
    {
      id: '2',
      name: 'AI/ML Excellence',
      description: 'Most innovative use of artificial intelligence',
      amount: '$150,000',
      category: 'AI/ML',
      sponsor: 'Stackblitz',
      logoUrl: STACKBLITZ
    },
    {
      id: '3',
      name: 'Best Mobile App',
      description: 'Outstanding mobile application with exceptional UX/UI',
      amount: '$100,000',
      category: 'Mobile',
      sponsor: 'Stackblitz',
      logoUrl: STACKBLITZ
    },
    {
      id: '4',
      name: 'Web Innovation',
      description: 'Most innovative web application',
      amount: '$100,000',
      category: 'Web',
      sponsor: 'Stackblitz',
      logoUrl: STACKBLITZ
    },
    {
      id: '5',
      name: 'Developer Tools Award',
      description: 'Best tool to improve developer productivity',
      amount: '$75,000',
      category: 'DevTools',
      sponsor: 'Stackblitz',
      logoUrl: STACKBLITZ
    },
    {
      id: '6',
      name: 'Gaming Excellence',
      description: 'Most engaging and innovative game',
      amount: '$100,000',
      category: 'Games',
      sponsor: 'Stackblitz',
      logoUrl: STACKBLITZ
    },
    {
      id: '7',
      name: 'IoT Innovation',
      description: 'Best Internet of Things project',
      amount: '$75,000',
      category: 'IoT',
      sponsor: 'Stackblitz',
      logoUrl: STACKBLITZ
    }
  ],
  
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
  
  // Category management functions
  updateProjectCategories: (categories) => {
    set({ projectCategories: categories });
  },
  updateEvaluationCategories: (categories) => {
    set({ evaluationCategories: categories });
  },
}));