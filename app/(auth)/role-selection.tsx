import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function RoleSelection() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you?</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/(auth)/parent-setup')}
      >
        <Text style={styles.cardEmoji}>👤</Text>
        <Text style={styles.cardTitle}>I'm a Parent</Text>
        <Text style={styles.cardSubtitle}>
          Manage quests, track progress
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/(auth)/login')}
      >
        <Text style={styles.cardEmoji}>🧒</Text>
        <Text style={styles.cardTitle}>I'm a Kid</Text>
        <Text style={styles.cardSubtitle}>
          Complete quests, earn rewards
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 32,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    minHeight: 120,
    justifyContent: 'center',
  },
  cardEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#718096',
  },
  backButton: {
    marginTop: 24,
    paddingVertical: 12,
  },
  backButtonText: {
    fontSize: 16,
    color: '#6C63FF',
    textAlign: 'center',
  },
});
