const KvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];

const reformattedArray = KvArray.map(({key, value}) => ({[key]: value}));

console.log(reformattedArray); 
console.log(kvArray);