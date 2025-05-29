import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import { Button, Text, View } from "react-native";

const UserComponent = () => {

    const { user, login, logout } = useContext(UserContext);

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            { user ? (
                <>
                    <Text>환영합니다! { user.name } 님!</Text>
                    <Button title="로그아웃" onPress={ logout } />
                </>
            ) : (
                <Button title="로그인" onPress={ login } />
            ) }
        </View>
    )
}

export default UserComponent;