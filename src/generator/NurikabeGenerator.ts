import BoardModel from "../models/BoardModel";
import seedrandom from "seedrandom"

export default class NurikabeGenerator {

    private readonly rng: seedrandom.prng

    public constructor(
        private readonly width: number, 
        private readonly height: number,
        seed?: string,
    ) {
        this.rng = seedrandom(seed)

    }

    public generate(): BoardModel {
        

        return new BoardModel(this.width, this.height)

    }

    

    private randf(min: number, max: number): number {
        return min + this.rng.quick() * (max - min)
    }

    private randi(min: number, max: number): number {
        return Math.floor(this.randf(min, max + 1))
    }
}