// CardList.tsx
import React from 'react';
import { View, FlatList } from 'react-native';
import Card from './Card';

interface CardListProps {
  data: { id: number; image: any; titleLine1: string; titleLine2: string; titleLine3: string }[];
  onCardPress: (id: number) => void;
}


const CardList: React.FC<CardListProps> = ({ data, onCardPress }) => {
  function handleHeartPress(id: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
  imageSource={item.image}
  titleLine1={item.titleLine1}
  titleLine2={item.titleLine2}
  titleLine3={item.titleLine3}
  onPress={() => onCardPress(item.id)}
  onHeartPress={() => handleHeartPress(item.id)}
  description={''}
/>

        )}
      />
    </View>
  );
};

export default CardList;
