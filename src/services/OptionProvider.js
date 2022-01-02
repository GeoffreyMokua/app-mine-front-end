import React, { useState, createContext, useContext } from "react"

export const OptionContext = createContext();
export const OptionContextUpdate = createContext();

export function useOption(){
    return useContext(OptionContext)
}

export function useOptionUpdate(){
    return useContext(OptionContextUpdate)
}

export default function OptionProvider({children}) {
    const [option, setOption] = useState('All Tasks')

    function toggleOption(newOption){
        setOption(newOption)
    }


    return (
        <OptionContext.Provider value={option}>
            <OptionContextUpdate.Provider value={toggleOption}>
                {children}
            </OptionContextUpdate.Provider>
        </OptionContext.Provider>
    )
}
