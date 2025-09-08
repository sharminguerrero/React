interface Person {
 firstName: string,
    lastName: string,
    age: number,
    adresss: Address
}


interface Address {
     postalCode: string,
        city: string
}


const ironMan : Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 40,
    adresss : {
        postalCode: '15116',
        city: 'Santo Domingo'
    }
};

console.log(ironMan);

// const spiderMan = structuredClone(ironMan);

// spiderMan.firstName = 'Peter';
// spiderMan.lastName = 'Parker';
// spiderMan.age = 22;
// spiderMan.adresss.city = 'Santiago';
// spiderMan.adresss.postalCode = '71094';

