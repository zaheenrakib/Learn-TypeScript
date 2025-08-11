export interface IsPlayer {
   name: string;
   readonly country: string;
   play: () => void;
    getProperty: () => number; // Optional method to get age
}