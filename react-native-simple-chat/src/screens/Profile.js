import { useContext } from "react";
import { Button, Text } from "react-native"
import styled from "styled-components";
import { UserContext } from "../contexts";
import { logout } from "../utils/firebase";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background }
`

const Profile = () => {

    const { dispatch } = useContext(UserContext);

    const _handleLogoutButtonPress = async () => {
        try {
            await logout();
        } catch (error) {
            console.err('error log: ', error);
        } finally {
            dispatch({});
        }
    }

    return(
        <Container>
            <Text style={{ fontSize: 24 }}>Profile</Text>
            <Button title="Logout" onPress={ _handleLogoutButtonPress } />
        </Container>
    )
}

export default Profile;