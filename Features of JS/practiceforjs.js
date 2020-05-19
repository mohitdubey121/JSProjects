/*var john={
    firstName:'john',
    birth:'1990',
    job:'carpenter'
}

var Person = function(firstName,birth,job){
    this.firstName = firstName;
    this.birth = birth;
    this.job = job;
    }

Person.prototype.age = function(){
    console.log(2020 - this.birth);
}
Person.prototype.lastName = function(){
    console.log('smith');
}

var john = new Person('john','1990','carpenter');
var smith = new Person('smith','1995','carpenter');
var jane = new Person('jane','1980','carpenter');
john.lastName();
smith.lastName();
jane.lastName();*/





/*var years = [1990,1991,1992,1993,1994]

function calcArrays(arr,fn){
    var arr1 = [];
    for (var i = 0; i<arr.length; i++){
        arr1.push(fn(arr[i]));
    }
    return arr1;
}

function calculateAge(el){
    return 2016 - el;
}

function isValidAge(el){
    return el > 18;
}

function calcHeartRate (el) {
    if(el >=18 && el <= 81){
        return Math.round(206.9 - (0.69 * el));
    }
    else{
        return -1;
    }
}
var ages = calcArrays (years,calculateAge);
console.log(ages);

var validAge = calcArrays (ages,isValidAge);
console.log(validAge);

var heartRate = calcArrays (ages, calcHeartRate);
console.log(heartRate);*/ 






/*function interviewquestion(task){
    if(task === 'teacher'){
        return function(name){
            console.log('hello'+ name);
        }
    }
    else if(task === 'carpenter'){
        return function(name){
            console.log('hello'+ name);
        }
    }
    else{
        console.log('hllooowwwww');
    }
}

var interviewquestion1 = interviewquestion('teacher');
console.log (interviewquestion1);
interviewquestion1('rohit');
interviewquestion('teacher')('rohit');//this will also work becoz it will go from left to right
*/





/*function game (){
    var data = Math.random() * 10;
    console.log(data > 5);
}
game();
here we are simply creating function to hide the data variable so there is simple extension to this

 (function () {
     var data = Math.random() * 10;
     console.log(data > 5);
 })();
 //these are calld IIFE(immediate invoked function expression)

//or

 (function (goodluck) {
    var data = Math.random() * 10;
        console.log(data >= 5 - goodluck);
})(5);
/*




              //////////////////////////////////
              //Closures

/* function retirement(retirementAge){
    var a='years left for retirement'
    return function(birthDate){
        var age = 2020 - birthDate;
        console.log((retirementAge-age)+ a );
    }
}

var retirementUS=retirement(65);
retirementUS(1990);
var retirementGermany=retirement(67);
var retirementIndia=retirement(60);
retirementGermany(1991);
retirementGermany(1997);

retirement('60')('1996');

function interviewquestion(task){
    return function(name){
        if (task === 'teacher'){
            console.log('hello'+ name);
        }else if(task === 'carpenter')
        {
            console.log('hello'+ name);
        }
        else{
            console.log('hllooowwwww');
        }
            
        }
    }  
var interviewquestion1 = interviewquestion('teacher');
console.log (interviewquestion1);
interviewquestion1('rohit');
interviewquestion('teacher')('rohit');//this will also work becoz it will go from left to right
*/



        ////////////////////////////////////////////////////////////////////
        //bind,call,apply

/*var john = {
    name:'john',
    age:'26',
    job:'carpenter',
    presentation:function (style,timeofday){
        if (style === 'formal'){
            console.log('mammmmmm!!!!!, ' + ' good ' + timeofday + ', ' + 'myself ' + this.name + '.' + ' My age is ' + this.age + '.' + ' I m a ' + this.job)
        } else if (style === 'friendly'){
            console.log('hii watsupp man!!!!!, ' + ' good ' + timeofday + ', ' + 'myself ' + this.name + '.' + ' My age is ' + this.age + '.' + ' I m a ' + this.job)
        }
    }
}
john.presentation('friendly','morning');
*/
        ///////////////////////////////////////////////////////////////////////
        //call

/*var emily = {
    name:'emily',
    age:'30',
    job:'designer'
}

john.presentation.call(emily,'formal','afternoon');
*/


        /////////////////////////////////////////////////////////////////////////
        //apply

//apply is same as john but it only accepts argument as array

// john.presentation.call(emily,['formal','afternoon']);


        ///////////////////////////////////////////////////////////////////////
        //bind doesn't call the function but store the copy of the functon

/*var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('night');
johnFriendly('evening');

var emilyFriendly = john.presentation.bind(emily,'formal');
emilyFriendly('night');
emilyFriendly('evening');*/


/*var years = [1990,1965,1937,2005,1998]
    function calcArrays(arr,fn){
        var arr1 = [];
        for (var i = 0; i<arr.length; i++){
            arr1.push(fn(arr[i]));
        }
        return arr1;
    }
    
    function calculateAge(el){
        return 2016 - el;
    }
    
    function isFullAge(limit,el){
        return el > limit;
    }

var ages = calcArrays(years,calculateAge);
console.log(ages);
var Japanage = calcArrays(ages, isFullAge.bind(this,19));
console.log(Japanage); */        

//here we not passing just a fullAge function but a copy of fullAge function with 20 as a preset argument for the limiwith 20 as a preset argument for the limit




//////////////////////////////////////////////////////////////////////////////////////////////
////quiz coding challenge



( function (){
    var count=0;
    function quizQuestion(question,answer,correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
        }
    
    quizQuestion.prototype.displayQuestion = function()  {
        console.log(this.question);
        for(var i = 0; i < this.answer.length ; i++){
            console.log(i + ': ' + this.answer[i]);
        }
    }
    
    quizQuestion.prototype.checkAnswer = function(ans){
        if(ans === this.correct){
            count += 1;
            console.log('correct answer.' + ' score: ' + count);
    
        }
        else{
        console.log('wrong answer' + ' score: '+ count);
        }

    }
    
    var ques1 = new quizQuestion('do you love js:',['yes','no'],0);
    var ques2 = new quizQuestion('WWW stands for:',['World Worm Web','World Wide Web','World Word Web','None of the above'],1);
    var ques3 = new quizQuestion('Which of the following software is used to view web pages?',['Web Browser','Internet Browser','Page Browser','All of the above'],3);
    var ques4 = new quizQuestion('What does HTML stands for?',['Hypertext Machine language.','Hypertext and links markup language.','Hypertext Markup Language.','Hightext machine language'],2);
    var ques5 = new quizQuestion('Which of the following software is used to view web pages?',['Web Browser','Internet Browser','Page Browser','All of the above'],3);
    var ques6 = new quizQuestion('Which of the following HTML Elements is used for making any text bold ?',['<p>','<i>','<li>','<b>'],3);
        
    var questions = [ques1, ques2, ques3, ques4, ques5,ques6];

    function randomQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = (prompt('please select correct answer.'));
        if (answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer));
            randomQuestion();
        }
    }
    randomQuestion();

})();
