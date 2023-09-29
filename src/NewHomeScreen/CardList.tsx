// CardList.tsx
import React from 'react';
import { View, FlatList } from 'react-native';
import Card from './Card';

interface CardListProps {
  data: { id: number; image: any; title: string }[]; // Define the correct type for your data
  onCardPress: (id: number) => void; // Define the function for card press
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
            title={item.title}
            onPress={() => onCardPress(item.id)}
            onHeartPress={() => handleHeartPress(item.id)} description={''}          />
        )}
      />
    </View>
  );
};

export default CardList;
