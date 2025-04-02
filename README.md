
## Product Go - Documentation
Overview

Product Go is a mobile application that displays various products available for purchase along with their prices. This project is designed to showcase products in an organized manner, allowing users to checkout about products.

## Features

Product Display: Shows products with images, names, and prices

Categories: Products organized into different categories

Responsive Design: Works on mobile devices

## Product Cards: 
Each product is displayed in a visually appealing card with:

High-quality image

Product name

Price (with currency formatting)

Rating stars (if reviews are available)

## Product Details Page
Expanded Product View:

High-res images

Detailed description & specifications

## User Accounts
Sign Up / Login:

Email + password

## Technical Stack
Frontend: React.js, Next.js (if used), Tailwind CSS / SASS

State Management: Redux / Context API

Deployment: GitHub Pages

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


## Project Structure

ProductViewApp/
├── android/                      # Android native code
├── ios/                          # iOS native code
├── node_modules/                 # Installed dependencies
├── src/                         
│   ├── assets/                   # Images, fonts
│   │   ├── fonts/
│   │   └── images/
│   ├── components/               # Reusable UI components
│   │   ├── AppHeader.jsx
│   │   ├── CustomButton.jsx
│   │   ├── CustomInput.jsx
│   │   ├── CustomListCard.jsx
│   │   ├── DashboardCard.jsx
│   │   ├── skeletonLoaders.jsx
│   │   └── ViewMore.jsx
│   ├── global/                   # Global files to access fonts and colors
│   │   ├── colors.js
│   │   └── fonts.js
│   ├── navigations/              # Navigation components
│   │   ├── AuthNavigation.jsx
│   │   ├── BottomTab.jsx
│   │   ├── MainNavigation.jsx
│   │   └── RouterWrapper.jsx
│   ├── screens/                  # Application screens
│   │   ├── Categories.jsx
│   │   ├── CategoryList.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EditProfile.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   └── ViewDetails.jsx
│   ├── slice/                    # API calls and business logic
│   │   ├── API.js
│   │   ├── Environment.js         
│   │   └── userSlice.js
│   ├── store/                    # Store for reducer persisting 
│   │   └── store.js
│   └── utils/                    # Utility functions
├── App.js                        # Entry point of the app
├── package.json                  # Project dependencies
├── .babelrc                      # Babel configuration
├── .gitignore                    # Git ignore file
└── README.md                     # Project documentation

assets/: Store static files like images, icons, fonts, etc.
components/: Reusable UI components (e.g., custombutton for displaying the same button for overall screens).

screens/: Screens for different views (e.g., Dashboard).

slice/: Handles API calls and business logic and aslo for slices (e.g., fetching product data).

navigations/: Manages app navigation using React Navigation.

global/: Defines app-wide constants like colors, font sizes, etc.

store/: Used for creating the Async storage for reducers.

utils/: Utility functions, such as formatting prices or dates.
