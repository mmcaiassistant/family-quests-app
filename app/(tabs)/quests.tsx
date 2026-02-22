import { View, Text, StyleSheet } from 'react-native';

export default function QuestsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All Quests</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.placeholder}>Quest Management Screen</Text>
        <Text style={styles.subtext}>View and manage all quests here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3748',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  placeholder: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 14,
    color: '#718096',
    textAlign: 'center',
  },
});
