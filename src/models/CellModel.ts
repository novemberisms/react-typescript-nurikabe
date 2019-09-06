export type CellModel = {
    number: number
    filled: boolean
    dotted: boolean
}

export const createEmptyCellModel = (): CellModel => {
    return {
        number: 0,
        filled: false,
        dotted: false,
    }
}

export const cloneCellModel = (cell: CellModel): CellModel => {
    return {
        number: cell.number,
        filled: cell.filled,
        dotted: cell.dotted,
    }
}