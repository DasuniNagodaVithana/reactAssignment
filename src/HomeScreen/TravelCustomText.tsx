import { View, Text } from 'react-native'
import React from 'react'

const TravelCustomText = (props:any) => {
  return (
    <View>
      <Text style={{
        fontFamily:'sans-serif',
        fontSize:70,
        color:'#73CCCC',
        fontWeight:'700',
        position:'absolute',
        marginLeft:10,
        marginTop:20
      }}>{props.children}</Text>
    </View>
  )
}

export default TravelCustomText