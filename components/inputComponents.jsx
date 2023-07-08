/* eslint-disable prettier/prettier */
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';

export function DefaultButton(props) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  const { onPress } = props;
  const { title } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282C40',
    borderRadius: 20,
  },
  buttonText: {
    color: '#D9D9D9',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'Lato_400Regular',
  },
});
