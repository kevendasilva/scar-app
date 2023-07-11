import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../styles/DoorLock';

export function DoorLock({ name, locked, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DoorLockPage')}
      >
        <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Estado:</Text>
          <Text style={styles.state}>{locked ? 'Trancado' : 'Aberto'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
