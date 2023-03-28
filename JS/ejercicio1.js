let namesBank = [ "Sofía","David","Juan" ];
console.log(namesBank.length);
console.log("Parte1: " +namesBank);

// Two more people get added to the back of the line - Sara and Augustin.
// The first person in line is called to the teller.
// What does the queue look like?

namesBank.push ("Sara", "Agustín");
namesBank.shift();
console.log("Parte2: " + namesBank);

// // It turns out David was saving a spot 
// for his friend Renata.
// She shows up and goes behind him in the line. 
// One more person (Elena) shows up and goes 
// to the end of the line.
// // What does the queue look like?

namesBank.splice(1,0,"Renata");
console.log("Parte3a: " + namesBank);
namesBank.push("Elena");
console.log("Parte3b: " + namesBank);

console.log("********************Segunda Parte**********************");

// // Write a JavaScript program to construct 
// the following pattern, 
// using a nested for loop.

// // ```
// // *  
// // * *  
// // * * *  
// // * * * *  
// // * * * * *
// // ```


let star
for (let a = 1; a <= 5; a++) {
    star = ''
    // console.log("El valor de a1:" + a);
    for (let b = 1; b <= a; b++) {
        star += '*'
        // console.log("El valor de a2:" + a);
        // console.log("El valor de b2:" + b);
    }
    console.log(star)
}


console.log("********************Tercera Parte**********************");

console.log("3a");
// Repeatedly print the value of the variable xValue,
//  decreasing it by 0.5 each time,
// as long as xValue remains positive.

let cont=6;
while(cont>=0){
    console.log(cont);
    cont-=0.5;
}

// for (let cont=6; cont>=0; cont-=0.5){
//     console.log(cont);

// }


console.log("3b");
// - Print all the odd numbers between 1 - 100.

number=1
while(number<=100){
if (number%2 !=0){
    console.log(number);
}
number++;
}

console.log("3c");
// - Write a method with a while loop to 
// print 1 through n in square brackets. 
// For example, 
// if n = 6 print [1] [2] [3] [4] [5] [6]

number=0
while(number<=10){
    console.log([number]);
number++;
}


console.log("3c");
// - Write a method with a while loop that computes 
// the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
// ```

let n=5, integers = 1, suma=0;
while(integers<=n){
    suma+=integers;
    integers++;
    console.log((suma));
}

