import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Mock data
const QUESTS_TODAY = [
  {
    id: 1,
    title: 'Math Worksheet',
    assignedTo: 'Emma, Age 10',
    dueTime: 'Due 2pm',
    status: 'not_started',
    statusColor: '#F56565',
  },
  {
    id: 2,
    title: 'Feed the Dog',
    assignedTo: 'Noah, Age 7',
    dueTime: 'Due 6pm',
    status: 'in_progress',
    statusColor: '#ED8936',
  },
];

const QUESTS_COMPLETED = [
  {
    id: 3,
    title: 'Reading Time',
    assignedTo: 'Emma, Age 10',
    xp: 50,
  },
];

export default function ParentDashboard() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning, Sarah! ☀️</Text>
          <Text style={styles.date}>Feb 22, 2026</Text>
        </View>
      </View>

      {/* Progress Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Family Quest Board</Text>
        
        <View style={styles.progressSection}>
          <Text style={styles.progressLabel}>📊 Today's Progress</Text>
          <View style={styles.progressBar}>
            <LinearGradient
              colors={['#6C63FF', '#4ECDC4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressFill, { width: '70%' }]}
            />
          </View>
          <Text style={styles.progressText}>7/10 complete</Text>
        </View>

        <View style={styles.xpSection}>
          <Text style={styles.xpLabel}>🏆 Family XP: 3,240</Text>
          <Text style={styles.xpSubtext}>(Level 8 — Silver Shield)</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.quickActions}
        contentContainerStyle={styles.quickActionsContent}
      >
        <TouchableOpacity style={styles.quickActionButton}>
          <Ionicons name="add-circle-outline" size={24} color="#6C63FF" />
          <Text style={styles.quickActionText}>New Quest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickActionButton}>
          <Ionicons name="calendar-outline" size={24} color="#6C63FF" />
          <Text style={styles.quickActionText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickActionButton}>
          <Ionicons name="gift-outline" size={24} color="#6C63FF" />
          <Text style={styles.quickActionText}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickActionButton}>
          <Ionicons name="people-outline" size={24} color="#6C63FF" />
          <Text style={styles.quickActionText}>Family</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Today - Urgent */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TODAY — URGENT ⚠️</Text>
        
        {QUESTS_TODAY.map((quest) => (
          <TouchableOpacity key={quest.id} style={styles.questCard}>
            <View style={[styles.questStatus, { backgroundColor: quest.statusColor }]} />
            <View style={styles.questContent}>
              <Text style={styles.questTitle}>{quest.title}</Text>
              <Text style={styles.questMeta}>
                {quest.assignedTo} • {quest.dueTime}
              </Text>
              <Text style={styles.questStatusText}>
                Status: {quest.status === 'not_started' ? 'Not Started' : 'In Progress'}
              </Text>
              <View style={styles.questActions}>
                <TouchableOpacity style={styles.questActionButton}>
                  <Text style={styles.questActionText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.questActionButton}>
                  <Text style={styles.questActionText}>Remind</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Today - Completed */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TODAY — ON TRACK ✅</Text>
        
        {QUESTS_COMPLETED.map((quest) => (
          <View key={quest.id} style={[styles.questCard, styles.questCardCompleted]}>
            <View style={[styles.questStatus, { backgroundColor: '#48BB78' }]} />
            <View style={styles.questContent}>
              <Text style={styles.questTitle}>✅ {quest.title}</Text>
              <Text style={styles.questMeta}>{quest.assignedTo} • Completed!</Text>
              <Text style={styles.questXp}>+{quest.xp} XP earned</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={28} color="#FFFFFF" />
      </TouchableOpacity>
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
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3748',
  },
  date: {
    fontSize: 14,
    color: '#718096',
    marginTop: 4,
  },
  card: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 16,
  },
  progressSection: {
    marginBottom: 16,
  },
  progressLabel: {
    fontSize: 14,
    color: '#2D3748',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 9999,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
  },
  progressText: {
    fontSize: 12,
    color: '#718096',
  },
  xpSection: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  xpLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
  },
  xpSubtext: {
    fontSize: 12,
    color: '#718096',
    marginTop: 4,
  },
  quickActions: {
    marginBottom: 8,
  },
  quickActionsContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  quickActionButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    minWidth: 100,
  },
  quickActionText: {
    fontSize: 12,
    color: '#2D3748',
    marginTop: 4,
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
  questCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    overflow: 'hidden',
  },
  questCardCompleted: {
    opacity: 0.8,
  },
  questStatus: {
    width: 4,
  },
  questContent: {
    flex: 1,
    padding: 16,
  },
  questTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  questMeta: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 4,
  },
  questStatusText: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 8,
  },
  questXp: {
    fontSize: 14,
    color: '#FFE66D',
    fontWeight: '600',
  },
  questActions: {
    flexDirection: 'row',
    gap: 8,
  },
  questActionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  questActionText: {
    fontSize: 12,
    color: '#6C63FF',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
});
