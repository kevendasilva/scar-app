import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Menu } from '../components/Menu';
import { Navbar } from '../components/Navbar';
import { styles } from '../styles/DoorLockPage';

export function DoorLockPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.title}>Gerencie sua fechadura:</Text>
      <View style={styles.contentArea}>
        <View style={styles.lockContainer}>
          <Text style={styles.lockName}>Laboratório</Text>
          <Text style={styles.lockState}>
            Estado: <Text style={{ color: 'red' }}>Trancado</Text>
          </Text>
        </View>
        <View style={styles.updateContainer}>
          <View style={styles.updateList}>
            <Text style={styles.updateItem}>
              <Text style={styles.clientName}>João</Text> abriu a fechadura
              usando um <Text style={styles.keyType}>cartão</Text> em{' '}
              <Text style={styles.date}>07/07/2023</Text>.
            </Text>
            <Text style={styles.updateItem}>
              <Text style={styles.clientName}>Bruna</Text> abriu a fechadura
              usando um <Text style={styles.keyType}>token</Text> em{' '}
              <Text style={styles.date}>07/07/2023</Text>.
            </Text>
            <Text style={styles.updateItem}>
              <Text style={styles.clientName}>Alexandre</Text> abriu a fechadura
              usando um <Text style={styles.keyType}>cartão</Text> em{' '}
              <Text style={styles.date}>07/07/2023</Text>.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.completeButtonContainer}
            onPress={() => navigation.navigate('Updates')}
          >
            <Text style={styles.completeButton}>Registro completo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DoorLockForm')}
        >
          <FontAwesome name="gear" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="lock" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Clients')}
        >
          <FontAwesome name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
}
