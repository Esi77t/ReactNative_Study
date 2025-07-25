import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

// 스택 내비게이션 객체를 생성
// Stack객체에 Stack.Navigator, Stack.Screen등의 컴포넌트가 포함되어 있다
const Stack = createStackNavigator();

const StackNavigtion = () => {
    return(
        // 여러 스크린을 관리하는 컨테이너
        // 내부에 <Stack.Screen> 컴포넌트를 정의하여 사용할 화면들을 등록한다
        <Stack.Navigator 
            initialRouteName="Home"     // 첫번째로 띄울 화면을 지정
            // cardStyle을 이용해서 각 화면의 배경색을 설정
            screenOptions={{ 
                cardStyle: {backgroundColor: '#fff'},   // 각 화면을 카드처럼 관리하겠다. 배경색, 패딩, 마진을 지정 가능
                headerStyle: {
                    height: 100,
                    backgroundColor: '#9EB7D4', // 헤더의 배경색
                    elevation: 0,   // 안드로이드 그림자 제거
                    shadowColor: 'transparent',     // ios 그림자 제거
                },
                headerTitleStyle: { color: '#fff', fontSize: 24 },  // 타이틀 글자색, 크기
                headerTitleAlign: 'center', // 타이틀 중앙 정렬
                headerTitle : ({ style }) => (  // 모든 화면 기본 타이틀을 아이콘으로 교체
                    <MaterialCommunityIcons name="react" style={ style } />
                    ),
                }}>
            {/* name에는 화면의 이름을 작성하는데, Screen 컴포넌트의 name에는 반드시 서로 다른 값을 가져야 한다 */}
            {/* name : 화면 고유의 이름. 나중에 화면을 이동할 때 필요한 이름이다
                component : 연결된 실제 컴포넌트. 해당 name이 호출되면 해당 컴포넌트가 렌더링 된다 */}
            <Stack.Screen name="Home" component={ Home } options={{ headerShown: false, }} />
            <Stack.Screen 
                name="List" 
                component={ List }
                options={{ 
                    headerTitle: 'List Screen', 
                    headerBackTitleVisible: true,
                    headerLeft: () => { // 안드로이드에서는 화면 왼쪽 처리를 하기 위해서 headerLeft를 써야 한다
                        const navigation = useNavigation();     // 현재 스크린의 navigation객체를 가져온다
                        // 함수형 컴포넌트 안에서 스크린 이동, 뒤로가기, 파라미터 전달 등 내비게이션 관련 기능을 사용할 수 있다
                        return(
                            // 상단 왼쪽 버튼
                            <Pressable
                                style={({ pressed }) => ({
                                    marginLeft: 10,
                                    opacity: pressed ? 0.5 : 1,
                                })}
                                // goBack() : 뒤로가기
                                onPress={ () => navigation.goBack() }
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialCommunityIcons name="arrow-left" size={ 30 } color='#fff' />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }}>이전으로</Text>
                                </View>
                            </Pressable>
                        )
                    }
                    }} />
            <Stack.Screen name="Item" component={ Item } />
        </Stack.Navigator>
    )
}

export default StackNavigtion;