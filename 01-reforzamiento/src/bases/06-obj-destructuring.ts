const person = {
name: 'Tony',
age: 45,
key: 'IronMan'
};

const {key, age, name: ironManName} = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({ironManName, age, key});

interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string
}


const useContext = ({key, age, name, rank = 'Sin rango'}: Hero) => {
return{
   keyName: key,
   user: {
    age,
    name,
   },
   rank:rank,
};
};


const {
    rank, 
    keyName,
    user,
} = useContext(person);

const {name} = user;


console.log({rank, keyName, name});