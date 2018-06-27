const RandomCharacter = require('../node/index.js');

const randomCharacter = new RandomCharacter();
const randomCharacter2 = new RandomCharacter({
    lastName: '연이정김조임김',
    firstName: '병화유미태운동임기현승민호혜진'
});

console.log(`Default: ${randomCharacter.generate()}`);
console.log(`Id: ${randomCharacter.generate({type: 'lower, upper', size: 10})}`);
console.log(`Password: ${randomCharacter.generate({type: 'digit, lower, upper', size: 255})}`);
console.log(`Name: ${randomCharacter2.generate({type: 'lastName'})}${randomCharacter2.generate({type: 'firstName', size: 2})}`);
console.log(`Tel: 010-${randomCharacter.generate({size: 4})}-${randomCharacter.generate({size: 4})}`);
console.log(`Content: ${randomCharacter.generate({type: 'digit, lower, upper, korean, special', size: 100})}`);

