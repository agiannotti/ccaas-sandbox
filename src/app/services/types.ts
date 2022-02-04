export interface Pokemon {
  abilities: ability[];
  species: species;
  sprites: sprites;
}

interface ability {
  name: string;
  url: string;
}

interface species {
  name:string;
  url:string;
}

interface sprites {
  front_shiny: string;
}


