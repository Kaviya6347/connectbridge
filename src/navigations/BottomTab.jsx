// Importing required components from React Navigation and React Native
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, TouchableOpacity } from "react-native";

// Importing colors for consistent theming
import { colors } from "../global/colors";

// Importing screens
import Dashboard from "../screens/Dashboard";
import Profile from "../screens/Profile";
import Categories from "../screens/Categories";
import { useNavigation } from "@react-navigation/native";

// Creating a bottom tab navigator instance
const Tab = createBottomTabNavigator();

/**
 * BottomTab Component
 * Defines the tab-based navigation for the app with Dashboard, Categories, and Profile tabs.
 */
const BottomTab = () => {
    const navigation = useNavigation();

    return (
        <Tab.Navigator initialRouteName="Dashboard">

            <Tab.Screen
                name="Dashboard"
                component={ Dashboard } // Renders the Dashboard screen
                options={ {
                    headerShown: false, // Hides the default header
                    tabBarShowLabel: false, // Hides the tab label for cleaner UI
                    tabBarActiveTintColor: colors.blackColor, // Color when tab is active
                    tabBarInactiveTintColor: colors.grayColor, // Color when tab is inactive
                    tabBarStyle: styles.tabBarStyle, // Custom style for the tab bar
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity
                            activeOpacity={ 1 }
                            onPress={ () => {
                                navigation.navigate("BottomTab", {
                                    screen: "Dashboard"
                                })
                            } }
                        >
                            <Octicons
                                name="home"
                                size={ 28 }
                                color={ focused ? colors.blackColor : colors.grayColor }
                            />
                        </TouchableOpacity>
                    ), // Custom icon for the tab
                } }
            />

            <Tab.Screen
                name="Categories"
                component={ Categories }
                options={ {
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.blackColor,
                    tabBarInactiveTintColor: colors.grayColor,
                    tabBarStyle: styles.tabBarStyle,
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity
                            activeOpacity={ 1 }
                            onPress={ () => {
                                navigation.navigate("BottomTab", {
                                    screen: "Categories"
                                })
                            } }
                        >
                            <MaterialCommunityIcons
                                name="view-dashboard-outline"
                                size={ 28 }
                                color={ focused ? colors.blackColor : colors.grayColor }
                            />
                        </TouchableOpacity>
                    ),
                } }
            />

            <Tab.Screen
                name="Profile"
                component={ Profile }
                options={ {
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.blackColor,
                    tabBarInactiveTintColor: colors.grayColor,
                    tabBarStyle: styles.tabBarStyle,
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity
                            activeOpacity={ 1 }
                            onPress={ () => {
                                navigation.navigate("BottomTab", {
                                    screen: "Profile"
                                })
                            } }
                        >
                            <MaterialCommunityIcons
                                name="account-circle-outline"
                                size={ 29 }
                                color={ focused ? colors.blackColor : colors.grayColor }
                            />
                        </TouchableOpacity>
                    ),
                } }
            />
        </Tab.Navigator>
    );
};

export default BottomTab; // Exporting the BottomTab component

// Styling for the bottom tab bar
const styles = StyleSheet.create({
    tabBarStyle: {
        height: 60,
        paddingTop: 10,
        padding: 3
    }
})