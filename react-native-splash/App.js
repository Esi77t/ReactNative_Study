import { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'
import Entypo from '@expo/vector-icons/Entypo';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {

  // 앱 준비 완료 여부 상태
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 비동기로 초기 리소스 로딩 작업을 해주는 함수
    async function prepare() {
      try {
        // Entypo 아이콘 폰트를 미리 로딩한다
        await Font.loadAsync(Entypo.font);

        // 테스트 용으로 일부러 2초동안 지연시키는 코드
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    }

    // 함수 실행
    prepare();
  }, [])

  // 최초 화면이 준비되면 스플래시 화면을 숨기기 위한 함수
  const onLayoutRootView = useCallback(() => {
    if(isReady) {   // 앱이 준비되었을 때
      SplashScreen.hide();  // 스플래시 화면을 종료
    }
  }, [isReady]);  // isReady 값이 변경 될 때만 새로 정의한다

  // 앱 준비가 안되어 있으면 아무것도 렌더링하지 않고 스플래시 화면 유지
  if(!isReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      // View가 그려진 직후에 호출되는 이벤트
      onLayout={ onLayoutRootView }>
      <Text>SplashScreen Demo!</Text>
      <Entypo name="rocket" size={ 30 } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
