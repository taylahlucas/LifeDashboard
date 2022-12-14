import React, { useState } from 'react';
import { View } from 'react-native';
import DashboardMenuButton from './DashboardMenuButton.native';
import DashboardMenuOpen from './DashboardMenuOpen.native';

const DashboardMenu: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={{ position: 'absolute', top: 0, left: 0, zIndex: 3 }}>
      <DashboardMenuButton onPress={() => setMenuOpen(!menuOpen)} />
      {menuOpen 
        ? <DashboardMenuOpen /> 
        : <></>
      }
      
    </View>
  );
};

export default DashboardMenu;