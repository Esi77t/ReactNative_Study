import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components"
import StackNavigtion from "./navigation/Stack";
import TabNavigator from "./navigation/Tab";
import DrawerNavigation from "./navigation/Drawer";

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`

const App = () => {
    return(
        // NavigationContainer : 해당 컴포넌트로 둘러싼 컴포넌트에 내비게이션 기능을 적용해주는 컴포넌트
        // <NavigationContainer>
        //     <StackNavigtion />
        // </NavigationContainer>
        <NavigationContainer>
            {/* <TabNavigator /> */}
            <DrawerNavigation />
        </NavigationContainer>
    )
}

export default App;