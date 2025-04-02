import { StyleSheet, Text, TextInput } from "react-native";
import { colors } from "../global/colors";
import { fonts } from "../global/fonts";

/**
 * A customizable input component with error handling.
 * 
 * @param {string} placeholder - Placeholder text for the input.
 * @param {string} value - Current value of the input.
 * @param {function} onChangeText - Callback when text changes.
 * @param {object} customStyle - Additional styles to override default input styling.
 * @param {boolean} secureTextEntry - If `true`, masks input (e.g., for passwords).
 * @param {string} errorText - Error message to display below the input (if provided).
 * @param {string} keyboardType - Keyboard type (e.g., 'numeric', 'email-address').
 */

const CustomInput = ({
    placeholder = "",
    value = "",
    onChangeText = () => { },
    customStyle = {},
    secureTextEntry = false,
    errorText = '',
    keyboardType = ''
}) => {
    return (
        <>
            <TextInput
                style={ [customStyle, styles.textInput] }
                placeholder={ placeholder }
                value={ value }
                onChangeText={ (text) => onChangeText(text) }
                secureTextEntry={ secureTextEntry }
                keyboardType={ keyboardType }
            />

            { errorText && <Text style={ styles.errorText }>{ errorText }</Text> }
        </>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: colors.primaryColor,
        borderRadius: 30,
        paddingHorizontal: 30,
        fontSize: 17,
        fontFamily: fonts.Medium,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginTop: 5,
        marginLeft: 15,
        fontFamily: fonts.Medium,
    }
})