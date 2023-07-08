/* eslint-disable prettier/prettier */
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function DefaultButton(props) {
  const { title } = props;
  return (
    <TouchableOpacity style={styles.button}>
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
  },
});
