// Importing necessary components from packages
import { useEffect, useState } from "react";
import { Dimensions, ImageBackground, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { API } from "../slice/API";
import AppHeader from "../components/AppHeader";
import { FlatList } from "react-native-gesture-handler";
import ViewMore from "../components/ViewMore";
import DashboardCard from "../components/DashboardCard";
import CustomListCard from "../components/CustomListCard";
import { colors } from "../global/colors";
import { DashboardSkeleton } from "../components/skeletonLoaders";
import SwiperFlatList from "react-native-swiper-flatlist";

// Get screen dimensions for responsive design
const { height, width } = Dimensions.get("screen");

const Dashboard = () => {
    // State variables for different product categories
    const [dashboardList, setDashboardList] = useState([]);
    const [electronicList, setElectronicList] = useState([]);
    const [jewelList, setJewelList] = useState([]);
    const [womenCloths, setWomenCloths] = useState([]);
    const [menCloths, setMenCloths] = useState([]);
    const [loading, setLoading] = useState(false); // Tracks loading status
    const [isRefreshing, setIsRefreshing] = useState(false); // Tracks pull-to-refresh status

    // Fetch product data when the component mounts
    useEffect(() => {
        setLoading(true);
        getList();
        getElectronicList();
        getJewelList();
        getWomenCloths();
        getMenCloths();
    }, []);

    // API call for the top 5 products (Dashboard Highlights)
    const getList = async () => {
        try {
            const response = await API('get', '/products');
            if (response?.status === 200) {
                const filterList = response?.data?.slice(0, 5); // Limit to 5 items
                setDashboardList(filterList);
            }
        } catch (err) {
            console.log("Error", err);
            setLoading(false);
        }
    };

    // API call for electronics products
    const getElectronicList = async () => {
        try {
            const response = await API('get', '/products/category/electronics');
            if (response?.status === 200) {
                const filterList = response?.data?.slice(0, 4);
                setElectronicList(filterList);
            }
        } catch (err) {
            console.log("Error", err);
            setLoading(false);
        }
    };

    // API call for jewelry products
    const getJewelList = async () => {
        try {
            const response = await API('get', '/products/category/jewelery');
            if (response?.status === 200) {
                const filterList = response?.data?.slice(0, 4);
                setJewelList(filterList);
            }
        } catch (err) {
            console.log("Error", err);
            setLoading(false);
        }
    };

    // API call for women's clothing products
    const getWomenCloths = async () => {
        try {
            const response = await API('get', `/products/category/women's clothing`);
            if (response?.status === 200) {
                const filterList = response?.data?.slice(0, 4);
                setWomenCloths(filterList);
            }
        } catch (err) {
            console.log("Error", err);
            setLoading(false);
        }
    };

    // API call for men's clothing products
    const getMenCloths = async () => {
        try {
            const response = await API('get', `/products/category/men's clothing`);
            if (response?.status === 200) {
                const filterList = response?.data?.slice(0, 4);
                setMenCloths(filterList);
                setLoading(false);
            }
        } catch (err) {
            console.log("Error", err);
            setLoading(false);
        }
    };

    // Pull-to-refresh handler
    const onRefreshing = () => {
        setIsRefreshing(true);
        setLoading(true);
        getList();
        getElectronicList();
        getJewelList();
        getWomenCloths();
        getMenCloths();

        setTimeout(() => {
            setIsRefreshing(false);
            setLoading(false);
        }, 300);
    };

    return (
        <SafeAreaView style={ styles.flex1 }>
            <AppHeader dash />

            { loading ? (
                <View style={ { width: '100%', paddingHorizontal: 20 } }>
                    <DashboardSkeleton />
                </View>
            ) : (
                <ScrollView
                    contentContainerStyle={ { flexGrow: 1 } }
                    showsVerticalScrollIndicator={ false }
                    refreshControl={
                        <RefreshControl
                            refreshing={ isRefreshing }
                            onRefresh={ onRefreshing }
                            colors={ [colors.primaryColor] }
                        />
                    }
                >
                    <View style={ { paddingHorizontal: 5 } }>
                        <View >
                            <SwiperFlatList
                                data={ [
                                    { id: 1, image: require('../assets/images/product1.jpg') },
                                    { id: 2, image: require('../assets/images/product2.jpg') }
                                ] }
                                renderItem={ ({ item }) => (
                                    <ImageBackground
                                        source={ item?.image }
                                        imageStyle={ { width: '100%', borderRadius: 20 } }
                                        style={ {
                                            borderRadius: 20,
                                            width: width * 0.9,
                                            height: height * 0.23,
                                            marginLeft: 10
                                        } }
                                    />
                                ) }
                                showPagination={ true }
                                paginationStyle={ {
                                    bottom: -45,
                                    width: width * 0.04
                                } }
                                paginationStyleItemActive={ {
                                    height: 8,
                                    width: 30,
                                    backgroundColor: colors.primaryColor
                                } }
                                paginationStyleItemInactive={ {
                                    height: 8,
                                    width: 8,
                                    backgroundColor: colors.primaryColor
                                } }
                            />
                        </View>


                        <View style={ [styles.listStyle, { marginTop: 60 }] }>
                            <ViewMore title="Electronics Products" category_id="electronics" />
                            <FlatList
                                data={ electronicList }
                                renderItem={ ({ item }) => <DashboardCard item={ item } /> }
                                showsHorizontalScrollIndicator={ false }
                                contentContainerStyle={ { paddingVertical: 10, paddingHorizontal: 10 } }
                                horizontal
                            />
                        </View>

                        <View style={ styles.listStyle }>
                            <ViewMore title="Jewelery" category_id="jewelery" />
                            <FlatList
                                data={ jewelList }
                                renderItem={ ({ item }) => <DashboardCard item={ item } /> }
                                showsHorizontalScrollIndicator={ false }
                                contentContainerStyle={ { paddingVertical: 10, paddingHorizontal: 10 } }
                                horizontal
                            />
                        </View>

                        <View style={ styles.listStyle }>
                            <ViewMore title="Women's Cloths" category_id="women's clothing" />
                            <FlatList
                                data={ womenCloths }
                                renderItem={ ({ item }) => <DashboardCard item={ item } /> }
                                showsHorizontalScrollIndicator={ false }
                                contentContainerStyle={ { paddingVertical: 10, paddingHorizontal: 10 } }
                                horizontal
                            />
                        </View>

                        <View style={ styles.listStyle }>
                            <ViewMore title="Men's Cloths" category_id="men's clothing" />
                            <FlatList
                                data={ menCloths }
                                renderItem={ ({ item }) => <DashboardCard item={ item } /> }
                                showsHorizontalScrollIndicator={ false }
                                contentContainerStyle={ { paddingVertical: 10, paddingHorizontal: 10 } }
                                horizontal
                            />
                        </View>

                        <View style={ styles.listStyle }>
                            <ViewMore title="Top Selection" category_id="" />
                            <FlatList
                                data={ dashboardList }
                                renderItem={ ({ item }) => <CustomListCard item={ item } /> }
                                showsVerticalScrollIndicator={ false }
                                contentContainerStyle={ { paddingBottom: 40 } }
                                scrollEnabled={ false }
                            />
                        </View>
                    </View>
                </ScrollView>
            ) }
        </SafeAreaView>
    );
};

export default Dashboard;

// Styles for the Dashboard screen
const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        backgroundColor: colors.whiteColor
    },
    listStyle: {
        marginTop: 20,
        marginHorizontal: 10
    },
})