import React from 'react'
import Workoutdetails from "../components/Workoutsdetails"
import Workoutform from '../components/Workoutform'
import { useWorkoutContext } from '../Hooks/Useworkoutcontext'

export default function Home () {
    const {workouts,dispatch} = useWorkoutContext()
    React.useEffect(() => {
       const fetchWorkouts = async () => {
       const response = await fetch('/api/workouts')
       const json = await response.json()

       if(response.ok) {
          dispatch({type: 'SET_WORKOUTS',payload: json})
       }
       }
       fetchWorkouts()
    },[dispatch])


    return (
        <div className="home">
            
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    <Workoutdetails key={workout._id} Id = {workout._id} workout = {workout}/>
                ))}

            </div>
            <Workoutform />
        </div>
    )
}