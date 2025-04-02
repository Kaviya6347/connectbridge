import { Provider } from 'react-redux'; // Provides the Redux store to the entire app
import RouterWrapper from './src/navigations/RouterWrapper'; // Manages app navigation
import { store } from './src/store/store'; // Redux store for managing global state
import { useEffect } from 'react'; // Hook for side effects
import BootSplash from "react-native-bootsplash"; // Handles the splash screen during app launch

const App = () => {
  // useEffect runs once when the component mounts
  useEffect(() => {
    BootSplash.hide(); // Hides the splash screen after the app has loaded
  }, []);

  return (
    <Provider store={ store }>
      <RouterWrapper />
    </Provider>
  );
};

export default App;