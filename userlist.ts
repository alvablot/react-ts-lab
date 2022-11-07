// Med följande exempel-data, definiera typen User och använd typen i koden.

type User = { name: string; age: number; favoriteFood: string };

const users: User[] = [
    {
        name: "Ryan Dahl",
        age: 25,
        favoriteFood: "Nuggets",
    },
    {
        name: "Bryan Dahl",
        age: 31,
        favoriteFood: "Brunkål",
    },
];

function person(user: User) {
    console.log(`${user.name} is ${user.age} years old and loves ${user.favoriteFood}`);
}

users.forEach(person);
