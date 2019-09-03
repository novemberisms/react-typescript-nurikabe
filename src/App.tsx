import React from 'react'
import "./App.css"
import Board from "./Board"

export default class App extends React.Component<{}, {}> {

  public constructor(props: {}) {
    super(props)
  }

  public render(): React.ReactNode {
    return (
      <div className="app-container">
        <h1>Nurikabe</h1>
        <Board width={10} height={10}/>
      </div>
    )
  }

}
