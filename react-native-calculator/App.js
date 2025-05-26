import { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Pressable } from 'react-native';

export default function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState("Enter numbers and select operation");

  const handleOperator = (op) => {
    // 값이 입력이 안되어 있으면 값을 입력하세요 라고 경고 띄우기
    // 숫자가 아닐 경우 숫자를 입력하세요라고 경고 띄우기
    // 넘어온 연산자를 토대로 연산하기
    // 나누기 할 때 정수를 0으로 나누려 하면, 0으로 나눌 수 없습니다 메시지 출력하기
    if(num1.trim() === '' || num2.trim() === '') {
      alert('숫자를 입력하세요.');
      return
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if(isNaN(a) || isNaN(b)) {
      alert('숫자만 입력하세요.');
      return;
    }
    
    let res = 0;
    switch(op) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : '정수는 0으로 나눌 수 없습니다.';
        break;
    }

    setResult(res);
  }

  return (
    <View style={ styles.container }>
      <TextInput value={ num1 } style={ styles.input } onChangeText={ setNum1 } keyboardType='numeric' placeholder="Enter first number"/>
      <TextInput value={ num2 } style={ styles.input } onChangeText={ setNum2 } keyboardType='numeric' placeholder="Enter second number"/>
      <Text style={ styles.result }>{ result }</Text>
      <View style={ styles.buttonAll }>
        { ['+', '-', '*', '/'].map((op) => (
          <Pressable key={ op } style={ styles.button } onPress={ () => handleOperator(op) }>
            <Text style={ styles.buttonText }>{ op }</Text>
          </Pressable>
        )) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    width: '90%',
    height: '7%',
    textAlign: 'center',
    fontSize: 18
  },

  buttonAll: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    gap: 20,
  },

  button: {
    backgroundColor: '#1ea4ff',
    padding: 14,
    borderRadius: 8,
  },

  buttonText: {
    textAlign: 'center',
    color: 'white'
  },

  result: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  }
});
