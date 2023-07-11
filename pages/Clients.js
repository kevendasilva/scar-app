import { View, Text } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Client } from '../components/Client';

import { styles } from '../styles/Clients';

export function Clients() {
  const clientsData = [
    {
      id: 1,
      name: 'Cliente 1',
      keyType: 'Tipo 1',
      allowed: true,
    },
    {
      id: 2,
      name: 'Cliente 2',
      keyType: 'Tipo 2',
      allowed: false,
    },
    {
      id: 3,
      name: 'Cliente 3',
      keyType: 'Tipo 1',
      allowed: true,
    },
  ];

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Clientes da fechadura:</Text>
      <View style={styles.clientList}>
        {clientsData.map((client) => (
          <Client
            key={client.id}
            allowed={client.allowed}
            name={client.name}
            keyType={client.keyType}
          />
        ))}
      </View>
    </View>
  );
}
