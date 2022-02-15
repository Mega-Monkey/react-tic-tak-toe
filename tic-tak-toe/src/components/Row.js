import {React, useState} from "react"
import Square from "./Square"

function Row({currentPlayer}) {
  
  return (
    <div className="row">
      <Square currentPlayer={currentPlayer} />
      <Square currentPlayer={currentPlayer} />
      <Square currentPlayer={currentPlayer} />
    </div>
    )
}

export default Row