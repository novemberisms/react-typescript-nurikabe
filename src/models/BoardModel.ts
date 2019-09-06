import { CellModel, createEmptyCellModel, cloneCellModel } from "./CellModel";

export default class BoardModel {

    public readonly width: number
    public readonly height: number
    
    private data: Array<CellModel>

    public constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.data = []

        this.resetData()
    }

    public clone(): BoardModel {
        const clone = new BoardModel(this.width, this.height)
        
        for (let i = 0; i < this.data.length; i++) {
            const cloneCell = cloneCellModel(this.data[i])
            clone.setCellByIndex(i, cloneCell)
        }

        return clone
    }

    public cloneAndModify(x: number, y: number, modifyFn: (cell: CellModel) => CellModel): BoardModel {
        const clone = this.clone()
        const oldCell = this.getCellClone(x, y)
        const newCell = modifyFn(oldCell)
        clone.setCell(x, y, newCell)
        return clone
    }

    public getCellClone(x: number, y: number): CellModel {
        return cloneCellModel(this.data[y * this.width + x])
    }

    public setCell(x: number, y: number, cell: CellModel) {
        this.setCellByIndex(y * this.width + x, cell)
    }

    private setCellByIndex(index: number, cell: CellModel) {
        this.data[index] = cell
    }

    private resetData() {
        this.data = []

        for (let i = 0; i < this.width * this.height; i++) {
            this.data.push(createEmptyCellModel())
        }
    }
}