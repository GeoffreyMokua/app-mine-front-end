import {createContext, useState} from 'react'

export const modalContext = createContext();

export default function ModalProvider({children}) {

    const [show, setShow] = useState(false)
    const handleOpen = () => {setShow(true);}
    const handleClose = () => {setShow(false);}

    return (
        <modalContext.Provider
            value={{
                modalStatus: show,
                modalSetter: [handleOpen, handleClose],
            }}>
            {children}
        </modalContext.Provider>
    );
}
