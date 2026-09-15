import { fakerES as faker } from '@faker-js/faker'; // O /locale/en si lo quieres en inglés

export class DataFaker {

    static get nameFaker() {
        return faker.person.fullName();
    }

    static get countryFaker() {
        return faker.location.country();
    }
    static get cityFaker() {
        return faker.location.city();
    }
    static get creditCardFaker() {
        return faker.finance.creditCardNumber();
    }
    static get monthFaker() {
        return new Date().toLocaleString('es-ES', { month: 'long' });
    }
    static get yearFaker() {
        return new Date().getFullYear().toString(); 
    } 
}