import { View, Text } from 'react-native'
import React from 'react'

const TravelCustomText = (props:any) => {
  return (
    <View>
      <Text style={{
        fontFamily:'notoserif',
        fontStyle:'italic',
        fontSize:50,
        color:'#73CCCC',
        fontWeight:'700',
        position:'absolute',
        marginLeft:25,
        marginTop:50
      }}>{props.children}</Text>
    </View>
  )
}

export default TravelCustomText