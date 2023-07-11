import { View, Image } from 'react-native';
import Logo from '../assets/LogoNoText.png';

import { styles } from '../styles/Navbar';

export function Navbar() {
  return (
    <View style={styles.navbar}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
}
