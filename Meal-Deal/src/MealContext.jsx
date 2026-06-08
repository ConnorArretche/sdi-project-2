import { createContext, useState, useContext, useEffect } from 'react';


export const MealContext = createContext();

export function MealProvider({children}){
    const [savedMeals, setSavedMeals] = useState(() => {
        const saved = localStorage.getItem('savedMeals')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
    }, [savedMeals])

    return (
        <MealContext.Provider value={{savedMeals, setSavedMeals}}>
            {children}
        </MealContext.Provider>
    )

}



