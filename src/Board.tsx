import React, { Component, ReactNode } from "react"
import Square from "./Square"
import BoardModel from "./models/BoardModel"
import "./Board.css"
import NurikabeGenerator from "./generator/NurikabeGenerator"

type BoardProps = {
    width: number;
    height: number;
}

type BoardState = {
    board: BoardModel
}

export default class Board extends Component<BoardProps, BoardState> {

    public constructor(props: BoardProps) {
        super(props)

        const generator = new NurikabeGenerator(this.props.width, this.props.height)

        this.state = {
            board: generator.generate(),
        }
    }

    private handleSquareClick = (x: number, y: number): void => {
        this.setState((prevState, props) => {
            const newBoard = prevState.board.cloneAndModify(x, y, cell => {
                if (cell.number !== 0) return cell; // no modification
                cell.filled = !cell.filled
                return cell
            })
            return {
                board: newBoard
            }
        })
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
            
            const cell = this.state.board.getCellClone(x, y)

            result.push(<Square 
                x={x} y={y}
                key={x}
                number={cell.number}
                filled={cell.filled}
                dot={cell.dotted}
                onClick={this.handleSquareClick}
            />)
        }
        return result;
    }

    public render = (): ReactNode => {
        return (
            <div className="board-container">
                {this.generateSquares()}
            </div>
        )
    }
}