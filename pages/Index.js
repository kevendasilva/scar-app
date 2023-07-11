import React from 'react';
import { View, Text } from 'react-native';

import { Navbar } from '../components/Navbar';
import { DoorLock } from '../components/DoorLock';

import { styles } from '../styles/Index';

export function Index({ route }) {
  const { userName } = route.params;

  const locksData = [
    {
      id: 1,
      name: 'Fechadura 1',
      locked: true,
    },
    {
      id: 2,
      name: 'Fechadura 2',
      locked: false,
    },
    {
      id: 3,
      name: 'Fechadura 3',
      locked: true,
    },
  ];

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.contentArea}>
        <Text style={styles.title}>
          Seja bem-vindo(a), <Text style={styles.userName}>{userName}</Text>.
        </Text>
        <View style={styles.divider} />
        <Text style={styles.label}>Gerencie suas fechaduras:</Text>
        <View style={styles.locksList}>
          {locksData.map((lock) => (
            <DoorLock key={lock.id} name={lock.name} locked={lock.locked} />
          ))}
        </View>
      </View>
    </View>
  );
}
