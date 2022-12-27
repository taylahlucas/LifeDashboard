import React, { useState } from 'react';
import { View } from 'react-native';
import SideMenuButton from './SideMenuButton';
import SideMenuContainer from './SideMenuContainer.native';
import sideMenuStyles from './SideMenuStyles';
import Condition
 from '../../general/Condition.native';
const SideMenu: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={sideMenuStyles.base}>
      <SideMenuButton onPress={() => setMenuOpen(!menuOpen)} />
      <Condition condition={menuOpen}>
        <SideMenuContainer onItemPress={() => setMenuOpen(false)}/> 
      </Condition>
    </View>
  );
};

export default SideMenu;