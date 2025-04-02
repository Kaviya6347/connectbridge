// Importing necessary components from packages
import { Dimensions, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../slice/userSlice";
import { useState } from "react";
import { fonts } from "../global/fonts";

// Get screen dimensions for responsive design
const { height, width } = Dimensions.get("screen");

const Login = () => {
    const dispatch = useDispatch(); // Redux dispatch function to update user state
    const [loading, setLoading] = useState(false); // Tracks the loading state when logging in

    // Formik hook to manage form state, validation, and submission
    const formik = useFormik({
        initialValues: {
            email: '', // Initial value for email input
            password: '' // Initial value for password input
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Enter valid email") // Validates email format
                .required("Email is required"), // Makes email a required field
            password: Yup.string()
                .min(6, "Password must be at least 6 characters") // Password must be at least 6 characters long
                .required("Password is required"), // Makes password a required field
        }),
        onSubmit: (values) => {
            setLoading(true); // Show loading indicator when form is submitted

            // Simulate an API call (replace with actual authentication logic)
            setTimeout(() => {
                dispatch(setIsLoggedIn(true)); // Update Redux state to reflect logged-in status
                setLoading(false); // Hide loading indicator after submission
            }, 500); // Simulated delay of 500ms
        }
    });

    return (
        <SafeAreaView style={ styles.container }>
            <KeyboardAvoidingView style={ styles.flex1 }>
                <ScrollView showsVerticalScrollIndicator={ false } style={ styles.flex1 }>
                    <Image
                        source={ require("../assets/images/logo.png") }
                        resizeMode="contain"
                        style={ styles.logo }
                    />

                    <View style={ styles.secondFlex }>
                        <Text style={ styles.loginText }>Login</Text>

                        <CustomInput
                            placeholder="Enter your email"
                            value={ formik.values.email }
                            onChangeText={ (text) => {
                                formik.setFieldValue("email", text); // Update Formik state with new email
                            } }
                            customStyle={ { marginTop: 25 } }
                            errorText={ formik.errors.email } // Display validation error for email
                        />

                        <CustomInput
                            placeholder="Enter your password"
                            value={ formik.values.password }
                            onChangeText={ (text) => {
                                formik.setFieldValue("password", text); // Update Formik state with new password
                            } }
                            customStyle={ { marginTop: 10 } }
                            secureTextEntry={ true } // Hide password characters
                            errorText={ formik.errors.password } // Display validation error for password
                        />

                        <CustomButton
                            title="Login"
                            onPress={ () => {
                                formik.handleSubmit(); // Trigger form submission
                            } }
                            loading={ loading } // Show loading spinner when true
                            disabled={ loading || !formik.dirty } // Disable button when loading or form is not modified
                            customStyle={ { marginVertical: 35 } }
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Login;

// Styles for the Login screen
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    flex1: {
        flex: 1
    },
    secondFlex: {
        marginTop: 50,
        marginHorizontal: 30
    },
    loginText: {
        color: '#000',
        fontSize: 30,
        fontFamily: fonts.Semibold,
    },
    logo: {
        width: width * 0.6,
        height: height * 0.45,
        alignSelf: 'center'
    }
})