import { Building } from "./building.model";

export class Organization{

    buildings: Building[]=[];
    nbPersonIn:number=0;
    nbPersonCapacity:number = 0;

    constructor(public nom:string){

    }

    getBuilding(){
        return this.buildings;
    }

}