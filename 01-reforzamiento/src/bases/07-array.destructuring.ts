const characterNames = ['Goku', 'Vegeta', 'Thunks'];

const [ , ,  thunks] = characterNames;

console.log({thunks});

const returnsArrayFn = () => {
     return ['ABC' , 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);