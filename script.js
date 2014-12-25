/*  Created by 01935-Asim on 20-Dec-14. */



// Question 1


var num=[],max;

for(var i=0; i<2; i++ ){
    num[i]= +prompt("Enter a number");
}

max = maxNum(num[0],num[1]);
document.write("Largest number is: "+max);

function maxNum(a,b){
    if(a > b){
        return a;
    }
    else {
        return b;
    }
}



// Question 2


var num =[];

for(var i=0; i<3; i++ ){
    num[i]= +prompt("Enter a number");
}

num.sort(function(a,b){return a-b});
document.write(num[1]);



// Question 3


var cVowel=0,cCons=0, vowel= ["A","a","E","e","I","i","O","o","U","u"], word;

word = prompt("Enter a 'String'");
word = word.split("");

for(var i = 0; i < word.length; i++){
    for(var j = 0; j < vowel.length; j++){
        if (word[i]==vowel[j]){
            word.splice(i, 1);
            i--;       // word should be an array for call method splice on it..
                       // And if you splice inside of loop, you need to decrement on i.
            cVowel++;
        }
    }
}

for(var i=0; i< word.length; i++){
    document.write(word[i]);
    if(word[i]== " ") {
       // Does nothing.
    } else {
        cCons++;
    }
}
document.write("<br />Number of Vowels "+cVowel+"<br />Number of Consonants "+cCons);



// Question 4


var vowel= ["A","a","E","e","I","i","O","o","U","u"], string, count=0;

string = prompt("Enter a 'Sentence'");
string = string.split("");
translate(string);

function translate(str) {


    for (var i = 0; i < str.length; i++) {
        var bool = false;
        for (var j = 0; j < vowel.length; j++) {

            if (string[i] != vowel[j]) {
                bool = true;
            } else {
              count++;
            }
        }
        if(str [i] == " "){
            // Does nothing.
        } else if(bool && count == 0) {
            str.splice(i, 0, str[i]);
            str.splice( i+1, 0, "o");
            i += 2;
        }
        count = 0;
    }

}

for(var i=0; i < string.length; i++) {
    document.write(string[i]);
}



// Question 5


var num, result = [], total=0;
num = prompt("Enter Five '5' Numbers Separated by a 'Comma'");
num = num.split("");


for (var i=0; i<num.length; i++) {          // string.filter();
    if (num[i] == ",") {
        num.splice(i, 1);
        i--;
    }
}

for (var i=0; i<num.length; i++) {
    if (i+1 < num.length){
        result[i]=num[i]*num[i+1];
    } else {
        result[i]=num[i]*num[i-(num.length-1)];
    }
        total += result[i];
}

document.write("["+result+"]<br />Total Sum of Resulted Array is: "+total);



// Question 6


var string, result=[];

string = prompt("Enter a 'String'");
string = string.split(" ");

reverse(string);

function reverse(str) {
    for (var i=0; i< str.length; i++) {
        str[i] = str[i].split("");
        result[i] = str[i].reverse();
        result[i] = result[i].join("")+" ";
    }
}

result = result.join("");
document.write(result);



// Question 7


var string;

string = prompt("Enter a String");
string = string.split(" ");

findLongestWord(string);

function findLongestWord(str) {
    str.sort(function(a,b) {return b.length - a.length});
}

document.write("Longest Word is: "+string[0]+"<br />And its Length is: "+string[0].length);



// Question 8


var i= 0,str, size, gThen=[];

str = prompt("Enter a String and Integer Value (Separate it by ',')");
str = str.split(" ");
str[(str.length)-1] = str[(str.length)-1].split("");
size = Number(str[(str.length)-1].pop());
str[(str.length) - 1].pop();

if (typeof str[(str.length) - 1] == "object") {
    str[(str.length) - 1] = str[(str.length) - 1].join("");
}

for (var j=0; j<str.length; j++) {
    if (str[j].length > size) {
        gThen[i] = str[j];
        i++;
    }
}

gThen.sort(function(a,b) {return b.length - a.length});

gThen = gThen.join("\",\"");
document.write("[\""+gThen+"\"]");



// Question 9 ....


// Question 10


var age, bYear, cYear;
bYear = prompt("Enter Your Birth Year");
cYear = new Date().getFullYear();            // returns the current year
age = cYear - bYear;
document.write("Your are "+age+" years old");