import { useState } from "react"

export const useToggle = (initalValue=true) => {

    const [state, setState] = useState(initalValue);

    const toggle = () => {
        setState(prev => !prev);
    }

    return { state, toggle };
}