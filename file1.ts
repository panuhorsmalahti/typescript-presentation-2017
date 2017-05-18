





































// Type inference
let foo = "bar";
// foo = 5; // error

// any
let a: any = "abc";
a = 5;
foo = a;

// Arrays
const axes: string[] = ["x", "y"];

// Interface
export interface Dog {
    age: number;
    // Literal type
    breed: "kleinspitz" | "mittelspitz" | "keeshond";
}

export const doggo = { age: 10, breed: "mittelspitz" };

const hello = (dog: Dog) => `Hello. Yes, this is dog. I am ${dog.breed}`;
