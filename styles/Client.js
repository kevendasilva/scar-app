import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 7.6,
    borderWidth: 1,
    borderColor: '#2D2D2D',
    marginBottom: 12,
    padding: 18,
  },
  icon: {
    paddingHorizontal: 6,
    color: '#677DB7',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#282C40',
  },
  value: {
    marginLeft: 5,
    fontSize: 16,
    color: '#454B66',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  removeButton: {
    flex: 1,
    backgroundColor: '#DD2828',
    padding: 10,
    borderRadius: 5,
    marginRight: 12,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#282C40',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
