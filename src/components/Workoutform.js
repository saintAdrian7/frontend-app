import React from 'react'
import { useWorkoutContext } from '../Hooks/Useworkoutcontext'

export default function Workoutform () {
const {dispatch} = useWorkoutContext()
const [title, setTitle] = React.useState('')
const [reps,setReps] = React.useState('')
const [load, setLoad] = React.useState('')
const [error, setError] = React.useState('')

async function handleSubmit (e) {
    e.preventDefault()

    const workout = {title, load, reps}

    const response = await fetch('/api/workouts', {
        method: "POST",
        body:JSON.stringify(workout),
        headers: {
            "Content-Type": 'application/json'
        }
  })
  const json = await response.json()

  if(!response.ok) {
    setError(json.error)
    
  }
  if(response.ok) {
    setError(null)
    setTitle('')
    setLoad('')
    setReps('')
    console.log('Workout added')
    dispatch({type:'CREATE_WORKOUT', payload:json})
  }
}


    return(
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a new Workout</h3>

        <label>Exersize Title</label>
        <input 
           type = 'text'
            required
            onChange = {(e) => 
            setTitle(e.target.value)}
            value={title}
        /><label>Load (in kgs)</label>
        <input 
           type = 'number'
            required
            onChange = {(e) => 
            setLoad(e.target.value)}
            value={load}
        />
        <label>Reps:</label>
        <input 
           type = 'number'
            required
            onChange = {(e) => 
            setReps(e.target.value)}
            value={reps}
        />
        <button>Add workout</button>
    </form>

    )
}