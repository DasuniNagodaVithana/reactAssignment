import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
  imageSource: any;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  onPress: () => void;
  onHeartPress: () => void;
  description: string; 
}

const Card: React.FC<CardProps> = ({
  imageSource,
  titleLine1,
  titleLine2,
  titleLine3,
  onPress,
  onHeartPress,
  description,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.titleLine1}>{titleLine1}</Text>
        <Text style={styles.titleLine2}>{titleLine2}</Text>
        <Text style={styles.titleLine3}>{titleLine3}</Text>
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
    height: 255,
    marginHorizontal: 10,
    borderRadius: 11,
    overflow: 'hidden',
    backgroundColor:'white',
    elevation: 4,
  },
  image: {
    width: '87%',
    height: '70%',
    borderRadius: 4,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  overlay: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    top:190,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: -1,
    //alignItems: 'center',
  },
  titleLine1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
  },
  titleLine2: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
    textAlign: 'left',
    
  },
  titleLine3: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'left',
  },
  description: {
    fontSize: 12, 
    color: 'black', 
  },
  heartIcon: {
    width: 24, 
    height: 24, 
  },
});

export default Card;
