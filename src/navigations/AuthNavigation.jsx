// Importing necessary components from React Navigation
import { NavigationContainer } from "@react-navigation/native"; // Wraps the navigation structure
import { createStackNavigator } from "@react-navigation/stack";  // Creates a stack-based navigation

// Importing the Login screen
import Login from "../screens/Login";

// Creating a Stack Navigator instance
const Stack = createStackNavigator();

/**
 * AuthNavigation Component
 * Manages the authentication flow of the app using a stack navigator.
 * Currently, it only includes the Login screen.
 */
const AuthNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login" // Sets Login as the default screen when the app starts
            >
                <Stack.Screen
                    name="Login"
                    component={ Login }
                    options={ { headerShown: false } }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthNavigation; // Exporting the component for use in other parts of the app