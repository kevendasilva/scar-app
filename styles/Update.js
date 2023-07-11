import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7.6,
    borderWidth: 1,
    marginBottom: 12,
  },
  column1: {
    flex: 1,
  },
  column2: {
    width: 80,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 5,
  },
});
