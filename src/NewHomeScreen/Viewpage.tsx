import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './searchbar';
import CardList from './CardList'; 

const ViewPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    
  };

  const handleSubscribe = () => {
    
  };

  // Define your card data
  const cardData = [
    {
      id: 1,
      titleLine1: 'Line 1',
      titleLine2: 'Line 2',
      titleLine3: 'Line 3',
      image: require('../assets/images/image5.jpg'),
    },
    {
      id: 2,
      titleLine1: 'Line 1',
      titleLine2: 'Line 2',
      titleLine3: 'Line 3',
      image: require('../assets/images/image8.jpg'),
    },
    {
      id: 3,
      titleLine1: 'Line 1',
      titleLine2: 'Line 2',
      titleLine3: 'Line 3',
      image: require('../assets/images/image11.png'),
    },
  ];

  const handleCardPress = (id: number) => {
    // Handle card press here
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} onSubscribe={handleSubscribe} />
      
      <CardList data={cardData} onCardPress={handleCardPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default ViewPage;
