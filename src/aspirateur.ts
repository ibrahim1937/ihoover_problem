"use strict";
import { deplacementsType, deplacementsXType, deplacementsYType, aspirateurType, DimensionsType } from "./types";


const DEFAULT_DIMENSIONS = {
  x: 10,
  y: 10,
}


/**
 * Dictionnaire des déplacements possibles
 * @type {Object}
 * @property {Object} N - Dictionnaire des déplacements possibles depuis le Nord
 * @property {string} N.G - Direction à prendre en tournant à gauche depuis le Nord
 * @property {string} N.D - Direction à prendre en tournant à droite depuis le Nord
 * @property {Object} E - Dictionnaire des déplacements possibles depuis l'Est
 * @property {string} E.G - Direction à prendre en tournant à gauche depuis l'Est
 * @property {string} E.D - Direction à prendre en tournant à droite depuis l'Est
 * @property {Object} S - Dictionnaire des déplacements possibles depuis le Sud
 * @property {string} S.G - Direction à prendre en tournant à gauche depuis le Sud
 * @property {string} S.D - Direction à prendre en tournant à droite depuis le Sud
 * @property {Object} W - Dictionnaire des déplacements possibles depuis l'Ouest
 * @property {string} W.G - Direction à prendre en tournant à gauche depuis l'Ouest
 * @property {string} W.D - Direction à prendre en tournant à droite depuis l'Ouest
 */


const deplacements : deplacementsType = {
  "N": {
    "G": "W",
    "D": "E",
  },
  "E": {
    "G": "N",
    "D": "S",
  },
  "S": {
    "G": "E",
    "D": "W",
  },
  "W": {
    "G": "S",
    "D": "N",
  },
}


/**
 * Dictionnaire des déplacements possibles en X
 * @type {Object}
 * @property {number} N - Déplacement en X depuis le Nord
 * @property {number} E - Déplacement en X depuis l'Est
 * @property {number} S - Déplacement en X depuis le Sud
 * @property {number} W - Déplacement en X depuis l'Ouest
 * 
 */

const deplacementsX : deplacementsXType = {
  "N": 0,
  "E": 1,
  "S": 0,
  "W": -1,
}

/**
 * Dictionnaire des déplacements possibles en Y
 * @type {Object}
 * @property {number} N - Déplacement en Y depuis le Nord
 * @property {number} E - Déplacement en Y depuis l'Est
 * @property {number} S - Déplacement en Y depuis le Sud
 * @property {number} W - Déplacement en Y depuis l'Ouest
 */

const deplacementsY : deplacementsYType = {
  "N": 1,
  "E": 0,
  "S": -1,
  "W": 0,
}

/**
 * 
 * @param aspirateur les données de l'aspirateur
 * @param dimensions les dimensions de la grille
 * @returns aspirateur avec une mise à jour des données de ce dernier
 */

const deplacerXY = (aspirateur : aspirateurType, dimensions: DimensionsType = DEFAULT_DIMENSIONS) => {
  let somme_x = aspirateur.x + deplacementsX[aspirateur.direction]
  let somme_y = aspirateur.y + deplacementsY[aspirateur.direction]
  if(somme_x < 0 || somme_x > dimensions.x - 1 || somme_y < 0 || somme_y > dimensions.y - 1) {
    throw new Error("Déplacement impossible")
  }
  aspirateur.x = somme_x
  aspirateur.y = somme_y
  return aspirateur
}


/**
 * 
 * @param aspirateur les données de l'aspirateur
 * @param instruction les instructions à appliquer A, D ou G
 * @returns aspiratuer avec une mise à jour des données de ce dernier => changement de direction ou de position
 */

const deplacer = (aspirateur : aspirateurType, instruction : "G"| "D" | "A", dimensions: DimensionsType = DEFAULT_DIMENSIONS) => {
  if (instruction === "A") {
    aspirateur = deplacerXY(aspirateur, dimensions);
    return aspirateur;
  }

  if(instruction === "G" || instruction === "D") {
    aspirateur.direction = deplacements[aspirateur.direction][instruction];
    return aspirateur;
  }
    
  throw new Error("Instruction non reconnue")
}


/**
 * 
 * @param aspirateur les données de l'aspirateur => les données initiales
 * @param instructions tous les déplacements à effectuer
 * @returns les nouvelles données de l'aspirateur
 */
const deplacerAspirateur = (aspirateur : any, instructions : any, dimensions : DimensionsType = DEFAULT_DIMENSIONS) => {
  for (let i = 0; i < instructions.length; i++) {
      aspirateur = deplacer(aspirateur, instructions[i], dimensions);
  }
  return aspirateur;
}

export { deplacerAspirateur }
