import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from '../styles/EditUser';

export function EditUser() {
  const userData = {
    name: 'Mr. Akira',
    email: 'akira@scar.com',
  };

  const handleUpdateData = () => {
    // eslint-disable-next-line no-console
    console.log('Dados atualizados!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Atualizar dados do usuário</Text>
        <View style={styles.form}>
          <TextInput
            placeholder="Nome"
            style={styles.textInput}
            value={userData.name}
          />
          <TextInput
            placeholder="E-mail"
            style={styles.textInput}
            value={userData.email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Senha atual"
            secureTextEntry
          />
          <TextInput
            style={styles.textInput}
            placeholder="Nova senha"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateData}>
            <Text style={styles.buttonText}>Atualizar dados</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
