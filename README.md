# Family Quests 🏰

**Turn chores & homeschool into epic adventures**

A gamified homeschool tracker and task manager that makes learning fun for kids and organization simple for parents.

---

## 📱 About

Family Quests is a React Native mobile app (iOS + Android) designed to help homeschool families:
- Track attendance and learning activities
- Gamify chores and educational tasks
- Build portfolios with photo evidence
- Motivate kids with XP, levels, and rewards
- Stay compliant with state requirements

---

## ✨ Features

### For Parents
- **Quest Management** - Create, assign, and track tasks for each child
- **Progress Dashboard** - See family-wide completion rates and XP
- **Photo Proof** - Review work samples submitted by kids
- **Recurring Quests** - Set up daily/weekly tasks automatically
- **Reward Store** - Create custom rewards kids can redeem with XP
- **Family Leaderboard** - Track each child's progress and achievements

### For Kids
- **Adventure Board** - See quests as exciting missions, not boring tasks
- **XP & Levels** - Earn experience points and level up
- **Achievements** - Unlock badges for completing milestones
- **Rewards** - Redeem XP for parent-approved treats
- **Photo Upload** - Submit proof of completed work

---

## 🛠 Tech Stack

- **Framework:** React Native (Expo SDK 50+)
- **Language:** TypeScript (strict mode)
- **Navigation:** Expo Router
- **Styling:** NativeWind (Tailwind CSS for React Native)
- **State Management:** Zustand
- **Backend:** Supabase (auth, database, storage)
- **Payments:** RevenueCat
- **Builds:** EAS Build

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mmcmedia/family-quests-app.git
   cd family-quests-app
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   REVENUECAT_API_KEY=your_revenuecat_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on physical device

---

## 📦 Build & Deploy

### Development Build
```bash
eas build --profile development --platform ios
eas build --profile development --platform android
```

### Production Build
```bash
eas build --profile production --platform ios
eas build --profile production --platform android
```

### Submit to App Stores
```bash
eas submit --platform ios
eas submit --platform android
```

---

## 🏗 Project Structure

```
family-quests-app/
├── app/                    # Expo Router screens
│   ├── (auth)/            # Authentication flow
│   ├── (tabs)/            # Main tab navigation
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Welcome screen
├── components/            # Reusable components
├── stores/                # Zustand state stores
├── lib/                   # Supabase & other configs
├── utils/                 # Helper functions
├── assets/                # Images, fonts, icons
└── tailwind.config.js     # NativeWind configuration
```

---

## 🎨 Design System

### Colors
- **Quest Purple:** `#6C63FF` (Primary CTAs, highlights)
- **Family Teal:** `#4ECDC4` (Completed tasks, success)
- **Sunshine Yellow:** `#FFE66D` (XP, rewards, achievements)
- **Charcoal:** `#2D3748` (Primary text)
- **Snow:** `#F7FAFC` (Page backgrounds)

### Typography
- **Display:** Fredoka One (playful, quest titles)
- **Body:** System default (SF Pro/Roboto)

---

## 🗺 Roadmap

### MVP (v1.0) ✅
- [x] Onboarding flow
- [x] Parent & child dashboards
- [x] Quest creation & management
- [x] Basic gamification (XP, levels)
- [x] Family leaderboard

### v1.1 (Planned)
- [ ] Supabase authentication
- [ ] Photo upload & review
- [ ] Recurring quests
- [ ] Push notifications
- [ ] Offline mode

### v1.2 (Planned)
- [ ] RevenueCat subscription
- [ ] Advanced analytics
- [ ] Custom achievements
- [ ] Co-parent collaboration

### v2.0 (Future)
- [ ] AI-powered curriculum suggestions
- [ ] State compliance reports (PDF export)
- [ ] Third-party curriculum integrations

---

## 🧪 Testing

```bash
# Run TypeScript type check
npm run tsc

# Run tests (when implemented)
npm test

# Lint code
npm run lint
```

---

## 📄 License

Copyright © 2026 MMC Media. All rights reserved.

---

## 🙏 Acknowledgments

- **Design:** Based on comprehensive UI/UX spec from Pixel Agent
- **Discovery:** SCOUT Agent market research
- **Development:** DEV Agent @ MMC App Factory

---

## 📞 Support

For questions or issues:
- **Email:** support@mmcmedia.com
- **Card ID:** swarm-app-factory-1771735287
- **Status:** ✅ Development Complete

---

**Built with ❤️ by MMC App Factory**
