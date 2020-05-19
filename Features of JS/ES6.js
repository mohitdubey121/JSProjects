//////////////////////////lecture --- block and IIFE

/*
{
    let a = 5;
    const b = 4;  //these are block scope not function scope
}
console.log(a + b);

or

//ES5 
 (function(){
     let a = 5;
     const b = 4;
 })();
 */

 /////////////////////////lecture --- strings

 /*
 let firstName = 'mohit';
 let lastName = 'dubey';
 const yearOfBirth = 1990;
 function age(year){
     return 2020 - year ;
 }
//ES5
 console.log('hiii,this is ' + firstName + lastName + '.' + 'He is' + age(yearOfBirth) + 'old');

//ES6
console.log(`hiii,this ${firstName}  ${lastName} . He is ${age(yearOfBirth)} old`); //these are called template literal
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('m'));
console.log(n.endsWith('m'));
console.log(n.includes('m'));
console.log(firstName.repeat(5));
console.log(`${firstName} `. repeat(5));
*/

//////////////////////////lecture --- arrow function
//ES5

/*const year = [1960, 1970, 1967, 1980]

const age5 = year.map(function (el){
    return 2020 - el;
})

//ES6
let age6 = year.map(el => 2020 - el);
console.log(age6);

age6 = year.map((el,index) =>`age element ${index + 1}:${2020 - el}`);
console.log(age6);

age6 = year.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `age element ${index + 1}: ${age}.`
});
console.log(age6);
*/

//ES5
/*
var a = {
    color:'green',
    position:'1',
    clickMe: function (){
        var self = this;
        document.querySelector('.container').addEventListener('click',function(){
            var ab = 'this is a ' + this.color + 'box ' + 'with position ' + this.position;
            alert(ab)
        })
    }
}
a.clickMe();
*/


//ES6
/*
var a = {
    color:'green',
    position:'1',
    clickMe: function (){
        document.querySelector('.container').addEventListener('click',() => {
            var ab = 'this is a ' + this.color + ' box ' + 'with position ' + this.position;
            alert(ab)
        })
    }
}
a.clickMe();
*/


/* var a = {
    color:'green',
    position:'1',
    clickMe: () => {
        document.querySelector('.container').addEventListener('click',() => {
            var ab = 'this is a ' + this.color + ' box ' + 'with position ' + this.position;
            alert(ab)
        })
    }
}
a.clickMe();
*/


/* function friends(fname){
    this.fname = fname
}

friends.prototype.myFriends = function(name) {
    var fs = name.map(function(el){
        return this.fname + ' is a friends of ' + el;
    }.bind(this));
    console.log(fs);
}
var person = ['mohit','sohit','sohan'];
new friends('himan').myFriends(person);
*/

/*
function friends(fname){
    this.fname = fname
}

friends.prototype.myFriends = function(name) {
    var fs = name.map( el => this.fname + ' is a friends of ' + el );
    console.log(fs);
}
var person = ['mohit','sohit','sohan'];
new friends('himan').myFriends(person);
*/

////////////////////////////////////////////////////////////////////////
///////Destructuring
/////ES5

/* var john = ['John', 18];
var name1 = john[0];
var age1 = john[1];
console.log(name1 + ' ' + age1);

/////ES6

const [name2, age2] = ['Mohit', 24]
console.log(name2);
console.log(age2);

/////ES6

const a = {
    firstName:'Adarsh',
    age:30
}
const {firstName, age} = a;
console.log(firstName);
console.log(age);



const b = {
    firstName:'Divya',
    age:35
}
const {firstName: abc , age: cdf} = b;
console.log(abc);
console.log(cdf);



function age123 (year){
    var age4 = new Date().getFullYear();
    var age5 = age4 - year;
    return [age5, 65 - age5]
}

const [age6, age7] = age123(1990);
console.log(age6);
console.log(age7);
*/

/////////////////////////////////////////////////
//////////Arrays

//var a1 = document.querySelectorAll('.container');

//////////ES5

/*
var a2 = Array.prototype.slice.call(a1);
a2.forEach(function(curr) {
    curr.style.backgroundColor = 'dodgerblue';
});
*/


//////////ES6

/* var a2 = Array.from(a1); //this transform node list to array
a2.forEach(curr =>{
    curr.style.backgroundColor = 'red';
}) 
*/

//////////ES5

/* var a3 = Array.prototype.slice.call(a1);
for(var i = 0 ; i < a3.length ; i++){
    if(a3[i].className === 'container blue')
        continue;
        else
            a3[i].textContent = 'I Am Blue';
}
*/

//////////ES6

/* var a2 = Array.from(a1);
for (const cur of a2){
    if (cur.includes === 'container blue'){
        continue;
    }
    cur.textContent = 'i changed to blue';
}
*/

///////////ES5

/*
const a2 = [40, 22, 13, 53, 11];
const a3 = a2.map(function(curr){
    return curr >= 20;
})
console.log(a3);
console.log(a3.indexOf(true));
console.log(a2[a3.indexOf(true)]);
*/

///////////ES6
/*
console.log(a2.findIndex(curr => curr >= 20));
console.log(a2.find(curr => curr >= 20));
*/

/////////////////////////////////////////////
////////////Spread Operator

///////////ES5

/*
function calc (a, b, c, d) {
    return a + b + c + d;
}
var a2 = calc (20, 33, 24, 54);
console.log(a2);
*/


////////////ES5
/*
var a = [20, 33, 24, 54] 
function calc (a, b, c, d) {
    return a + b + c + d;
}
var a2 = calc.apply(null, a);
console.log(a2);
*/


////////////ES6
/*
var b = [20, 33, 24, 54] 
function calc (a, b, c, d) {
    return a + b + c + d;
}
var a2 = calc(...b);
console.log(a2);


var c = ['mohit','jain','banti','akash'] ;
var d = ['mohit','jain','banti','akash'] ;
var e = [...c, 'chmara', ...d]
console.log(e);


var a = document.querySelector('p')
var b = document.querySelectorAll('.container');
var c = [a, ...b];
Array.from(c).forEach(curr => curr.style.color = 'green');
*/


//////////////////////////////////////////////////////////////
////////////////lecture- Rest Parameters


///////Rest Parameters is Actually different from spread operator bcoz spread operator takes an array
///////as a input while Rest parameter takes a couple of single values and transforms them as an array

///////ES5

/*
function a (){
    console.log(arguments);
}
 a(1990, 1995, 2000);
//since it will not array return so 
*/

/*
function isFullAge (){
    var b = Array.prototype.slice.call(arguments)
    b.forEach(function(curr){ 
        console.log((2016 - curr) >= 18)
    });
}
isFullAge(1990, 1999, 1965);


function isFullAge (...b2){
    console.log(b2);
    b2.forEach(el => {
        console.log((2016 - el) >= 18)
    });
}
isFullAge(1990, 1999, 1965);
*/

////ES5
/*
function isFullAge (limit){
    console.log(arguments);
    var b = Array.prototype.slice.call(arguments,1)
    console.log(b);
    b.forEach(function(curr){ 
        console.log((2016 - curr) >= limit)
    });
}
isFullAge(21,1990, 1999, 1965);
*/


////ES6
/* function isFullAge (limit, ...b2){
    b2.forEach(el => {
        console.log((2016 - el) >= limit)
    });
}
isFullAge(21,1990, 1999, 1965);
 */

 ////////////////////////////////////
 ////////lecture - Default parameters

//////ES5

/* function smithPerson(firstName, yearOfBirth, lastName, nationality){
    lastName === undefined ? lastName = 'Sharma' : lastName = lastName;
    nationality === undefined ? nationality = 'Indian' : nationality = nationality;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var a = new smithPerson ('mohit',1990,);
var b = new smithPerson ('mohit',1990,'dubey','spain'); */

//////ES6

/* function smithPerson(firstName, yearOfBirth, lastName='Sharma', nationality='Indian'){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var a = new smithPerson ('mohit',1990,);
var b = new smithPerson ('mohit',1990,'dubey','spain');  */

//////////////////////////////////////////////////////////////
////////////lecture - Map
/* 
const question = new Map();
question.set('question','what is the official version of major Javascript version');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('Correct',3);
question.set(true,'Correct Answer');
question.set(false,'Incorrect Answer!!! Please Try Again'); 

if(question.has(4)){
    console.log('Answer 4 is there');
    //question.delete(4);
}
//question.clear();

//we can loop through maps but we can't loop through objects

question.forEach((key, value) => {
    console.log(`${key} ${value}`);///////////////////////////////////////////////wgyuguwgugwaufguwgfwugfugwufukwfgeug

}); */


/* 
for(let [key, value] of question.entries()){
    if (typeof (key) === 'number'){
        console.log(`Answer is ${key} ${value}`)
    }
}
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('Correct'))); */


//////////////////////////////////////////////////////////////////
/////////////lecture - classes
/* 
//ES5
const person = function (firstName, lastName, yearOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth

person.prototype.calculateAge =
    function () {
        var year = new Date().getFullYear() - this.yearOfBirth;
        console.log(year);
    }
}
var a = new person('mohit','dubey',1990);


//ES6
class person6 {
    constructor(firstName, lastName, yearOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth
    }
    calculateAge(){
        var year = new Date().getFullYear() - this.yearOfBirth;
        console.log(year);
    }
    static greeting(){
        console.log('hiiiiiiiiiiii');
    }
}
var b = new person6('mohit','dubey',1990);
 */

 //////////////////////////////////////////////////////////////////////////
 ////////////lecture - Inheritance
 
 ////ES5

/*  var person5 = function (firstName, lastName, yearOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth
 }

person5.prototype.calculateAge = function () {
        var year = new Date().getFullYear() - this.yearOfBirth;
        console.log(year);
}

var athlete = function (firstName, lastName, yearOfBirth, olymicGames, medal){
    person5.call(this, firstName, lastName, yearOfBirth);
        this.olymicGames = olymicGames,
        this.medal = medal;
}
athlete.prototype = Object.create(person5.prototype);

athlete.prototype.calculateMedals = function() {
        this.medal++;
        console.log(this.medal);
    }

var a = new athlete('rohit','dubey',1990,'football', 3);
a.calculateMedals();
a.calculateMedals(); */

//ES6

/* class person6 {
    constructor(firstName, lastName, yearOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth
    }
    calculateAge(){
        var year = new Date().getFullYear() - this.yearOfBirth;
        console.log(year);
    }
    static greeting(){
        console.log('hiiiiiiiiiiii');
    }
}

class athlete extends person6{
    constructor(firstName, lastName, yearOfBirth, olymicGames, medal){
    super(firstName, lastName, yearOfBirth);
    this.olymicGames = olymicGames;
    this.medal = medal;
    }

    calculateMedals(){
        this.medal++;
        console.log(this.medal);
    }
}
var b = new athlete('sohan','dubey',1990,'football',3);
b.calculateAge();
b.calculateMedals();
 */

 /////////////////////////////////////////////////////////////
 /////////////Coding Challenge
/* class town {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}


class parks extends town {
    constructor(name, year, area, treeNumber){
        super(name, year);
        this.treeNumber = treeNumber;
        this.area  = area;//km2
}

treeDensity(){
    var density = this.treeNumber / this.area;
    console.log(`${this.name} has a tree density of ${density} per square km`);
}
}


class streets extends town {
    constructor(name, year, length, size = 3){
        super(name, year);
        this.length = length;
        this.size = size;
    }

classifyStreet(){
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, build in ${this.year}, is a ${classification.get(this.size)} street`);
}
}

function calc(arr){///////reduce method is used to reduce an array to a single value
    const sum = arr.reduce((pre, curr, index) =>
        pre + curr, 0 );

        return [sum, sum / arr.length];
}

var parka = [new parks ('hybrid park', 1990 , 0.4 ,215),
        new parks ('shyam park', 1995 , 2.1, 3541),
        new parks ('aaahan park', 2000 , 4.1 ,4000)];


var streeta =  [new streets('adarsh nagar', 2000, 1.1, 4),
                new streets ('10 s ', 1995 , 2.7, 2 ),
                new streets ('55 bg home road', 2015 , 0.8),
                new streets ('11155 road', 2000 , 2.5, 5)];



function reportPark(p){
    console.log('--------Parks Report--------');

    //Density
    p.forEach(el => el.treeDensity());

    //Average Age 
    const age = p.map(el => new Date().getFullYear() - el.year);
    const [totalAge , avgAge] = calc(age);
    console.log(`our ${p.length} parks has an average length of ${avgAge}  years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.treeNumber).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`)
}




function reportStreets(s){
    console.log('--------Streets Report--------');

    //Total and Average length of the town streets
    const [totalLength , avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} Streets have an total length of ${totalLength} km, with an average of ${avgLength} km.`);

    //Classify sizes
    s.forEach(el => el.classifyStreet());
}

reportPark(parka);
reportStreets(streeta); */