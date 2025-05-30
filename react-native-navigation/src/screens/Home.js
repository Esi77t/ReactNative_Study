import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`

// Stack.Screen에 등록만 하면 별도의 props 전달 없이도 자동으로 navigation객체가 주입이 된다
const Home = ({ navigation }) => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Container>
                <StyledText>Home</StyledText>
                <Button title="go to the list screen" onPress={ () => { navigation.navigate("List") }}/>
            </Container>
        </SafeAreaView>
    )
}

export default Home;