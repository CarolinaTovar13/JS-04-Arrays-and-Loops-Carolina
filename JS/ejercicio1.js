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

