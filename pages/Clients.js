import { View, Text } from 'react-native';

import { Client } from '../components/Client';
import { styles } from '../styles/Clients';

export function Clients() {
  const clientsData = [
    {
      id: 1,
      name: 'John Doe',
      keyType: 'Cartão',
      allowed: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      keyType: 'Token',
      allowed: false,
    },
    {
      id: 3,
      name: 'Robert Johnson',
      keyType: 'Cartão',
      allowed: true,
    },
  ];

  return (
    <View style={styles.container}>
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
