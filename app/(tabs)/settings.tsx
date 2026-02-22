import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function SettingsScreen() {
  const [questReminders, setQuestReminders] = useState(true);
  const [completionAlerts, setCompletionAlerts] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ACCOUNT</Text>
        
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Your Name:</Text>
          <Text style={styles.infoValue}>Sarah Smith</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>sarah@email.com</Text>
        </View>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Edit Profile</Text>
          <Ionicons name="chevron-forward" size={20} color="#718096" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Change Password</Text>
          <Ionicons name="chevron-forward" size={20} color="#718096" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <View style={styles.subscriptionRow}>
            <Text style={styles.settingButtonText}>Subscription:</Text>
            <Text style={styles.subscriptionBadge}>Free</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#718096" />
        </TouchableOpacity>
      </View>

      {/* Family Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAMILY</Text>
        
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Manage Family Members</Text>
          <Ionicons name="chevron-forward" size={20} color="#718096" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Invite Co-Parent</Text>
          <Ionicons name="chevron-forward" size={20} color="#718096" />
        </TouchableOpacity>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>NOTIFICATIONS</Text>
        
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Quest Reminders</Text>
          <Switch
            value={questReminders}
            onValueChange={setQuestReminders}
            trackColor={{ false: '#E2E8F0', true: '#6C63FF' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Completion Alerts</Text>
          <Switch
            value={completionAlerts}
            onValueChange={setCompletionAlerts}
            trackColor={{ false: '#E2E8F0', true: '#6C63FF' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Weekly Summary</Text>
          <Switch
            value={weeklySummary}
            onValueChange={setWeeklySummary}
            trackColor={{ false: '#E2E8F0', true: '#6C63FF' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Push Notifications</Text>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: '#E2E8F0', true: '#6C63FF' }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SUPPORT</Text>
        
        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Help & FAQs</Text>
          <Ionicons name="chevron-forward" size={20} color="#718096" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Contact Support</Text>
          <Ionicons name="chevron-forward" size={20} color="#718096" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={20} color="#718096" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Terms of Service</Text>
          <Ionicons name="chevron-forward" size={20} color="#718096" />
        </TouchableOpacity>
      </View>

      <View style={styles.version}>
        <Text style={styles.versionText}>App Version: 1.0.0</Text>
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
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: '#2D3748',
    fontWeight: '600',
  },
  settingButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  settingButtonText: {
    fontSize: 14,
    color: '#2D3748',
  },
  subscriptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subscriptionBadge: {
    fontSize: 12,
    color: '#718096',
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  toggleRow: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  toggleLabel: {
    fontSize: 14,
    color: '#2D3748',
  },
  version: {
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  versionText: {
    fontSize: 12,
    color: '#718096',
  },
});
