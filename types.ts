export interface NavItem {
  label: string;
  path: string;
}

export interface NodeStat {
  label: string;
  value: string;
  subValue?: string;
  status?: 'syncing' | 'stable' | 'active';
  icon: string;
}

export interface NodeApplicant {
  id: string;
  region: string;
  time: string;
  status: 'pending' | 'approved' | 'rejected';
}
