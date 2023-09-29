import React from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface SearchBarProps {
  onSearch: (text: string) => void;
  onSubscribe: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSubscribe }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#49454F"
        style={styles.input}
        onChangeText={onSearch}
      />
      <TouchableOpacity style={styles.bellIcon} onPress={onSubscribe}>
        <Image
          source={require('../assets/images/image4.png')} // Replace with your bell icon image
          style={styles.bellImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop:20
    
  },
  input: {
    flex: 1,
    height: 40,
    
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    backgroundColor:'#dcdcdc'
    
  },
  bellIcon: {
    marginLeft: 10,
  },
  bellImage: {
    width: 30, // Adjust the size of the bell icon as needed
    height: 30,
  },
});

export default SearchBar;
