




































import { Dog, doggo } from "./file1";
import { Cat, Animal, Pet, isDog } from "./file2";

const cat: Cat = {};

// Default parameter, optional value, return type
function f(a = 5, b?: string | number) {
    // Type Alias
    type Falsy = false;
    const x: Falsy = false;
    return x;
}

// Generic interface
interface Collection<T> {
    item: T[];
}

const dogSize = (dog: Dog): number => {
    // Exhaustiveness checking
    switch (dog.breed) {
         case "kleinspitz":
         return 0;

         case "mittelspitz":
         return 1;

         case "keeshond":
         return 2;
    }
};

class Park {
    pets: Pet[];
    public constructor(pets: Pet[]) {
        this.pets = pets;
    }

    public dogs() {
        return this.pets.filter(isDog);
    }
}

console.log((new Park([doggo, cat])).dogs());

// Tuples
const tuple: [string, number] = ["abc", 3];

// Enums
enum Color {Red, Green, Blue}
