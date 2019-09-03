import React, { Component, ReactNode } from "react"
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

    public render(): ReactNode {
        return (
            <div>
                {this.generateSquares()}
            </div>
        )
    }

    private generateSquares(): Array<ReactNode> {
        const result = new Array<ReactNode>();
        for (let y = 0; y < this.props.height; y++) {
            const row = <div className="row" key={y}>
                {this.generateRow(y)}
            </div>

            result.push(row)
        }
        return result
    }

    private generateRow(y: number): Array<ReactNode> {
        const result = new Array<ReactNode>();
        for (let x = 0; x < this.props.width; x++) {
            result.push(
                <span 
                    className="square" 
                    key={x} 
                    onMouseEnter={() => this.onMouseOver(x, y)}>
                        x
                </span>
            )
        }
        return result;
    }

    private onMouseOver(x: number, y: number) {
        console.log(`${x}, ${y}`)
    }
}