import React, { useState } from 'react';
import { View } from 'react-native';
import DashboardMenuButton from './DashboardMenuButton.native';
import DashboardMenuContainer from './DashboardMenuContainer.native';
import dashboardMenuStyles from './DashboardMenuStyles.native';

const DashboardMenu: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={dashboardMenuStyles.base}>
      <DashboardMenuButton onPress={() => setMenuOpen(!menuOpen)} />
      {menuOpen ? <DashboardMenuContainer /> : <></>}
    </View>
  );
};

export default DashboardMenu;