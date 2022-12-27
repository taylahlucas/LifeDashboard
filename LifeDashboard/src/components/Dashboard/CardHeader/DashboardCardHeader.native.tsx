import CustomText from '../../../common/general/Text/CustomText.native';
import { CustomTextStyle } from '../../../common/general/CustomStyles.native';

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