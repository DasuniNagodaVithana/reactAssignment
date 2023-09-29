import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
  imageSource: any;
  title: string;
  onPress: () => void;
  onHeartPress: () => void;
  description: string; 
}

const Card: React.FC<CardProps> = ({
  imageSource,
  title,
  onPress,
  onHeartPress,
  description,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={onHeartPress}>
          <Image
            source={require('../assets/images/image9.png')}  
            style={styles.heartIcon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 11,
    overflow: 'hidden',
    backgroundColor:'white',
    elevation:4.5
    
  },
  image: {
    width: '87%',
    height: '70%',
    borderRadius:4,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:10
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding:-1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 12, 
    color: '#555', 
  },
  heartIcon: {
    width: 24, 
    height: 24, 
  },
});

export default Card;
