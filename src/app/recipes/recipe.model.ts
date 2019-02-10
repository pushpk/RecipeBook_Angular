import { Ingredient } from "../Shared/ingredent.model";

export class Recipe{

    public name : string;
    public description : string;
    public imagePath : string;
    public ingredeints : Ingredient[];

    constructor(name:string, description:string, imagePath:string, ingredients : Ingredient[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredeints = ingredients;
    };
}