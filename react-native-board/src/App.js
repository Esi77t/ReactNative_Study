import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigations/StackNavigation";
import { StatusBar } from "react-native";

const App = () => {
    return(
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <StackNavigation />
        </NavigationContainer>
    )
}

export default App;