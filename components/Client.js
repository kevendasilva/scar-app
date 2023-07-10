import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../styles/Client';

export function Client({ allowed, name, keyType }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome style={styles.icon} name="user" size={24} />
        <Text style={styles.label}>Nome do cliente:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome style={styles.icon} name="key" size={24} />
        <Text style={styles.label}>Tipo da chave:</Text>
        <Text style={styles.value}>{keyType}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.buttonText}>Remover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.buttonText}>
              {allowed ? 'Permitir' : 'Bloquear'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
