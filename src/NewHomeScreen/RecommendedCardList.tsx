// RecommendedCardList.tsx
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from './Card';

interface RecommendedCardListProps {
  data: { id: number; image: any; titleLine1: string; titleLine2: string; titleLine3: string }[];
  onCardPress: (id: number) => void;
}

const RecommendedCardList: React.FC<RecommendedCardListProps> = ({ data, onCardPress }) => {
  const handleHeartPress = (id: number): void => {
    //  heart press logic 
  };

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
            style={styles.card} // Pass the style as a prop to the Card component
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200, 
    height: 300, 
    marginHorizontal: 10,
    borderRadius: 11,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
  },
});

export default RecommendedCardList;
