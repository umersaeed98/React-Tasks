



import React, { createContext, useContext, useState } from "react";


export const ThemeContext = createContext()


const themes = {
    dark: {
        backgroundColor: "black",
        color: "white",
        borderColor: "white"
    },
    light: {
        backgroundColor: "white",
        color: 'black'
    },
    light2: {
        backgroundColor: "#F7F7F7",
        color: 'black'
    },
    light3:{
        color:'white'
    },
    buttoncolor:{
        backgroundColor:"#FFB400",
        color:'white'
    }
}

export const ThemeProvider = ({ children }) => {


    const [isDark, setIsDark] = useState(false)
    const theme = isDark ? themes.dark : themes.light
    const theme2 = isDark ? themes.dark : themes.light2
    const theme3 = isDark ? themes.dark : themes.light3

    const toggleTheme = () => {
        setIsDark(!isDark)
    }


    return (
        <ThemeContext.Provider value={[{ theme, theme2, theme3 , isDark }, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}


