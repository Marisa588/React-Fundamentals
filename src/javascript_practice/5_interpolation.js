//string interpolation
const username = "Kenn";
console.log(`${username} is the true JS Wizard`);

//template literals: breaks things into more than one line, and it's handy with HTML
console.log(`Hey students,
What bugs can
${username}
fix
for you today?`);

//interpolation with an object
const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
};

console.log(`${person.username}, ${person.profession}, extraordinaire`); // Kenn, Secret Agent, extraordinaire