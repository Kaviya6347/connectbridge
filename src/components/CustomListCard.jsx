// Importing necessary components from packages
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";
import { fonts } from "../global/fonts";
import { colors } from "../global/colors";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useNavigation } from "@react-navigation/native";

// CustomListCard Component
const CustomListCard = ({ item }) => {
    const navigation = useNavigation(); // Hook to handle navigation

    return (
        <TouchableOpacity
            onPress={ () => {
                // Navigates to the "ViewDetails" screen with the product ID
                navigation.navigate("ViewDetails", {
                    product_id: item?.id
                });
            } }
            activeOpacity={ 0.9 } // Adjusts the button's opacity when pressed
            style={ styles.listContainer } // Apply container styles
        >
            <Avatar
                source={ { uri: item?.image } } // Fetching image from the provided URI
                size="large"                  // Setting the avatar size
                avatarStyle={ { resizeMode: 'contain' } } // Ensures the image fits well within the avatar
            />

            <View style={ styles.listContent }>
                {/* Product title */ }
                <Text style={ styles.titleText }>{ item?.title }</Text>

                <StarRatingDisplay
                    rating={ Number(item?.rating?.rate) } // Rating converted to a number
                    starSize={ 18 }                      // Size of the stars
                />

                <Text style={ styles.ratingText }>
                    Price: <Text>{ item?.price }</Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomListCard; // Exporting the component for use in other files

// Styles for the CustomListCard component
const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
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
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    titleText: {
        fontFamily: fonts.Medium,
        fontSize: 15,
        color: colors.blackColor,
    },
    descriptionText: {
        fontFamily: fonts.Regular,
        fontSize: 12,
        color: colors.blackColor,
        marginTop: 5,
    },
    listContent: {
        marginLeft: 15,
        width: '75%',
        paddingRight: 9
    },
    ratingText: {
        fontFamily: fonts.Bold,
        fontSize: 15,
        color: colors.blackColor,
        marginTop: 8
    }
})