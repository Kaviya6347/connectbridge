// Importing necessary components from packages
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../global/colors";
import { fonts } from "../global/fonts";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

// AppHeader Component Definition
const AppHeader = ({
    headerBack = false,   // Boolean to determine if back button should be shown
    title = '',          // Title text to be displayed in the header
    dash = false,        // Boolean to conditionally show user greeting
    edit = false,        // Boolean to conditionally show 'Edit Profile' button
    onPress = () => { }   // Function to handle back button press
}) => {
    const navigation = useNavigation(); // Hook to navigate between screens
    const userDetails = useSelector(state => state?.reducer?.user); // Access user details from Redux store

    return (
        <View style={ styles.conatiner }>
            <View style={ { flexDirection: 'row' } }>
                { headerBack && (
                    <TouchableOpacity onPress={ onPress } activeOpacity={ 0.8 }>
                        <AntDesign name="arrowleft" size={ 30 } color={ colors.blackColor } />
                    </TouchableOpacity>
                ) }

                { title && <Text style={ styles.headerText }>{ title }</Text> }

                { dash && (
                    <Text style={ styles.headerText }>
                        Hi, { `${userDetails?.name}` }
                    </Text>
                ) }
            </View>

            { edit && (
                <TouchableOpacity
                    onPress={ () => navigation.navigate("EditProfile") } // Navigate to EditProfile screen
                    activeOpacity={ 0.9 }
                >
                    <Text style={ styles.nameUser }>Edit Profile</Text>
                </TouchableOpacity>
            ) }
        </View>
    );
};

export default AppHeader; // Export the component for use in other files

// Styles for the AppHeader component
const styles = StyleSheet.create({
    conatiner: {
        paddingVertical: 18,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.whiteColor,
    },
    headerText: {
        fontSize: 22,
        color: colors.blackColor,
        fontFamily: fonts.Medium,
        marginLeft: 15,
        textTransform: 'capitalize',
    },
    nameUser: {
        fontFamily: fonts.Regular,
        fontSize: 18,
        color: colors.redColor,
    },
});