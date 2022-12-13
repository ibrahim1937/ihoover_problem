
interface directionsType {
  G: "N" | "E" | "S" | "W";
  D: "N" | "E" | "S" | "W";
}

interface deplacementsType {
  N: directionsType
  E: directionsType
  S: directionsType
  W: directionsType
}

interface deplacementsXType {
  N: number;
  E: number;
  S: number;
  W: number;
}

interface deplacementsYType {
  N: number;
  E: number;
  S: number;
  W: number;
}

interface aspirateurType {
  x: number;
  y: number;
  direction: "N" | "E" | "S" | "W";
}

interface DimensionsType {
  x: number;
  y: number;
}

export { deplacementsType , deplacementsXType, deplacementsYType, aspirateurType, DimensionsType}