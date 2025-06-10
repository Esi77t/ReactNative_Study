import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { ProgressContext, UserContext } from "../contexts";
import { getCurrentUser, logout, updateUserPhoto } from "../utils/firebase";
import { Button, Image, Input } from "../components";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background };
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`

const Profile = () => {

    const { spinner } = useContext(ProgressContext);
    const { dispatch } = useContext(UserContext);

    // 테마 불러오기
    const theme = useContext(ThemeContext);

    // 유저 정보 불러오기
    const user = getCurrentUser();

    // 사진 정보 받아둘 state
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

    const _handleLogoutButtonPress = async () => {
        try {
            spinner.start();
            await logout();
        } catch (error) {
            console.err('error log: ', error);
        } finally {
            dispatch({});
            spinner.stop();
        }
    }

    const _handlePhotoChange = async url => {
        try {
            spinner.start();
            const updateUser = await updateUserPhoto(url);
            setPhotoUrl(updateUser.photoUrl);
        } catch (error) {
            alert('사진을 불러오는데 실패했습니다.')
        } finally {
            spinner.stop();
        }
    }

    return(
        <Container>
            <Image 
                url={ photoUrl }
                onChangeImage={ _handlePhotoChange }
                showButton
                rounded
            />
            <Input label="name" value={ user.name } disabled />
            <Input label="email" value={ user.email } disabled />
            <Button 
                title="Logout" 
                onPress={ _handleLogoutButtonPress } 
                containerStyle={{ marginTop: 30, backgroundColor: theme.buttonLogout }} 
            />
        </Container>
    )
}

export default Profile;