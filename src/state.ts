import React from 'react'

let age: number = 10;
let firstName: string = 'Dimych';
let isMentor: boolean = true;
let ages: number[] = [18, 12, 19, 22, 45];

interface Object {
    name: string,
    height: number,
}

interface ICar {
    model: string,
    year: number,
    on: boolean,
    turnOn: () => void,
    rename: (model: string) => void
}

let car: ICar = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}

interface IGarage {
    addCar: (car: ICar) => void,
    logAllCarsNames: () => void,
    getAllCars: () => void,
}

let createGarage = (): IGarage => {
    let _cars: ICar[] = [];

    return {
        addCar(car: ICar) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach((c: ICar) => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}


createGarage()

let man1: Object = { name: 'Dima', height: 1.78 }
let man2: Object = { name: 'Sasha', height: 1.8 }

let man: Object[] = [man1, man2]

function toUpperCase(strings: string[]) {
    let result = strings.map(s => s.toUpperCase());
    return result;
}

let createMan = (name: Object, height: Object) => {
    return {
        name,
        height
    };
}







export default 15;