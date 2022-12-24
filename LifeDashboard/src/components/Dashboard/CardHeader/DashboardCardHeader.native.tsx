import AddDashboardButton from './AddDashboardButton.native';
import CustomText from '../../../common/general/CustomText.native';
import { CustomTextStyle } from '../../../common/general/CustomTextStyles.native';

interface DashboardCardHeaderProps {
  title?: String;
}

const DashboardCardHeader = ({ title }: DashboardCardHeaderProps) => {
  return (
    <>
      <CustomText label={title ?? ''} textStyle={CustomTextStyle.PageTitle} />
      {/* <DashboardCardTitle title={title} /> */}
      {/* <AddDashboardButton /> */}
    </>
  );
};

export default DashboardCardHeader;