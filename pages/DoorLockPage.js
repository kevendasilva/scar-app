import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Navbar } from '../components/Navbar';
import { styles } from '../styles/DoorLockPage';

export function DoorLockPage() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.title}>Gerencie sua fechadura:</Text>
      <View style={styles.contentArea}>
        <View style={styles.lockContainer}>
          <Text style={styles.lockName}>Nome da fechadura</Text>
          <Text style={styles.lockState}>Estado: Trancado</Text>
        </View>
        <View style={styles.updateContainer}>
          <View style={styles.updateList}>
            <Text style={styles.updateItem}>
              <Text style={styles.clientName}>Nome do cliente</Text> abriu a
              fechadura usando um{' '}
              <Text style={styles.keyType}>tipo da chave</Text> em{' '}
              <Text style={styles.date}>data</Text>.
            </Text>
            <Text style={styles.updateItem}>
              <Text style={styles.clientName}>Nome do cliente</Text> abriu a
              fechadura usando um{' '}
              <Text style={styles.keyType}>tipo da chave</Text> em{' '}
              <Text style={styles.date}>data</Text>.
            </Text>
            <Text style={styles.updateItem}>
              <Text style={styles.clientName}>Nome do cliente</Text> abriu a
              fechadura usando um{' '}
              <Text style={styles.keyType}>tipo da chave</Text> em{' '}
              <Text style={styles.date}>data</Text>.
            </Text>
          </View>
          <TouchableOpacity style={styles.completeButtonContainer}>
            <Text style={styles.completeButton}>Registro completo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="gear" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="lock" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
