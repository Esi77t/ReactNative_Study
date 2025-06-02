import styled from "styled-components";
import { Text, Button } from "react-native";
import { Image } from "../components/index";
import { images } from "../utils/images";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background };
`

const Login = ({ navigation }) => {
    return(
        <Container>
            <Image url={ images.logo } imageStyle={{ borderRadius: 40 }} />
            <Button title="Sign Up" onPress={ () => navigation.navigate('Signup') } />
        </Container>
    )
}

export default Login;