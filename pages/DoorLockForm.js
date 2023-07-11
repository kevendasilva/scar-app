import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from '../styles/DoorLockForm';

export function DoorLockForm({ doorLock }) {
  const [name, setName] = useState(doorLock?.name || '');

  const handleSubmit = () => {
    if (name.trim() === '') {
      return;
    }

    if (doorLock) {
      // eslint-disable-next-line no-console
      console.log('Fechadura atualizada:', name);
    } else {
      // eslint-disable-next-line no-console
      console.log('Fechadura cadastrada:', name);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {doorLock ? 'Editar fechadura' : 'Adicionar fechadura'}
      </Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Defina o nome da fechadura</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Salvar dados</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
