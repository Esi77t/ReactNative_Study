import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import StackNavigation from "./navigations/StackNavigation";
import theme from "./theme";

const App = () => {
    <ThemeProvider theme={ theme }>
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    </ThemeProvider>
}

export default App;