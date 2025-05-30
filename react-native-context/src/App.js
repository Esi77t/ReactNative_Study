import styled from "styled-components";
import User from "./components/User";
import Input from "./components/Input";
import ThemeComponent from "./components/ThemeComponent";
import { ThemeProvider } from "./contexts/ThemeContext";
import UserComponent from "./components/UserComponet";
import { CartProvider } from "./contexts/CartContext";
import CartScreen from "./components/CartScreen";
import { UserProvider } from "./contexts/UserContext";

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`

const App = () => {
    return (
        // Provider 컴포넌트로부터 value를 전달하는 하위 컴포넌트의 수에는 제한이 없다
        // 하지만 Consumer 컴포넌트는 가장 가까운 Provider 컴포넌트에서 값을 받으므로
        // 자식 컴포넌트 중 Provider 컴포넌트가 있다면 중간에 있는 내용을 사용한다
        // <UserProvider>
        //     <Container>
        //         <User />
        //         <Input />
        //     </Container>
        // </UserProvider>
        <UserProvider>
            <Container>
                <UserComponent />
            </Container>
        </UserProvider>
    )
}

export default App;