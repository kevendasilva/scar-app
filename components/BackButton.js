import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from '../styles/BackButton';

export function BackButton({ onPress }) {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <FontAwesome style={styles.icon} name="chevron-left" size={24} />
    </TouchableOpacity>
  );
}
