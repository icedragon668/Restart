// Using the require keyword lets us access all of the exports
// in our developer.js file
const developer = require('./bedazzled.js');

// This will print everything in exports.
console.log('--------------------------');
console.log('ALL THE DATA FROM ANOTHER FILE');
console.log(developer);
console.log('--------------------------');

// These will print correctly because we exported them
console.log('DEVELOPER TOOLS');
console.log(developer.developerTools);
console.log('--------------------------');

// We can also call methods that we defined in another file
console.log('DEVELOPER REMINDER');
developer.note();

// This won't print anything because it wasn't exported in developer.js
console.log('--------------------------');
console.log('THINGS WE DON\'T NEED');
console.log(developer.somethingWeDontNeed);
