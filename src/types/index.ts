export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'judge' | 'participant';
  avatar?: string;
}

export interface Submission {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  participantId: string;
  participantName: string;
  submissionDate: string;
  status: 'submitted' | 'preliminary_review' | 'detailed_review' | 'evaluated' | 'flagged';
  score?: number;
}

export interface Evaluation {
  id: string;
  submissionId: string;
  judgeId: string;
  judgeName: string;
  scores: {
    innovation: number;
    design: number;
    functionality: number;
    impact: number;
    presentation: number;
  };
  comments: string;
  status: 'draft' | 'completed' | 'flagged';
  timestamp: string;
}

export interface Award {
  id: string;
  name: string;
  description: string;
  submissionId?: string;
  submissionTitle?: string;
  participantName?: string;
}

export interface MetricCard {
  title: string;
  value: number | string;
  trend?: 'up' | 'down' | 'neutral';
  percentChange?: number;
  color?: string;
}

export interface DashboardStats {
  totalSubmissions: number;
  evaluationsComplete: number;
  pendingEvaluations: number;
  flaggedSubmissions: number;
  judgesActive: number;
}