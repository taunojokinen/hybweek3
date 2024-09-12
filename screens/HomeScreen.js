import React from 'react';
import {View, Text,} from 'react-native';
import StyleSheet from '../styles/Styles';
import { Button } from 'react-native-paper';

export default function HomeScreen({navigation}) {
  return (
    <View style={StyleSheet.container}>
      <Text>Home Screen</Text>
      <Button style = { StyleSheet.Button } mode="contained" onPress={() => navigation.navigate('Details')}>
        Go to details
      </Button>
    </View>
  );
}
