import React from 'react'
import { Text, View } from 'react-native'
import QRScanner from '../components/QRScanner'

export default function QRScreen() {
  return (
    <View style={{ flex: 1 }}>
      <QRScanner />
    </View>
  )
}
