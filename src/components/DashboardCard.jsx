// Importing necessary components from packages
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";
import { colors } from "../global/colors";
import { fonts } from "../global/fonts";
import { useNavigation } from "@react-navigation/native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

// Getting screen dimensions for responsive design
const { width, height } = Dimensions.get('screen');

// DashboardCard Component
const DashboardCard = ({ item }) => {
    const navigation = useNavigation(); // Hook to handle navigation

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 } // Adjusts the opacity when pressed
            style={ styles.container } // Apply container styles
            onPress={ () => {
                // Navigate to the "ViewDetails" screen with the product ID
                navigation.navigate("ViewDetails", {
                    product_id: item?.id
                });
            } }
        >
            <Avatar
                source={ { uri: item?.image } } // Fetching image from the provided URI
                size={ 120 }                    // Setting the avatar size
                avatarStyle={ { resizeMode: 'contain' } } // Ensures the image fits well within the avatar
            />

            <View>
                <Text numberOfLines={ 2 } style={ styles.titleText }>
                    { item?.title }
                </Text>

                <StarRatingDisplay
                    starSize={ 23 }                         // Size of the stars
                    style={ { marginTop: 15 } }             // Top margin for spacing
                    rating={ Number(item?.rating?.rate) }  // Rating converted to a number
                />

                <Text style={ styles.ratingText }>
                    Price: <Text> ₹{ item?.price }</Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default DashboardCard; // Exporting the component for use in other files

// Styles for the DashboardCard component
const styles = StyleSheet.create({
    container: {
        width: width * 0.5,
        marginRight: 10,
        borderColor: colors.whiteColor,
        backgroundColor: colors.whiteColor,
        borderWidth: 1,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center'
    },
    titleText: {
        fontFamily: fonts.Semibold,
        fontSize: 15,
        color: colors.blackColor,
        marginTop: 8,
    },
    ratingText: {
        fontFamily: fonts.Bold,
        fontSize: 15,
        color: colors.blackColor,
        marginTop: 10
    }
}) 