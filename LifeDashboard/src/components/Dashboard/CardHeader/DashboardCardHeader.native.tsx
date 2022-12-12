import DashboardCardTitle from './DashboardCardTitle.native';
import AddDashboardButton from './AddDashboardButton.native';

interface DashboardCardHeaderProps {
  title?: String;
}

const DashboardCardHeader = ({ title }: DashboardCardHeaderProps) => {
  return (
    <>
      <DashboardCardTitle title={title} />
      <AddDashboardButton />
    </>
  );
};

export default DashboardCardHeader;