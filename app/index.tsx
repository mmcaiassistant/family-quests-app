import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#9A93FF', '#81DDD8']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.emoji}>🏰</Text>
        
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.appName}>FAMILY QUESTS!</Text>
        
        <Text style={styles.subtitle}>
          Turn chores & homeschool{'\n'}
          into epic adventures
        </Text>

        <View style={styles.features}>
          <Text style={styles.feature}>• Fun for kids</Text>
          <Text style={styles.feature}>• Simple for parents</Text>
          <Text style={styles.feature}>• Works for your family</Text>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/(auth)/role-selection')}
        >
          <Text style={styles.primaryButtonText}>Get Started →</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/(auth)/login')}
        >
          <Text style={styles.secondaryButtonText}>
            Already have account? Log In
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    color: '#2D3748',
    marginBottom: 8,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  features: {
    marginBottom: 48,
  },
  feature: {
    fontSize: 16,
    color: '#2D3748',
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 8,
    width: '100%',
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    marginTop: 16,
    paddingVertical: 12,
  },
  secondaryButtonText: {
    color: '#2D3748',
    fontSize: 14,
  },
});
