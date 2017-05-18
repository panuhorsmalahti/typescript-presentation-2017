




































import { Dog, doggo } from "./file1";

export interface Animal {}
export interface Cat extends Animal {}

// Union Type
export type Pet = Dog | Cat;

interface FourLegged {
    legs: 4;
}

// Intersection Type
type FourLeggeedCat = Cat & FourLegged;

const pet: Pet = {};

// pet.age = 5;

// User defined Type Guard
export const isDog = (pet: Pet): pet is Dog => pet.hasOwnProperty("breed");

if (isDog(pet)) {
    console.log(pet.breed);
} else {
    // console.log(pet.breed);
}

// Type inference
(<Dog[]> []).forEach(dog => {
    console.log(dog.age);
});
