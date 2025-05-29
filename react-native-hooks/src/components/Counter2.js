import { useReducer } from "react";
import { Button, Text, View } from "react-native";

const initialState = { count: 0 };

// dispatch함수를 통해 전달된 action에 따라 state의 값을 처리할 로직
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            // state.count += 1;, state.count++; => X, 불변성을 해치기 때문
            return{ count: state.count + 1 } // 새 객체를 반환
        case 'DECREMENT' :
            return{ count: state.count - 1 };
        default:
            return state;
    }
}

export default function Counter2() {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    // dispatch 함수는 인자로 전달된 action값을 reducer함수에 전달하면 역할이 끝난다
    return(
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 30 }}>Count : { state.count }</Text>
            <Button title="+" onPress={() => dispatch({ type: 'INCREMENT' })} />
            <Button title="-" onPress={() => dispatch({ type: 'DECREMENT' })} />
        </View>
    )
}