import React from "react"
import "./Square.css"

type SquareProps = {
    x: number;
    y: number;
    filled: boolean;
    dot: boolean;
    number: number;
    onClick: (x: number, y: number) => void;
}

// NOTE that this is a special space character that looks like a space 
// but does not count as one. This was copy-pasted
// from https://www.brunildo.org/test/space-chars.html
// since using a regular space for some reason would mess up the vertical
// spacing of the rows containing these squares
const specialSpace = " "
const dot = "•"

export default function Square(props: SquareProps) {

    const className = props.filled
        ? "square filled"
        : "square"

    const content = props.dot 
        ? dot 
        : props.number === 0
            ? specialSpace
            : props.number

    const handleClick = () => props.onClick(props.x, props.y)

    return ( 
        <span className={className} onClick={handleClick}>
            {content}
        </span>
    )
}