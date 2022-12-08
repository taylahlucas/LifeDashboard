import React, { useState } from 'react';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import DraggabledDashboardWidget from './DraggabledDashboardWidget.native';
import { StyleSheet, TouchableOpacity } from 'react-native';

const NUM_ITEMS = 3;

function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

type Item = {
  key: string;
  label: string;
  backgroundColor: string;
};

// TODO: Make dynamic
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

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
    return (
      <TouchableOpacity
        onLongPress={drag}
        delayLongPress={-1}
        disabled={isActive}
      >
        <DraggabledDashboardWidget key={item.key} backgroundColor={item.backgroundColor} />
      </TouchableOpacity>
    );
  };

  return (
    <DraggableFlatList
      data={data}
      onDragEnd={({ data }) => setData(data)}
      keyExtractor={(item) => item.key}
      renderItem={renderItem}
    />
  );
};

export default DraggableList;