import {React, useState} from "react"

function Square() {
  const [ squareState, setSquareState ] = useState({selected: false});
  const handleClick = () => {
    squareState.selected == true ? setSquareState({selected: false}) : setSquareState({selected: true})
    console.log(squareState)
  } 
  return (
    <div className={`${squareState.selected ? 'selected' : ''} square`} onClick={handleClick}></div>
  )
}

export default Square