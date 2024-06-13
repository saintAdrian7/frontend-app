import{Workoutcontext}  from '../context/Workoutscontext'

import { useContext } from 'react'

export function useWorkoutContext  () {
    const context = useContext(Workoutcontext)
   if(!context) {
    throw Error('Wrong use of context')
   }

    return context
}