import React, { useState, createContext, useContext } from "react"

export const OptionContext = createContext();
export const OptionContextUpdate = createContext()

export const endPointContext = createContext()
export const endPointContextUpdate = createContext()

export function useEndPoint(){
    return useContext(endPointContext)
}
export function useEndPointUpdate(){
    return useContext(endPointContextUpdate)
}

export function useOption(){
    return useContext(OptionContext)
}
export function useOptionUpdate(){
    return useContext(OptionContextUpdate)
}

export default function OptionProvider({children}) {
    const [option, setOption] = useState(null)

    const [endPoint, setEndPoint] = useState(null)

    function toggleEndPoint(api_endpoint){
        setEndPoint(api_endpoint)
    }

    function toggleOption(newOption){
        setOption(newOption)
    }

    return (
        <endPointContext.Provider value={endPoint}>
            <endPointContextUpdate.Provider value={toggleEndPoint}>
                <OptionContext.Provider value={option}>
                    <OptionContextUpdate.Provider value={toggleOption}>
                        {children}
                    </OptionContextUpdate.Provider>
                </OptionContext.Provider>
            </endPointContextUpdate.Provider>
        </endPointContext.Provider>
    );
}
