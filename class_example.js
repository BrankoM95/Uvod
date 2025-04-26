"use strict";

class Car {
    proizvodjac;
    model;
    boja;
    registracija;
    zauzet = false;

    constructor(maker, model, color) {
        this.proizvodjac = maker;
        this.model = model;
        this.boja = color;
    }

    izdatAutomobil() {
        this.zauzet = true;
    }

    vracenAutomobil() {
        this.zauzet = false;
    }

    punoIme() {
        return `${this.proizvodjac} ${this.model}`;
    }
}

let toyotaCorolla = new Car("Toyota", "Corolla", "Crvena");
let bmw316 = new Car("BMW", "316", "Bela");

console.log(`Automobil: ${toyotaCorolla.punoIme()}`);
console.log(`Izdat: ${toyotaCorolla.zauzet}`);
toyotaCorolla.izdatAutomobil();
console.log(`Automobil: ${toyotaCorolla.punoIme()}`);
console.log(`Izdat: ${toyotaCorolla.zauzet}`);

class ElectricCar extends Car {
    punoIme() {
        return `- Hybrid - ${this.proizvodjac} ${this.model}`;
    }

}

class EVC extends ElectricCar {

    evc() {
        return "EVC";
    }

    punoIme() {
        return `* EVC * ${this.proizvodjac} ${this.model}`;
    }

}

let toyotaCorollaHybrid = new ElectricCar("Toyota", "Corolla Hybrid", "Zelena");
console.log(`Automobil: ${toyotaCorollaHybrid.punoIme()}`);
console.log(`Izdat: ${toyotaCorollaHybrid.zauzet}`);

let toyotaCorollaHybrid2 = new EVC("Toyota", "Corolla Hybrid EVC", "Plava");
console.log(`Automobil: ${toyotaCorollaHybrid2.punoIme()}`);
console.log(`Izdat: ${toyotaCorollaHybrid2.zauzet}`);
