function findTheOldest(people) {
    const oldest = people.reduce((oldestPerson, currentPerson) => {
      const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      return oldestAge < currentAge ? currentPerson : oldestPerson
    })
  
    return oldest
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
  ]

findTheOldest(people);