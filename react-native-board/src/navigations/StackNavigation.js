import { createStackNavigator } from "@react-navigation/stack";
import BoardScreen from "../screens/BoardScreen";
import DetailScreen from "../screens/DetailScreen";
import WriteScreen from "../screens/WriteScreen";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#414141' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: { color: '#fff', fontSize: 24, },
            }}
        >
            <Stack.Screen 
                name="Board" 
                component={ BoardScreen } 
                options={{
                    title: "네이버 카페",
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', gap: 16, marginRight: 16, }}>
                            <Pressable onPress={() => alert('검색 기능 준비중')}>
                                <Ionicons name="search" size={ 20 } color='white' />
                            </Pressable>
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="Write" 
                component={ WriteScreen } 
                options={({ navigation }) => ({
                    title: "게시글 작성",
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()}>
                            <Ionicons name="close" size={ 24 } color='white' style={{ marginLeft: 12 }} />
                        </Pressable>
                    ),
                })}
            />
            <Stack.Screen 
                name="Detail" 
                component={ DetailScreen } 
                options={{
                    title: "게시판",
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation;