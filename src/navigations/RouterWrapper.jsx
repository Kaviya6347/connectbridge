// Importing necessary libraries and components
import { useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

/**
 * RouterWrapper Component
 * Acts as the entry point for managing navigation based on the user's login status.
 */
const RouterWrapper = () => {
    // Accessing the user's login status from the Redux store
    const isLoggedIn = useSelector(state => state?.reducer?.isLoggedIn);

    return (
        <>
            { isLoggedIn ? <MainNavigation /> : <AuthNavigation /> }
        </>
    );
};

export default RouterWrapper; // Exporting the RouterWrapper component