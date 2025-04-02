// Importing necessary components from packages
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppHeader from "../components/AppHeader";
import { colors } from "../global/colors";
import { Avatar } from "react-native-elements";
import { fonts } from "../global/fonts";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../slice/userSlice";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
    const dispatch = useDispatch(); // Redux dispatch function to manage authentication state
    const userDetails = useSelector(state => state?.reducer?.user); // Get user details from Redux store
    const navigation = useNavigation(); // Navigation hook to handle screen transitions

    return (
        <SafeAreaView style={ styles.flex1 }>
            <AppHeader
                headerBack={ true }
                title="Profile"
                edit
                onPress={ () => {
                    navigation.navigate("BottomTab", { screen: "Dashboard" }); // Navigate to Dashboard screen
                } }
            />

            <View style={ { flex: 1, paddingHorizontal: 15, position: 'relative' } }>
                <View style={ { alignItems: 'center' } }>
                    <Avatar
                        source={ require('../assets/images/account.png') } // Placeholder profile image
                        size={ 200 } // Set avatar size
                    />
                    <Text style={ styles.titleText }>{ userDetails?.name }</Text>
                </View>

                <View style={ styles.commonSty }>
                    <Text style={ styles.nameText }>Email</Text>
                    <Text style={ styles.nameUser }>{ userDetails?.email }</Text>
                </View>

                <View style={ styles.commonSty }>
                    <Text style={ styles.nameText }>Mobile Number</Text>
                    <Text style={ styles.nameUser }>+91 { userDetails?.mobile_number }</Text>
                </View>

                <TouchableOpacity
                    onPress={ () => {
                        // Show confirmation alert before logging out
                        Alert.alert('Logout', 'Are you sure you want to exit?', [
                            {
                                text: 'Cancel', // Cancel button
                                onPress: () => { /* No action on cancel */ },
                                style: 'cancel',
                            },
                            {
                                text: 'OK', // Confirm logout
                                onPress: () => {
                                    dispatch(setIsLoggedIn(false)); // Update Redux state to log out the user
                                }
                            },
                        ]);
                    } }
                    activeOpacity={ 0.9 } // To give feedback on touch
                    style={ styles.logoutCon }
                >
                    <AntDesign
                        name="logout"
                        size={ 18 }
                        color={ colors.redColor }
                        style={ { marginTop: 7 } }
                    />
                    <Text style={ styles.logoutText }>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Profile;

// Styles for the Profile screen
const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        backgroundColor: colors.whiteColor
    },
    titleText: {
        fontFamily: fonts.Medium,
        fontSize: 23,
        color: colors.blackColor,
        paddingHorizontal: 30,
        textAlign: 'center',
        marginTop: 30,
    },
    nameText: {
        fontFamily: fonts.Semibold,
        fontSize: 16,
        color: colors.grayColor,
    },
    nameUser: {
        fontFamily: fonts.Regular,
        fontSize: 16,
        color: colors.blackColor,
    },
    logoutText: {
        fontFamily: fonts.Regular,
        fontSize: 22,
        color: colors.redColor,
        marginLeft: 10
    },
    commonSty: {
        paddingHorizontal: 30,
        marginTop: 30
    },
    logoutCon: {
        paddingHorizontal: 30,
        marginTop: 30,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 40
    }
});