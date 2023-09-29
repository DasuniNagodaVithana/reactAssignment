
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './searchbar';


const ViewPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    
  };

  const handleSubscribe = () => {
    
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} onSubscribe={handleSubscribe} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white',
  },
});

export default ViewPage;
