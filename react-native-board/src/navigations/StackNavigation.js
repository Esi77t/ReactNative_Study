import { createStackNavigator } from "@react-navigation/stack";
import BoardScreen from "../screens/BoardScreen";
import DetailScreen from "../screens/DetailScreen";
import WriteScreen from "../screens/WriteScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Board" component={ BoardScreen } options={{ title: '카페' }} />
            <Stack.Screen name="Detail" component={ DetailScreen } options={{ title: '게시글 상세보기' }} />
            <Stack.Screen name="Write" component={ WriteScreen } options={{ title: '임시 저장' }} />
        </Stack.Navigator>
    )
}

export default StackNavigation;