import { Switch } from "react-native";
import MyButton from "./components/Button";
import Input from "./components/Inputs";
import styled, { ThemeProvider } from "styled-components";
import { Theme, lightTheme, darkTheme } from "./Theme";
import { useState } from "react";

const Container = styled.View`
    flex: 1;
    background-color: ${ props => props.theme.background };
    align-items: center;
    justify-content: center;
`

export default function App() {
    
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);

    return(
        <ThemeProvider theme={ isDark ? darkTheme : lightTheme }>
            <Container>
                {/* <Text style={ [textStyles.text, { color: 'green'}] }>Inline Styling - Text</Text>
                * 여러개의 스타일을 적용해야하는 경우 배열을 이용하여 style 속성에 여러 개의 스타일을 적용하면 된다
                뒤에 오는 스타일이 앞에 있는 스타일을 덮는 다는 것을 기억해야 한다 여러개의 스타일을 적용할 때 반드시 클래스 스타일만
                적용해야 하는것이 아니다. 인라인 스타일과 클래스 스타일 방식을 혼용해서 사용할 수도 있다
                <Text style={ [textStyles.text, textStyles.error] }>Inline Styling - Error</Text> */}
                {/* <Header />
                <Content />
                <Footer /> */}
                {/* <FlexDirectionTest />
                <JustifyContentTest /> */}
                {/* { Platform === 'ios' ? (
                    <Text>iOS에서 실행 중</Text>
                ) : (
                    <Text>Android에서 실행 중</Text>
                )} */}
                {/* <Text>현재 플랫폼 버전 : { Platform.Version }</Text>
                { Platform.OS === 'android' && Platform.Version < 30 ? (
                    <Text>이 기능은 Android 30 이상에서만 지원됩니다.</Text>
                ) : <Text>현재 플랫폼에서는 지원하지 않습니다.</Text>} */}
                {/* <ShadowBox /> */}
                <Switch value={ isDark } onValueChange={ _toggleSwitch } />
                <MyButton title='Hanbit' />
                <MyButton title='ReactNative' />
                <Input borderColor="#3498db" />
                <Input borderColor="#9b59b6" />
            </Container>
        </ThemeProvider>
    )
}

// 인라인 스타일 방식으로 작성했을 때는 왜 color: 'red'인지 코드만으로 명확하게 이해하기 어려웠는데
// StyleSheet를 사용하면 error라는 이름으로 오류가 있는 상황에서 사용하기 위한 것이라는 의도를 파악하기 쉽다
// 글자색을 변경하려고 할 때, 클래스 스타일 방식에서는 error객체에서 색깔을 변경하면 되지만, 인라인 방식에서는 파일을 찾아다니면서
// 전부 변경해야하는 단점이 있음
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         padding: 10,
//         fontSize: 26,
//         fontWeight: '600',
//         color: 'black'
//     },
//     error: {
//         padding: 10,
//         fontSize: 26,
//         fontWeight: '400',
//         color: 'red'
//     }
// })