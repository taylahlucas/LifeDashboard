export interface DashboardData {
  id: number,
  name: string
};

export interface TagData {
  id: number,
  label: string
}

export const dashboardData: Array<DashboardData> = [
  {
    id: 1,
    name: "Personal"
  },
  {
    id: 2,
    name: "Work"
  },
  {
    id: 3,
    name: "Random"
  }
];

export const tagData: Array<TagData> = [
  {
    id: 1,
    label: 'Wellbeing'
  },
  {
    id: 2,
    label: 'Health'
  },
  {
    id: 3,
    label: 'Exercise'
  },
  {
    id: 4,
    label: 'Work'
  }
];
