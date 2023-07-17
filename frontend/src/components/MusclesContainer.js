import { useState } from "react"
import musclesData from "../musclesData"
import Muscle from "./Muscle"

const MusclesContainer = (props) => {
  const [muscles, setMuscles] = useState(musclesData)

  const muscleElements = muscles.map(muscle => <Muscle name={muscle} key={muscle} getActiveMuscle={props.getActiveMuscle} getFilteredExercises={props.getFilteredExercises}/>)
  
  return (
    <div className="muscles-container">
      {muscleElements}
    </div>
  )
}

export default MusclesContainer