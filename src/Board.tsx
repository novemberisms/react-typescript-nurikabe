import React, { Component, ReactNode } from "react"
import Square from "./Square"
import "./Board.css"

type BoardProps = {
    width: number;
    height: number;
}

type BoardState = {

}

export default class Board extends Component<BoardProps, BoardState> {

    public constructor(props: BoardProps) {
        super(props)
        this.state = {

        }
    }

    public render = (): ReactNode => {
        return (
            <div className="board-container">
                {this.generateSquares()}
            </div>
        )
    }

    private handleSquareClick = (x: number, y: number): void => {
        console.log(`${x} ${y}`)
    }

    private generateSquares = (): Array<ReactNode> => {
        const result = new Array<ReactNode>();
        for (let y = 0; y < this.props.height; y++) {
            const row = <div className="board-row" key={y}>
                {this.generateRow(y)}
            </div>

            result.push(row)
        }
        return result
    }

    private generateRow = (y: number): Array<ReactNode> => {
        const result = new Array<ReactNode>();
        for (let x = 0; x < this.props.width; x++) {
            result.push(<Square 
                x={x} y={y}
                key={x}
                number={0}
                filled={(x+y) % 2 === 0}
                dot={true}
                onClick={this.handleSquareClick}
            />)
        }
        return result;
    }
}