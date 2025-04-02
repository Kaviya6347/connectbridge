// Importing necessary components from packages
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from "../global/colors";
import { fonts } from "../global/fonts";
import { useNavigation } from "@react-navigation/native";

/**
 * ViewMore Component
 * Displays a title with a "View More" option that navigates to a category list screen when clicked.
 * 
 * @param {string} title - The title to display for the category.
 * @param {number} category_id - The ID of the category to navigate to.
 */
const ViewMore = ({ title, category_id }) => {
    const navigation = useNavigation(); // Hook to access navigation methods

    return (
        <TouchableOpacity
            onPress={ () => {
                // Navigating to the "CategoryList" screen with the provided category ID
                navigation.navigate("CategoryList", {
                    category_id: category_id
                });
            } }
            activeOpacity={ 0.9 } // Reduces opacity on press for feedback
            style={ styles.recentCon } // Styles for the container
        >
            <Text style={ styles.recentText }>{ title }</Text>

            <View style={ { flexDirection: 'row' } }>
                <Text style={ styles.viewMoreText }>View More</Text>
                <AntDesign
                    name='arrowright' // Right arrow icon
                    color={ colors.primaryColor } // Color from global styles
                    size={ 20 } // Icon size
                />
            </View>
        </TouchableOpacity>
    );
};

export default ViewMore; // Exporting the component for use in other parts of the app

// Stylesheet for the ViewMore component
const styles = StyleSheet.create({
    recentCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    recentText: {
        fontFamily: fonts.Semibold,
        color: colors.blackColor,
        fontSize: 20,
    },
    viewMoreText: {
        fontFamily: fonts.Regular,
        fontSize: 13,
        color: colors.primaryColor,
        marginRight: 5
    }
})