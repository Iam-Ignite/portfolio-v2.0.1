import { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';


export const useTheme = () => {

    const context = useContext(ModeContext)

    if (context === undefined) {
        throw new Error("useTheme() most be inside a ThemeProvider")
    }

    return context

}