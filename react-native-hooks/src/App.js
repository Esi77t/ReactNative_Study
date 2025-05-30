import styled from "styled-components";
import Counter from "./components/Counter";
import Parent from "./components/Parent";
import Form from "./components/Form";
import { Button } from "react-native";
import { useState } from "react";
import ScrollEnd from "./components/ScrollEnd";
import Length from "./components/Length";
import AverageCalculator from "./components/Average";
import Dog from "./components/Dog";
import ChangeTheme from "./components/ChangeTheme";
import Counter2 from "./components/Counter2";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`

const App = () => {

    // const [showHide, setShowHide] = useState(true);

    return(
        <Container>
            {/* 버튼을 하나 만들고 title은 Hide, Form이 안보일 때는 Show
            버튼을 눌렀을 때 Form을 숨기거나, 보이게 만들기 */}
            {/* <Button title={ showHide ? 'Hide' : 'Show' } onPress={ () => setShowHide(prev => !prev) } />
            { showHide && <Form /> }
            <ScrollEnd /> */}
            <LoginForm />
        </Container>
    ) 
}

export default App;