import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState);
    const [screensize, setScreensize] = useState(undefined)

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true});  
    }

    return (
        <StateContext.Provider
         value={{ 
            activeMenu,
            setActiveMenu,
            isClicked, 
            setIsClicked,
            handleClick,
            screensize, 
            setScreensize
         }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext  = () => useContext(StateContext)