// Importing necessary components from packages
import { Dimensions, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

// Getting screen dimensions for responsive design
const { height, width } = Dimensions.get("screen");

// 🗂️ **DashboardSkeleton:** Placeholder for the dashboard screen
export const DashboardSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <View style={ {
                height: height * 0.22,
                width: width * 0.9,
                borderRadius: 20,
            } } />

            <View style={ { marginTop: 30 } }>
                <View style={ { flexDirection: 'row', justifyContent: 'space-between' } }>
                    <View style={ {
                        height: height * 0.03,
                        width: width * 0.35,
                        borderRadius: 15,
                    } } />
                    <View style={ {
                        height: height * 0.03,
                        width: width * 0.35,
                        borderRadius: 15,
                    } } />
                </View>

                <View style={ { flexDirection: 'row', marginTop: 10 } }>
                    <View style={ {
                        height: height * 0.3,
                        width: width * 0.43,
                        borderRadius: 15,
                    } } />
                    <View style={ {
                        height: height * 0.3,
                        width: width * 0.43,
                        marginLeft: 15,
                        borderRadius: 15,
                    } } />
                </View>
            </View>

            <View style={ { marginTop: 30 } }>
                <View style={ { flexDirection: 'row', justifyContent: 'space-between' } }>
                    <View style={ {
                        height: height * 0.03,
                        width: width * 0.35,
                        borderRadius: 15,
                    } } />
                    <View style={ {
                        height: height * 0.03,
                        width: width * 0.35,
                        borderRadius: 15,
                    } } />
                </View>

                <View style={ { flexDirection: 'row', marginTop: 10 } }>
                    <View style={ {
                        height: height * 0.3,
                        width: width * 0.43,
                        borderRadius: 15,
                    } } />
                    <View style={ {
                        height: height * 0.3,
                        width: width * 0.43,
                        marginLeft: 15,
                        borderRadius: 15,
                    } } />
                </View>
            </View>
        </SkeletonPlaceholder>
    );
};

// 🗂️ **CategorySkeleton:** Placeholder for category sections
export const CategorySkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <View style={ { marginTop: 20, marginLeft: 20 } }>
                <View style={ { flexDirection: 'row', marginTop: 10 } }>
                    <View style={ {
                        height: height * 0.25,
                        width: width * 0.43,
                        borderRadius: 15,
                    } } />
                    <View style={ {
                        height: height * 0.25,
                        width: width * 0.43,
                        marginLeft: 15,
                        borderRadius: 15,
                    } } />
                </View>
            </View>

            <View style={ { marginTop: 10, marginLeft: 20 } }>
                <View style={ { flexDirection: 'row', marginTop: 10 } }>
                    <View style={ {
                        height: height * 0.25,
                        width: width * 0.43,
                        borderRadius: 15,
                    } } />
                    <View style={ {
                        height: height * 0.25,
                        width: width * 0.43,
                        marginLeft: 15,
                        borderRadius: 15,
                    } } />
                </View>
            </View>
        </SkeletonPlaceholder>
    );
};

// 🗂️ **CategoryListSkeleton:** Placeholder for a list of categories
export const CategoryListSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            { [1, 2, 3, 4, 5].map((_, index) => (
                <View
                    key={ index }
                    style={ {
                        height: height * 0.15,
                        width: width * 0.9,
                        marginHorizontal: 20,
                        borderRadius: 15,
                        marginTop: 15,
                    } }
                />
            )) }
        </SkeletonPlaceholder>
    );
};

// 🗂️ **ViewDetailsSkeleton:** Placeholder for product details page
export const ViewDetailsSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <View style={ {
                height: height * 0.28,
                width: width * 0.9,
                marginHorizontal: 18,
                borderRadius: 15,
            } } />

            <View style={ {
                height: height * 0.05,
                width: width * 0.9,
                marginHorizontal: 18,
                borderRadius: 15,
                marginTop: 15,
            } } />

            <View style={ {
                height: height * 0.43,
                width: width * 0.9,
                marginHorizontal: 18,
                borderRadius: 15,
                marginTop: 35,
            } } />
        </SkeletonPlaceholder>
    );
};