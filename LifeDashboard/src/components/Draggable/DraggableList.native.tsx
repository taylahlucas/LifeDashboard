import React, { useState } from 'react';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import DraggabledDashboardWidget from './DraggabledDashboardWidget.native';
import { TouchableOpacity } from 'react-native';
import { WINDOW_HEIGHT } from '../../utils/constants';

const NUM_ITEMS = 3;

function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

type Item = {
  key: string;
  label: string;
  backgroundColor: string;
};

// TODO: Replace this with mock widget data 
const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${index}`,
    label: String(index) + "",
    backgroundColor,
  };
});

const DraggableList = () => {
  const [data, setData] = useState(initialData);
  
  const renderItem = ({ item, getIndex, drag }: RenderItemParams<Item>) => {
    const index: number = getIndex() ?? 0;

    return (
      <TouchableOpacity
        onLongPress={drag}
        delayPressIn={500}
      >
        <DraggabledDashboardWidget key={item.key} index={index} backgroundColor={item.backgroundColor} />
      </TouchableOpacity>
    );
  };

  return (
    <DraggableFlatList
      style={{ maxHeight: WINDOW_HEIGHT-200, top: 20, borderRadius: 2 }}
      data={data}
      scrollsToTop={false}
      onDragEnd={({ data }) => setData(data)}
      keyExtractor={(item) => item.key}
      renderItem={renderItem}
    />
  );
};

export default DraggableList;