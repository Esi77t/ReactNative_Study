import { createContext, useState } from "react";

const UserContext = createContext({
    user: { email: null, uid: null },
    dispatch: () => {},
});

// UserProvider를 만든다
// useState 하나 만들고 빈 객체로 초기화한다
// dispatch 함수를 정의한다(매개변수는 email, uid)
// 인자에 들어온 email과 uid를 state에 세팅한다
// user와 dispatch를 전역으로 내보낸다
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const dispatch = ({ email, uid }) => {
        setUser({ email, uid });
    }

    const value = { user, dispatch }

    return(
        <UserContext.Provider value={ value }>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };