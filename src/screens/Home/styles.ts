import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#131016', padding: 24 },
  eventName: { color: 'white', fontSize: 24, fontWeight: 'bold', marginTop: 48 },
  eventDate: { color: '#6b6b6b', fontSize: 16 },
  input: {
    flex: 1,
    backgroundColor: '#252529',
    height: 56,
    borderRadius: 5,
    color: 'white',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row',
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
})
