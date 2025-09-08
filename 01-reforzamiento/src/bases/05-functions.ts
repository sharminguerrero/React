function greet (name:string) {
    return `Hola ${name}`
}

const greet2 = (name:string) => `Hola ${name}`;

// const greet2 = (name:string) => {
//     return `Hola ${name}`
// }

 interface User {
    uid: string,
    userNmae: string
 } 


function getUser () : User {
    return{
        uid: 'ABC-123',
        userNmae: 'ELMejor25',
    }
}

const getUser2 = () => ({
        uid: 'ABC-123',
        userNmae: 'ELMejor25Flecha',
})

// const getUser2 = () => {
//     return{
//         uid: 'ABC-123',
//         userNmae: 'ELMejor25Flecha',
//     }
// }
 
const user2 = getUser2 ();
const user = getUser();
console.log(user, user2);
const message = greet ('Goku');
const message2 = greet2 ('Vegeta');

console.log(message, message2);


const myNumbers: number[] = [1,2,3,4,5];

// myNumbers.forEach(function (value){
//     console.log({value});
// });

// myNumbers.forEach((value) => { 
//     console.log(value);
// });

myNumbers.forEach(console.log);