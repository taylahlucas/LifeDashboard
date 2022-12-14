type DashboardMenuItem = {
  // TODO: Turn into enum
  type: string;
  icon: string;
  backgroundColor: string;
};

const widgetData: Array<DashboardMenuItem> = [
  {
    type: 'countdown',
    icon: 'calendar',
    backgroundColor: '#5686EA'
  },
  {
    type: 'lists',
    icon: 'library-books',
    backgroundColor: '#F26159'
  },
  {
    type: 'tasks',
    icon: 'tasks',
    backgroundColor: '#F2B359'
  },
  {
    type: 'goals',
    icon: 'flag',
    backgroundColor: '#BF59F2'
  },
];

export default widgetData;