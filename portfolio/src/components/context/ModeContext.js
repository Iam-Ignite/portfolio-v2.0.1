import { createContext, useReducer } from 'react'


export const ModeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        default:
            return state
    }

}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        mode: 'dark'
    })

    const changeColor = (mode) => {
        dispatch({ type: "CHANGE_MODE", payload: mode });
    }

    return (
        <ModeContext.Provider value={{ ...state, changeColor }}>
            {children}
        </ModeContext.Provider>
    );
}
