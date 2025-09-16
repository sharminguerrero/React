const characterNames = ['Goku', 'Vegeta', 'Thunks'];

const [ , ,  thunks] = characterNames;

console.log({thunks});

const returnsArrayFn = () => {
     return ['ABC' , 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);


// Tarea:

const useState = (value: string) =>  {
     return [
          value, 
          (newValue: string) =>  {
               console.log(newValue);
          },
     ] as const;
}

const [name, setName] = useState ('Goku');
console.log(name);
setName('Vesgeta');