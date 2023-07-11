import { useState } from "react"
import exercisesData from "../exercisesData"
import Exercise from "./Exercise"

const ExercisesContainer = () => {
  const [exercises, setExercises] = useState(exercisesData)

  const exercisesElements = exercises.map(exercise => <Exercise name={exercise} key={exercise}/>)
  
  return (
    <div className="exercises-container">
      {exercisesElements}
    </div>
  )
}

export default ExercisesContainer