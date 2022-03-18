import { Piece } from "./piece.model";

export class Building{

    nbPersonIn:number=0;
    nbPersonCapacity:number = 0;
    public pieces: Piece[]=[];

    constructor(public nom:string){
    }


}