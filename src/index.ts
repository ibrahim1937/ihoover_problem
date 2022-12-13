import { deplacerAspirateur } from "./aspirateur";
import { aspirateurType, DimensionsType } from "./types";

// Données initiales
const aspirateur : aspirateurType = {
  x: 5,
  y: 5,
  direction: "N",
}

const dimensions : DimensionsType = {
  x: 10,
  y: 10,
}

// Instructions
const instructions : string = "DADADADAA";

try{
  let aspirateurTest = deplacerAspirateur(aspirateur, instructions, dimensions);
  console.log(aspirateurTest)
}catch(e: any){
  console.error(e.message)
}


