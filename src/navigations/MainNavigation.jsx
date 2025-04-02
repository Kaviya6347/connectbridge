// Importing navigation libraries and required screens
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importing screens
import BottomTab from "./BottomTab";
import Profile from "../screens/Profile";
import ViewDetails from "../screens/ViewDetails";
import CategoryList from "../screens/CategoryList";
import EditProfile from "../screens/EditProfile";

// Creating a stack navigator instance
const Stack = createStackNavigator();

/**
 * MainNavigation Component
 * Handles the stack navigation of the app, including the bottom tab and individual screens.
 */
const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomTab">
                <Stack.Screen
                    name="BottomTab"          // Route name
                    component={ BottomTab }     // Component to render
                    options={ { headerShown: false } } // Hides the header for a cleaner look
                />

                <Stack.Screen
                    name="Profile"          // Route name
                    component={ Profile }     // Component to render
                    options={ { headerShown: false } } // Hides the header for a cleaner look
                />

                <Stack.Screen
                    name="ViewDetails"          // Route name
                    component={ ViewDetails }     // Component to render
                    options={ { headerShown: false } } // Hides the header for a cleaner look
                />

                <Stack.Screen
                    name="CategoryList"          // Route name
                    component={ CategoryList }     // Component to render
                    options={ { headerShown: false } } // Hides the header for a cleaner look
                />

                <Stack.Screen
                    name="EditProfile"          // Route name
                    component={ EditProfile }     // Component to render
                    options={ { headerShown: false } } // Hides the header for a cleaner look
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation; // Exporting the MainNavigation component
