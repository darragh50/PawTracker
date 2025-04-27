# PawTrack
A mobile application for tracking and managing your pets' health and activities.
# Project Description
PawTrack is a comprehensive pet management app that allows dog owners to:

# Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)


## Features
-Store and track information about their pets

-Manage medication schedules

-Track nutritional information

-Record veterinary visits


# Technologies Used
# Frontend:

Angular
Ionic Framework
TypeScript
RxJS
Capacitor


# Backend:

Firebase Authentication
Firestore Database
Firebase Hosting

# Prerequisites
Node.js and npm
Angular CLI
Ionic CLI
Git

# Getting Started
# 1. Clone the repository:

   ```bash
   git clone https://github.com/darragh50/PawTracker
   ```

# 2. Navigate to the project directory:

   ```bash
   cd PawTrackerNew
   ```
# 3. Install

   ```bash
   npm install
   ```
# 4. Set up Firebase:

Create a new project in Firebase

Enable Authentication with Email/Password

Set up Firestore Database

Copy your Firebase configuration to src/environments/environment.ts

# 5. Run the server

   ```bash
   ionic serve
   ```
# 6 Android 
Build the app
```bash
ionic build --prod
```

Add Android platform
```bash
npx cap add android
```

Copy web assets to the native project
```bash
npx cap copy android
```

Open in Android Studio
```bash
npx cap open android
```

# 7 IOS
Build the app
```bash
ionic build --prod
```

Add iOS platform
```bash
npx cap add ios
```

Copy web assets to the native project
```bash
npx cap copy ios
```

Open in Xcode
```bash
npx cap open ios
```
