// Importing necessary components from packages
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppHeader from "../components/AppHeader";
import { useEffect, useState } from "react";
import { API } from "../slice/API";
import { fonts } from "../global/fonts";
import { colors } from "../global/colors";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { CategorySkeleton } from "../components/skeletonLoaders";

const Categories = () => {
    const navigation = useNavigation(); // Hook for navigation
    const [category, setCategory] = useState([]); // State to store categories
    const [loading, setLoading] = useState(false); // State to track loading status
    const [isRefreshing, setIsRefreshing] = useState(false); // State for pull-to-refresh

    // Fetch categories when the component mounts
    useEffect(() => {
        setLoading(true); // Start loading indicator
        getCategory(); // Fetch categories from API
    }, []);

    // Function to fetch categories from the API
    const getCategory = async () => {
        try {
            const response = await API('get', '/products/categories'); // API call
            if (response?.status === 200) {
                setCategory(response?.data); // Set categories data to state
                setLoading(false); // Stop loading indicator
            }
        } catch (err) {
            console.log("Error", err); // Log errors for debugging
            setLoading(false); // Stop loading even if there's an error
        }
    };

    // Handler for pull-to-refresh functionality
    const onRefreshing = () => {
        setIsRefreshing(true); // Start refreshing
        setLoading(true); // Show loading indicator
        getCategory(); // Fetch updated categories

        // Stop refreshing after 300ms
        setTimeout(() => {
            setIsRefreshing(false);
            setLoading(false);
        }, 300);
    };

    return (
        <SafeAreaView style={ styles.flex1 }>
            <AppHeader
                headerBack={ true }
                title="Categories"
                onPress={ () => {
                    navigation.navigate("BottomTab", { screen: "Dashboard" });
                } }
            />

            { loading ? (
                <CategorySkeleton /> // Display skeleton loader while data is being fetched
            ) : (
                <View style={ { flex: 1, paddingHorizontal: 15 } }>
                    <FlatList
                        data={ category } // Categories data
                        renderItem={ ({ item, index }) => (
                            <TouchableOpacity
                                onPress={ () => {
                                    navigation.navigate("CategoryList", { category_id: item });
                                } }
                                style={ styles.catContainer } // Category card style
                                activeOpacity={ 0.9 }
                            >
                                <Avatar
                                    source={
                                        index === 0
                                            ? require('../assets/images/electronic.jpg')
                                            : index === 1
                                                ? require('../assets/images/jewel.jpg')
                                                : index === 2
                                                    ? require('../assets/images/menCloths.jpg')
                                                    : require('../assets/images/womenCloth.jpg')
                                    }
                                    size={ 120 }
                                    avatarStyle={ { resizeMode: 'contain' } }
                                />
                                <Text style={ styles.titleText }>{ item }</Text>
                            </TouchableOpacity>
                        ) }
                        numColumns={ 2 } // Display items in 2 columns
                        contentContainerStyle={ {
                            paddingBottom: 10,
                            justifyContent: 'space-between'
                        } }
                        refreshControl={
                            <RefreshControl
                                refreshing={ isRefreshing } // Show refresh indicator when refreshing
                                onRefresh={ onRefreshing } // Trigger refresh on pull
                                colors={ [colors.primaryColor] } // Color of the refresh indicator
                            />
                        }
                    />
                </View>
            ) }
        </SafeAreaView>
    );
};

export default Categories;

// Styles for the component
const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        backgroundColor: colors.whiteColor
    },
    titleText: {
        fontFamily: fonts.Semibold,
        fontSize: 15,
        color: colors.blackColor,
        marginTop: 15,
        textTransform: 'capitalize'
    },
    catContainer: {
        width: '47%',
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
        marginLeft: 8,
        paddingVertical: 25,
        alignItems: 'center',
        marginTop: 10
    }
})