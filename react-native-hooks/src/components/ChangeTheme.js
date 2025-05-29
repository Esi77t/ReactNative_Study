import { View, Text, Pressable } from "react-native";
import { useToggle } from "../hooks/useToggle";

export default function ChangeTheme(){
    const { state, toggle } = useToggle(false);

    return(
        <View style={{
            flex: 1,
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : '#fff'
        }}>
            <Text style={{ fontSize : 24, marginBottom : 20, fontWeight: 'bold' }}>
                현재 상태: { state ? 'ON' : 'OFF' }
            </Text>
            <Pressable
                onPress={ toggle }
                style={{
                    backgroundColor : state ? '#f1c40f' : '#95a5a6',
                    padding : 12,
                    borderRadius : 8,
                }}
            >
                <Text style={{ color:'white', fontSize: 18 }}>상태 토글</Text>
            </Pressable>
        </View>
    )
}