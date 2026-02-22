import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const AVATARS = ['🦁', '🐯', '🦄', '🐉', '🦊', '🐼', '🐻', '🦅'];

export default function AddChild() {
  const router = useRouter();
  const [childName, setChildName] = useState('');
  const [age, setAge] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🦁');

  const handleFinish = () => {
    if (!childName) {
      Alert.alert('Error', 'Please enter your child\'s name');
      return;
    }

    // TODO: Save child data to Supabase
    // For now, navigate to parent dashboard
    router.replace('/(tabs)/parent-dashboard');
  };

  const handleSkip = () => {
    router.replace('/(tabs)/parent-dashboard');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipButton}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.step}>Setup (2/2)</Text>
        </View>

        <Text style={styles.title}>Add your first hero! 🦸</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Child's Name</Text>
          <TextInput
            style={styles.input}
            value={childName}
            onChangeText={setChildName}
            placeholder="e.g., Emma"
            placeholderTextColor="#718096"
          />

          <Text style={styles.label}>Age (Optional)</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            placeholder="e.g., 10"
            placeholderTextColor="#718096"
            keyboardType="number-pad"
          />

          <Text style={styles.label}>Avatar</Text>
          <View style={styles.avatarGrid}>
            {AVATARS.map((avatar) => (
              <TouchableOpacity
                key={avatar}
                style={[
                  styles.avatarButton,
                  selectedAvatar === avatar && styles.avatarButtonSelected,
                ]}
                onPress={() => setSelectedAvatar(avatar)}
              >
                <Text style={styles.avatarEmoji}>{avatar}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.addAnotherButton}
            onPress={() => {
              // TODO: Add another child
              Alert.alert('Coming Soon', 'You can add more children from the Family screen');
            }}
          >
            <Text style={styles.addAnotherButtonText}>+ Add Another Child</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleFinish}
          >
            <Text style={styles.primaryButtonText}>Finish Setup →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  content: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 48,
  },
  skipButton: {
    fontSize: 16,
    color: '#6C63FF',
  },
  step: {
    fontSize: 14,
    color: '#718096',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 32,
  },
  form: {
    gap: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#718096',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2D3748',
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  avatarButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarButtonSelected: {
    borderColor: '#6C63FF',
    borderWidth: 3,
  },
  avatarEmoji: {
    fontSize: 32,
  },
  addAnotherButton: {
    paddingVertical: 12,
    marginTop: 16,
  },
  addAnotherButtonText: {
    fontSize: 16,
    color: '#6C63FF',
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
