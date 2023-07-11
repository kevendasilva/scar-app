import { View, Text } from 'react-native';

import { BackButton } from '../components/BackButton';
import { Update } from '../components/Update';
import { styles } from '../styles/Updates';

export function Updates() {
  const updatesData = [
    {
      id: 1,
      keyType: 'Tipo 1',
      name: 'Cliente 1',
      date: '10/07/2023',
      locked: true,
    },
    {
      id: 2,
      keyType: 'Tipo 2',
      name: 'Cliente 2',
      date: '11/07/2023',
      locked: false,
    },
    {
      id: 3,
      keyType: 'Tipo 1',
      name: 'Cliente 3',
      date: '12/07/2023',
      locked: true,
    },
  ];

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Atualizações:</Text>
      <View style={styles.updatesList}>
        {updatesData.map((update) => (
          <Update
            key={update.id}
            keyType={update.keyType}
            name={update.name}
            date={update.date}
            locked={update.locked}
          />
        ))}
      </View>
    </View>
  );
}
