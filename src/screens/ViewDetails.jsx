// Importing necessary components from packages
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { API } from "../slice/API";
import AppHeader from "../components/AppHeader";
import { Avatar } from "react-native-elements";
import { fonts } from "../global/fonts";
import { colors } from "../global/colors";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { ViewDetailsSkeleton } from "../components/skeletonLoaders";

const ViewDetails = () => {
    const { product_id } = useRoute()?.params; // Get the product ID from route params
    const [details, setDetails] = useState(''); // State to hold product details
    const [loading, setLoading] = useState(false); // Loading state for API requests
    const [isRefreshing, setIsRefreshing] = useState(false); // Refreshing state for pull-to-refresh
    const navigation = useNavigation();

    // Fetch product details when the component mounts
    useEffect(() => {
        setLoading(true);
        getProductDetails();
    }, []);

    // Function to fetch product details from the API
    const getProductDetails = async () => {
        try {
            const response = await API('get', `/products/${product_id}`); // API call
            if (response?.status === 200) {
                setDetails(response?.data); // Set product data in the state
                setLoading(false); // Stop loading after data is fetched
            }
        } catch (err) {
            console.log("Error", err); // Log any errors
            setLoading(false); // Stop loading even if there's an error
        }
    };

    // Function to handle pull-to-refresh
    const onRefreshing = () => {
        setIsRefreshing(true);
        setLoading(true);
        getProductDetails(); // Fetch fresh data

        // Stop refreshing after 300ms
        setTimeout(() => {
            setIsRefreshing(false);
            setLoading(false);
        }, 300);
    };

    return (
        <SafeAreaView style={ styles.flex1 }>
            <AppHeader headerBack title="Product Details"
                onPress={ () => {
                    navigation.goBack()
                } } />

            { loading ? (
                <ViewDetailsSkeleton />
            ) : (
                <ScrollView
                    contentContainerStyle={ {
                        flexGrow: 1,
                        backgroundColor: colors.whiteColor,
                        paddingBottom: 50,
                    } }
                    refreshControl={
                        <RefreshControl
                            refreshing={ isRefreshing }
                            onRefresh={ onRefreshing } // Trigger refresh when pulled
                            colors={ [colors.primaryColor] } // Refresh control color
                        />
                    }
                    showsVerticalScrollIndicator={ false }
                >
                    <View>
                        <View style={ { alignItems: 'center' } }>
                            <Avatar
                                source={ { uri: details?.image } } // Product image from API
                                size={ 250 }
                                avatarStyle={ { resizeMode: 'contain' } }
                            />
                            <Text style={ styles.titleText }>{ details?.title }</Text>
                        </View>

                        <View style={ styles.detailCon }>
                            <View style={ { flexDirection: 'row', justifyContent: 'space-between' } }>
                                <Text style={ styles.priceText }>₹{ details?.price }</Text>
                                <StarRatingDisplay rating={ Number(details?.rating?.rate) } />
                            </View>

                            <View style={ { flexDirection: 'row', width: '100%', marginTop: 20 } }>
                                <Text style={ styles.title }>Ratings</Text>
                                <Text style={ styles.body }>: { details?.rating?.rate } ratings</Text>
                            </View>

                            <View style={ { flexDirection: 'row', width: '100%' } }>
                                <Text style={ styles.title }>Rate Reviews</Text>
                                <Text style={ styles.body }>: { details?.rating?.count } reviews</Text>
                            </View>

                            <View style={ { flexDirection: 'row', width: '100%' } }>
                                <Text style={ styles.title }>Category</Text>
                                <Text style={ [styles.body, { textTransform: 'capitalize' }] }>
                                    : { details?.category }
                                </Text>
                            </View>

                            <View style={ { marginTop: 30 } }>
                                <Text style={ styles.title }>Description</Text>
                                <Text style={ styles.body }>{ details?.description }</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            ) }
        </SafeAreaView>
    );
};

export default ViewDetails;

// Styles for the ViewDetails screen
const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        backgroundColor: colors.whiteColor
    },
    styles: {
        flex: 1
    },
    titleText: {
        fontFamily: fonts.Medium,
        fontSize: 18,
        color: colors.blackColor,
        paddingHorizontal: 30,
        textAlign: 'center',
        marginTop: 30,
    },
    detailCon: {
        marginHorizontal: 10,
        marginTop: 30,
        borderColor: colors.whiteColor,
        backgroundColor: colors.primaryColor,
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
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    title: {
        fontFamily: fonts.Medium,
        fontSize: 18,
        color: colors.whiteColor,
        width: '40%'
    },
    body: {
        fontFamily: fonts.Regular,
        fontSize: 18,
        color: colors.whiteColor,
    },
    priceText: {
        fontFamily: fonts.Medium,
        fontSize: 28,
        color: colors.whiteColor,
    }
});