import React from 'react'

let age: number = 10;
let firstName: string = 'Dimych';
let isMentor: boolean = true;
let ages: number[] = [18, 12, 19, 22, 45];

interface IMan {
    name: string
    height: number
}

export interface ICar {
    model: string
    year: number
    on?: boolean
    turnOn?: () => void
    rename?: (model: string) => void
}

let man1: IMan = { name: 'Dima', height: 1.78 }
let man2: IMan = { name: 'Sasha', height: 1.8 }
let car2: ICar = { model: 'Reno Stepway', year: 2016 }
let man: Array<IMan> = [man1, man2]

function toUpperCase(strings: string[]): string[] {
    let result = strings.map(s => s.toUpperCase());
    return result;
}

let createMan = (name: string, height: number): IMan => {
    return {
        name,
        height
    };
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
    addCar: (car: ICar) => void
    logAllCarsNames: () => void
    getAllCars: () => Array<ICar>
}

export let createGarage = (): IGarage => {
    let _cars: Array<ICar> = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}

