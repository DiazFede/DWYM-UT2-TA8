function getAge(yearOfBirth, yearOfDeath) {
  return (yearOfDeath || new Date().getFullYear()) - yearOfBirth;
}

function findTheOldest(people) {
  return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
  });
}

const people = [
  {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
  },
  {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
  },
  {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
  },
];

const oldestPerson = findTheOldest(people);
console.log(`La persona mas vieja es ${oldestPerson.name}, que vivio ${getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)} años.`);
