import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer, HomeScreen, ProfileScreen } from "../screens/DrawerScreens";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator
            // 드로어에 들어갈 커스텀 컴포넌트
            // props로 넘어가는 내용들
            // 스크린 이름, 드로어를 조작하는 함수들, 스크린의 정보 등을 props를 통해 넘긴다
            drawerContent={ (props) => <CustomDrawer { ...props } />}
            screenOptions={{
                // 드로어의 스타일(배경색, 너비 등)을 지정 
                drawerStyle: {
                    backgroundColor: '#e6e6e6',
                    width: 240,
                    borderWidth: 3,
                    borderColor: '#ccc',
                },
                // 드로어 라벨의 텍스트 스타일(글자 크기, 두께, 색깔, 정렬, 자간)을 지정
                drawerLabelStyle: {
                    fontSize: 18,
                },
                // 선택된 드로어의 색상을 지정
                drawerActiveTintColor: '#4caf50',
                // 선택이 안 된 드로어의 색상을 지정
                drawerInactiveTintColor: '#757575',
                // 모든 스크린의 헤더가 사라진다
                // headerShown: false,
                drawerPosition: 'right',
            }}
        >
            <Drawer.Screen name="Home" component={ HomeScreen } />
            <Drawer.Screen name="Profile" component={ ProfileScreen } />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;