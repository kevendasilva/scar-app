import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../styles/Menu';

export function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="home" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="plus" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="gear" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="sign-out" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
