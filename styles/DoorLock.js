import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282C40',
    borderRadius: 20,
    marginBottom: 12,
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'white',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 14,
    color: 'white',
  },
  state: {
    color: 'red',
  },
});
