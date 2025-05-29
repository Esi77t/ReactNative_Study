// 커스텀 훅
// 리액트의 내장 훅들을 조합해서 재사용 가능한 로직을 하나의 함수로 분리하는 것

import { useState } from "react"

// 입력 관리 훅

// 1. use로 시작하는 함수 이름
export const useInput = (initalValue='') => {
    // 2. 훅 내부에서 필요한 useState, useEffect 등 사용
    const [value, setValue] = useState(initalValue);

    const onChangeText = text => {
        setValue(text);
    }

    // 3. 값을 return으로 전달
    return { value, onChangeText };
}