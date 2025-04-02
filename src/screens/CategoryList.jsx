// Importing necessary components from packages
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, View } from "react-native"
import AppHeader from "../components/AppHeader";
import { colors } from "../global/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { API } from "../slice/API";
import CustomListCard from "../components/CustomListCard";
import { CategoryListSkeleton, CategorySkeleton } from "../components/skeletonLoaders";

const CategoryList = () => {
    const { category_id } = useRoute()?.params; // Get the category ID from the route params
    const [categoryList, setCategoryList] = useState([]); // State to hold the list of products
    const [loading, setLoading] = useState(false); // Loading state for initial fetch
    const [isRefreshing, setIsRefreshing] = useState(false); // State to handle pull-to-refresh

    const navigation = useNavigation();

    // Set loading to true when the component mounts
    useEffect(() => {
        setLoading(true);
    }, []);

    // Fetch data when the category ID changes
    useEffect(() => {
        if (category_id) {
            getCategoryList(); // Fetch products for a specific category
        } else {
            getList(); // Fetch all products if no category ID is provided
        }
    }, [category_id]);

    // Fetch products for a specific category
    const getCategoryList = async () => {
        try {
            const response = await API('get', `/products/category/${category_id}`); // API call for category-specific products
            if (response?.status === 200) {
                setCategoryList(response?.data); // Update state with category data
                setLoading(false); // Turn off the loading indicator
            }
        } catch (err) {
            console.log("Error", err); // Log error if the API fails
            setLoading(false); // Stop loading even if there's an error
        }
    };

    // Fetch the complete product list
    const getList = async () => {
        try {
            const response = await API('get', '/products'); // API call to get all products
            if (response?.status === 200) {
                setCategoryList(response?.data); // Update state with all products
                setLoading(false);
            }
        } catch (err) {
            console.log("Error", err); // Log any errors
            setLoading(false);
        }
    };

    // Handle pull-to-refresh functionality
    const onRefreshing = () => {
        setIsRefreshing(true); // Start refreshing
        setLoading(true); // Show loading indicator

        // Fetch data again depending on the category ID
        if (category_id) {
            getCategoryList();
        } else {
            getList();
        }

        // Stop refreshing after 300ms
        setTimeout(() => {
            setIsRefreshing(false);
            setLoading(false);
        }, 300);
    };

    return (
        <SafeAreaView style={ styles.flex1 }>
            <AppHeader headerBack={ true } title={ `${category_id ? category_id : "Product List"}` } onPress={ () => {
                navigation.goBack();
            }
            } />

            { loading ? (
                <CategoryListSkeleton /> // Show skeleton loader while data is being fetched
            ) : (
                <View style={ { flex: 1, paddingHorizontal: 5 } }>
                    <View style={ styles.listStyle }>
                        <FlatList
                            data={ categoryList } // Data for the FlatList
                            renderItem={ ({ item }) => (
                                <CustomListCard item={ item } /> // Render each item using CustomListCard
                            ) }
                            showsVerticalScrollIndicator={ false } // Hide the scroll bar
                            contentContainerStyle={ { paddingBottom: 40 } } // Add padding at the bottom
                            refreshControl={
                                <RefreshControl
                                    refreshing={ isRefreshing } // Show refreshing spinner when pulling
                                    onRefresh={ onRefreshing } // Trigger onRefreshing function
                                    colors={ [colors.primaryColor] } // Refresh control color
                                />
                            }
                        />
                    </View>
                </View>
            ) }
        </SafeAreaView>
    );
};

export default CategoryList;

// Styles for the component
const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        backgroundColor: colors.whiteColor
    },
    listStyle: {
        marginTop: 20,
        marginHorizontal: 10
    },
});