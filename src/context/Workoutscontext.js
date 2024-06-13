import React from 'react'
import { createContext } from "react";

export const Workoutcontext = createContext()

export function workoutsReducer (state,action) {
 switch(action.type){
    case 'SET_WORKOUTS':
        return {
            workouts: action.payload
        }
    case 'CREATE_WORKOUT':
        return {
            workouts: [action.payload, ...state.workouts]
        }
    case 'DELETE_WORKOUT':
        return {
            workouts: state.workouts.filter(workout => workout._id !== action.payload.id)
        }
        default :
        return state
 }
}

export  function WorkoutContextProvider ({children}) {
    const [state, dispatch] = React.useReducer(workoutsReducer, {
        workouts: null
    })
    return (
        <Workoutcontext.Provider value={{ ...state, dispatch }}>
         { children }
        </Workoutcontext.Provider>
    )
}
