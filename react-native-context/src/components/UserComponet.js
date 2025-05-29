import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import { Button, Text, View } from "react-native";

const UserComponent = () => {

    const { user, login, logout } = useContext(UserContext);

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* JS에서 false로 판단하는 것들 : false, '', null, undefined, 0, NaN */}
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