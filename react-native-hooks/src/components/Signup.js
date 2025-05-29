// 4. 사용하기 위해서 import한다
import { Text, TextInput, View } from "react-native";
import { useInput } from "../hooks/useInput";

export default function Signup() {
    // 5. 훅 호출
    const name = useInput('');  // value, onChangeText
    const email = useInput('');

    return(
        <View>
            <TextInput placeholder="이름" value={ name } onChangeText={ name.onChangeText } />
            <TextInput placeholder="이메일" value={ email } onChangeText={ email.onChangeText } />
            <Text>{ `입력된 이름 : ${name.value}` }</Text>
            <Text>{ `입력된 이메일 : ${email.value}` }</Text>
        </View>
    )
}