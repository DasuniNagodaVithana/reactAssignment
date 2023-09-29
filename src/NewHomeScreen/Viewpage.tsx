import React, { useState } from 'react';
import { View, StyleSheet, ScrollView,Image,TouchableOpacity } from 'react-native';
import SearchBar from './searchbar';
import CardList from './CardList'; 

const ViewPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    
  };

  const handleSubscribe = () => {
    
  };

  
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

  const handleIconPress = (iconIndex: number) => {
    // Handle icon press based on index
    switch (iconIndex) {
      case 0:
        // Handle the first icon press
        break;
      case 1:
        // Handle the second icon press
        break;
      // Add more cases for other icons as needed
    }
  };

  return (
    <View style={styles.container}>
    <ScrollView style={styles.container}>
      <SearchBar onSearch={handleSearch} onSubscribe={handleSubscribe} />
      
      <CardList data={cardData} onCardPress={handleCardPress} />
      <View style={styles.cardListContainer}>
        <CardList data={cardData} onCardPress={handleCardPress} />
      </View>

    </ScrollView>
      <View style={styles.iconRow}>
      <TouchableOpacity onPress={() => handleIconPress(0)}>
        <Image source={require('../assets/images/image12.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress(1)}>
        <Image source={require('../assets/images/image13.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress(2)}>
        <Image source={require('../assets/images/image14.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress(3)}>
        <Image source={require('../assets/images/image15.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress(4)}>
        <Image source={require('../assets/images/image16.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      </View>
    
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    padding: 10,
  },

  cardListContainer: {
    marginTop: 30, // Add margin here to push the duplicated cards down
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    
  },
  icon: {
    width: 24,
    height: 24,
  },

  
});

export default ViewPage;
