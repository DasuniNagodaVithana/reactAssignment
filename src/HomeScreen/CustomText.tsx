import { View, Text } from 'react-native'
import React from 'react'

const CustomText = (props:any) => {
  return (
    <View>
      <Text style={{
        fontSize:40,
        color:'#FFFFFF',
        fontWeight:'700',
        position:'absolute',
        marginLeft:10,
        marginTop:20
      }}>{props.children}</Text>
    </View>
  )
}

export default CustomText