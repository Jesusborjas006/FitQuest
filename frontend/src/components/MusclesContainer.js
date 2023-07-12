import { useState } from "react"
import musclesData from "../musclesData"
import Exercise from "./Muscle"

const ExercisesContainer = (props) => {
  const [muscles, setMuscles] = useState(musclesData)

  const muscleElements = muscles.map(muscle => <Exercise name={muscle} key={muscle} getActiveMuscle={props.getActiveMuscle}/>)
  
  return (
    <div className="muscles-container">
      {muscleElements}
    </div>
  )
}

export default ExercisesContainer