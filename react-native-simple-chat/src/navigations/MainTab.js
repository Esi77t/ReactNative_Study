import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ChannelList, Profile } from "../screens";

// BottomTab 내비게이터 객체 생성
const Tab = createBottomTabNavigator();

const MainTab = () => {
    return(
        // Channel List, Profile 컴포넌트를 Screen으로 갖도록 설정
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name="Channel List" component={ ChannelList } />
            <Tab.Screen name="Profile" component={ Profile } />
        </Tab.Navigator>
    )
}

export default MainTab;