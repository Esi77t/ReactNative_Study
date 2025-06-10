import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown: false, }} />
            <Stack.Screen name="Signup" component={ SignupScreen } options={{ headerShown: false, }} />
        </Stack.Navigator>
    )
}

export default StackNavigation;