// Importing necessary components from packages
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppHeader from "../components/AppHeader";
import { colors } from "../global/colors";
import { Avatar } from "react-native-elements";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../slice/userSlice";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
    const [loading, setLoading] = useState(false); // State to control loading indicator
    const userDetails = useSelector(state => state?.reducer?.user); // Get user details from Redux store
    const dispatch = useDispatch(); // Dispatch function to update Redux state
    const navigation = useNavigation(); // Navigation for going back or forward between screens

    // Formik hook to handle form state and validation
    const formik = useFormik({
        initialValues: {
            name: userDetails?.name ? userDetails?.name : '', // Pre-fill name if available
            email: userDetails?.email ? userDetails?.email : '', // Pre-fill email if available
            mobile_number: userDetails?.mobile_number ? userDetails?.mobile_number : '', // Pre-fill mobile number if available
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(3, "Name must be at least 3 letters") // Validation for name
                .required("Name is required"), // Required field
            mobile_number: Yup.string()
                .matches(/^\d{10}$/, 'Mobile number must be 10 digits') // Regex for 10-digit mobile number
                .required('Mobile number is required'), // Required field
            email: Yup.string()
                .email("Enter a valid email") // Check if the email format is correct
                .required("Email is required"), // Required field
        }),
        onSubmit: (values) => {
            const userData = {
                name: values?.name,
                email: values?.email,
                mobile_number: values?.mobile_number,
            };
            setLoading(true); // Set loading state to true when submitting

            // Simulate a delay for the submission process
            setTimeout(() => {
                setLoading(true); // Keep loading true (could be improved by setting it to false after dispatch)
                dispatch(setUser(userData)); // Update user data in Redux store
                navigation.goBack(); // Go back to the previous screen after update
            }, 500); // Simulated delay of 500ms
        }
    });

    return (
        <SafeAreaView style={ styles.flex1 }>
            <AppHeader
                headerBack={ true }
                title="Edit Profile"
                onPress={ () => {
                    navigation.navigate("Profile"); // Navigate to Profile screen on back button press
                } }
            />

            <View style={ { flex: 1, paddingHorizontal: 15, position: 'relative' } }>
                <View style={ { alignItems: 'center' } }>
                    <Avatar
                        source={ require('../assets/images/account.png') }
                        size={ 200 }
                    />
                </View>

                <View style={ { paddingHorizontal: 30 } }>
                    <CustomInput
                        placeholder="Enter your name"
                        value={ formik.values.name }
                        onChangeText={ (text) => {
                            formik.setFieldValue("name", text); // Update Formik state on input change
                        } }
                        customStyle={ { marginTop: 25 } }
                        errorText={ formik.errors.name } // Display error if validation fails
                    />

                    <CustomInput
                        placeholder="Enter your email"
                        value={ formik.values.email }
                        onChangeText={ (text) => {
                            formik.setFieldValue("email", text);
                        } }
                        customStyle={ {
                            marginTop: 15
                        } }
                        errorText={ formik.errors.email }
                    />

                    <CustomInput
                        placeholder="Enter your mobile number"
                        value={ formik.values.mobile_number }
                        onChangeText={ (text) => {
                            formik.setFieldValue("mobile_number", text);
                        } }
                        customStyle={ {
                            marginTop: 15
                        } }
                        keyboardType="numeric" // Numeric keyboard for mobile number
                        errorText={ formik.errors.mobile_number }
                    />

                    <View style={ { top: 50 } }>
                        <CustomButton
                            title="Update"
                            onPress={ () => {
                                formik.handleSubmit(); // Trigger form submission
                            } }
                            loading={ loading } // Show loading spinner when true
                            disabled={ loading } // Disable button when loading or form is not dirty
                            customStyle={ {
                                marginVertical: 35,
                            } }
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EditProfile;

// Styles for the EditProfile screen
const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        backgroundColor: colors.whiteColor
    },
});