const phones = [
    {name: 'vivo', price:12000, model: 'KT3'},
    {name: 'oppo', price:11000, model: 'K43'},
    {name: 'nokia', price:5000, model: 'G3'},
    {name: 'realme', price:20000, model: 'KD3'},
    {name: 'samphony', price:1000, model: 'K4'},
    {name: 'lava', price:10000, model: 'K789'}
];
const myOutput = phones.find(phone =>phone.price == 5000);
console.log(myOutput);