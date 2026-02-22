import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FAMILY_MEMBERS = [
  { id: 1, name: 'Emma', age: 10, avatar: '🦁', level: 12, xp: 350, questsCompleted: 7 },
  { id: 2, name: 'Noah', age: 7, avatar: '🐯', level: 9, xp: 220, questsCompleted: 5 },
  { id: 3, name: 'Lily', age: 5, avatar: '🦄', level: 4, xp: 80, questsCompleted: 2 },
];

export default function FamilyScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Family</Text>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-circle-outline" size={20} color="#6C63FF" />
        <Text style={styles.addButtonText}>Add Family Member</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>THIS WEEK'S LEADERBOARD 🏆</Text>
        
        {FAMILY_MEMBERS.map((member, index) => (
          <TouchableOpacity key={member.id} style={styles.memberCard}>
            <Text style={styles.medal}>
              {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
            </Text>
            <Text style={styles.avatar}>{member.avatar}</Text>
            <View style={styles.memberInfo}>
              <Text style={styles.memberName}>
                {index + 1}. {member.name}
              </Text>
              <Text style={styles.memberStats}>
                Level {member.level} • {member.xp} XP
              </Text>
              <Text style={styles.memberQuests}>
                {member.questsCompleted} quests completed
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#718096" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>FAMILY STATS</Text>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>Total XP Earned:</Text>
          <Text style={styles.statsValue}>8,450</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>Quests Completed:</Text>
          <Text style={styles.statsValue}>142</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>Current Streak:</Text>
          <Text style={styles.statsValue}>12 days 🔥</Text>
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
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#6C63FF',
    gap: 8,
  },
  addButtonText: {
    fontSize: 16,
    color: '#6C63FF',
    fontWeight: '600',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#718096',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  memberCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  medal: {
    fontSize: 24,
    marginRight: 8,
  },
  avatar: {
    fontSize: 32,
    marginRight: 12,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  memberStats: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 2,
  },
  memberQuests: {
    fontSize: 12,
    color: '#718096',
  },
  statsCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#718096',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statsLabel: {
    fontSize: 14,
    color: '#2D3748',
  },
  statsValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
  },
});
