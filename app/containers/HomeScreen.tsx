import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRScreen from './QRScreen';
import QRListScreen from './QRListScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Read QR"
            component={QRScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="qr-code" color={color} size={size} />
            }}
          />
          <Tab.Screen
            name="QR List"
            component={QRListScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
