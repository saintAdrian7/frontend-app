import React from 'react'
import { useWorkoutContext } from '../Hooks/Useworkoutcontext'
import { formatDistanceToNow } from 'date-fns';

export default function Workoutdetails ({workout}){
const {dispatch} = useWorkoutContext()


const [formattedDate, setFormattedDate] = React.useState(
    formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(
        formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })
      );
    }, 60000); 

   
    return () => clearInterval(interval);
  }, [workout.createdAt]);

async function handleDelete (id){

    try {
        const response = await fetch(`/api/workouts/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          const deletedWorkout = await response.json();
          dispatch({ type: 'DELETE_WORKOUT', payload: { id } });
        }
      }
      catch (error) {
        console.error('Failed to delete workout:', error);
      }
  }

return (
    <div className='workout-details'>
       <h4>{workout.title}</h4>
       <p><strong>Load ({workout.load})kg</strong></p>
       <p><strong>Reps ({workout.reps})</strong></p>
       <p>{formattedDate}</p>
       <span onClick={() => handleDelete(workout._id)}>delete</span>
    </div>
)
}

