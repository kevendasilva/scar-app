import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentArea: {
    padding: 24,
    backgroundColor: '#282C40',
    margin: 24,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 24,
    paddingTop: 36,
  },
  lockContainer: {
    alignItems: 'center',
    paddingVertical: 36,
  },
  lockName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 9,
    color: 'white',
  },
  lockState: {
    fontSize: 16,
    color: 'white',
  },
  updateContainer: {
    backgroundColor: 'white',
    padding: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  updateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  updateList: {
    marginBottom: 10,
  },
  updateItem: {
    marginBottom: 5,
    fontSize: 12,
  },
  clientName: {
    fontWeight: 'bold',
  },
  keyType: {
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'bold',
  },
  completeButtonContainer: {
    alignItems: 'center',
  },
  completeButton: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#454B66',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '20%',
    paddingBottom: 24,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#454B66',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
