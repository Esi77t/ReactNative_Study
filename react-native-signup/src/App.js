import { useState } from "react";
import { Alert, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"

export default App = () => {

    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUp = () => {
        if(id === '' || email === '' || password === '') {
            Alert.alert('올바르게 입력해주세요.');
            return;
        }

        Alert.alert(`입력된 id는 ${id}, 이메일은 ${email} 입니다.`);
    }

    return(
        <SafeAreaView style={ styles.area }>
            <StatusBar barStyle="light-content" backgroundColor={ '#6492ed' } />
            <View style={ styles.header }>
                <Text style={ styles.headerText }>SmartAppDev</Text>
            </View>
            <View style={ styles.container }>
                <Text style={ styles.signup }>회원가입</Text>
                    <View style={ styles.textInput }>
                        <Text>아이디</Text>
                        <TextInput style={ styles.input } value={ id } onChangeText={ setId } />
                    </View>
                    <View style={ styles.textInput }>
                        <Text>비밀번호</Text>
                        <TextInput style={ styles.input } value={ password } onChangeText={ setPassword } secureTextEntry />
                    </View>
                    <View style={ styles.textInput }>
                        <Text>메일</Text>
                        <TextInput style={ styles.input } value={ email } onChangeText={ setEmail } />
                    </View>
                <View>
                    <Pressable style={ styles.button } onPress={ onSignUp }>
                        <Text style={ styles.buttonText }>가입하기</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: '#87cefa',
    justifyContent: 'flex-start',
    padding: 30,
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'flex-start'
  },

  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  
  signup: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    margin: 30,
  },

  textInput: {
    margin: 10,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: '#d3d3d3'
  },

  button: {
    backgroundColor: '#87cefa',
    borderRadius: 8,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});
