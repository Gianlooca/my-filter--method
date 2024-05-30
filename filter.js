  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const grownPerson = people.filter(person => person.age >= 21);
console.log(grownPerson);

// Here we appended the [0] to the end of the callback function in order to have access
// directly to the object itself, instead of having an array containing (in this case) just an object.
/// This happens because the filter() method always returns an array, even if it's an array
// of a single element, as in this case would have been
const paul = people.filter(p => p.name === 'Paul')[0];
console.log(paul);


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// Below we can see how complex can be a callback function. In cases like this one,
// it would be better to isolate the callback function and associating it to a variable,
// in order for it to be easily reused and making the general code more readable and
// your intention, as a coder, clear.

// const candidates = students.filter(student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//   return strongSkills.length > 0;
// });

const has5YearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5YearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);

// This is to have just the names of the right candidates. We use the map() method
const names = candidates.map(cand => [cand.name]);

console.log(candidates);
console.log(names);