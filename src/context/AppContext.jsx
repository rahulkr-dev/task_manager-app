import React from 'react';
import { initialData } from '../data/data';
export const AppContext = React.createContext();


export const AppContextProvider = ({children})=>{
    const [todoData,setTodoData] = React.useState(initialData)
    return (
        <AppContext.Provider value={{todoData,setTodoData}}>
            {children}
        </AppContext.Provider>
    )
}