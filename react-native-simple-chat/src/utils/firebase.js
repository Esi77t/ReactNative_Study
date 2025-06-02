import { initializeApp } from "firebase/app";
import config from "../../firebase.json";

// initializeApp()
// Firebase SDK를 내 프로젝트에 연결해주는 함수
// config에 들어있는 정보로 firebase와 연결시켜줌
const app = initializeApp(config);

export default app;