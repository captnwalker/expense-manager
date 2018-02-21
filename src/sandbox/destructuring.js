// const person = {
//     name: 'Steve',
//     age: 25,
//     location: {
//         city: 'Tampa',
//         temp: 65
//     }
// };

// const { name = 'Dudeski', age } = person;
// console.log(`${name} is ${age}.`);


// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}.`);

// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Dude',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Pub' } = book.publisher;
// console.log(publisherName); 


//ARRAY DESTRUCTURIN

const address = ['1299 S Juniper Street', 'Philly', 'PN', '19785'];
const [street, city, state, zip]
= address;
console.log(`You are in ${city} ${state}.`);
