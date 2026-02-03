
export interface WeeklyMetric {
  week: string;
  period: string;
  sent: number;
  accepted: number;
  cr: number;
  messages: number;
  replies: number;
  rr: number;
  scheduled: number;
  conducted: number;
  comment?: string;
}

export interface Campaign {
  id: string;
  name: string;
  status: 'Scale' | 'Top Performer' | 'Attention' | 'Kill';
  sent: number;
  accepted: number;
  cr: string;
  messages: number;
  replies: number;
  rr: string;
  scheduled?: number;
  isStarred?: boolean;
}

export interface AccountMetric {
  id: string;
  name: string;
  sent: number;
  accepted: number;
  messages: number;
  replies: number;
  scheduled: number;
  maxSent: number;
  efficiency: string;
  activity: string;
}

export interface Lead {
  id: string;
  weekId: string;
  name: string;
  photo: string;
  company: string;
  role: string;
  quality?: number;
  status: string;
  dateScheduled: string;
  dateConducted?: string;
  account: string;
  linkedin: string;
  comment: string;
  campaign: string;
}
