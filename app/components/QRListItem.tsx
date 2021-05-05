import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function QRListItem({ item, onRemove = () => { } }: { item: string, onRemove?: Function }) {
  const onItemRemove = () => {
    onRemove();
  }

  return (
    <View style={{
      padding: 7,
      margin: 10,
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Text style={{ textAlign: 'center', marginRight: 10 }}>{item}</Text>
      <Ionicons onPress={onItemRemove} name="remove-circle" color={'#0066ff'} size={24} />
    </View>
  )
}
