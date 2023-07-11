import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../styles/Menu';

export function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Index')}
        >
          <FontAwesome name="home" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DoorLockForm')}
        >
          <FontAwesome name="plus" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditUser')}
        >
          <FontAwesome name="gear" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomePage')}
        >
          <FontAwesome name="sign-out" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
