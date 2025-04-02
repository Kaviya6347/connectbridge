// Importing necessary components from packages
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../global/colors";
import { fonts } from "../global/fonts";

// CustomButton Component Definition
const CustomButton = ({
    title,               // Text to display on the button
    customStyle,         // Optional custom styles passed from the parent component
    loading,             // Boolean to control loading state (shows spinner when true)
    onPress = () => { },  // Function to handle button press (default is an empty function)
    disabled = false     // Boolean to disable the button (default is false)
}) => {
    return (
        <TouchableOpacity
            onPress={ onPress }              // Trigger the onPress function when button is clicked
            disabled={ loading || disabled } // Disable the button if loading is true or disabled is true
            style={ [
                customStyle,              // Apply custom styles if provided
                styles.buttonContainer,   // Default button container styles
                {
                    backgroundColor: loading ? colors.grayColor : colors.primaryColor // Dynamic background color
                }
            ] }
            activeOpacity={ 0.8 }           // Controls the opacity when button is pressed
        >
            { loading ? (
                // Show ActivityIndicator (spinner) when loading is true
                <ActivityIndicator
                    size={ 'small' }          // Small spinner size
                    style={ styles.actIndicator }
                    color={ colors.whiteColor } // White spinner color
                />
            ) : (
                // Display the button title when not loading
                <Text style={ styles.buttonText }>{ title ? title : '' }</Text>
            ) }
        </TouchableOpacity>
    );
};

export default CustomButton; // Export the component for use in other files

// Styles for the CustomButton component
const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: fonts.Semibold,
    },
    actIndicator: {
        marginVertical: 4,
    }
})