import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../styles/Update';

export function Update({ keyType, name, date, locked }) {
  return (
    <View style={styles.container}>
      <View style={styles.column1}>
        <View style={styles.row}>
          <FontAwesome name="user" size={20} />
          <Text style={styles.label}>Nome do cliente:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="key" size={20} />
          <Text style={styles.label}>Tipo da chave:</Text>
          <Text style={styles.value}>{keyType}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="calendar" size={20} />
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.value}>{date}</Text>
        </View>
      </View>
      <View style={styles.column2}>
        <FontAwesome
          name={locked ? 'lock' : 'unlock'}
          size={64}
          color="#282C40"
        />
      </View>
    </View>
  );
}
