//  jshint eversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperheroesName = superheroes.random();

var mySupervillainsName = supervillains.random();

console.log(mySuperheroesName);
console.log(mySupervillainsName);