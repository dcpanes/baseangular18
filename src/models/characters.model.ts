export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }
  
  export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
  }
  
  export enum Species {
    Human = "Human",
    Alien = "Alien",
  }
  
  export enum Gender {
    Male = "Male",
    Female = "Female",
    Genderless = "Genderless",
    Unknown = "unknown",
  }
  
  export interface Origin {
    name: string;
    url: string;
  }
  
  export interface Location {
    name: string;
    url: string;
  }
  
  export interface Character {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
  export interface CharacterResponse {
    info: Info;
    results: Character[];
  }
  