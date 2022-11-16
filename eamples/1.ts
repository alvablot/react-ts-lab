function multiply(a: number, b: number) {
    return a * b;
}

const result = multiply(10, 20);
let date = new Date();

const firstName = "Ryan";
const age = 30;
const tomorrow = new Date();

const dog = "Riffe";
const pet = dog;

let food; // any
food = "nuggets";
food = false;

function trumpLoan(wallet = 1) {
    return wallet + 1000000;
}
const myWallet = trumpLoan(0);
// console.log(myWallet);

function scheduleReminder(startDate: Date): Date {
    const result = new Date(startDate);
    result.setDate(result.getDate() + 7);
    return result;
}

let myVariable;
myVariable = "asdasd";
myVariable = 12;
myVariable = [];

let he: void;
he = undefined;

const hej: string = "";
// if (!hej) console.log("hej");

const myObject: object = [
    {
        namn: "Börje",
    },
];

function countPoints(name: string, ...points: number[]) {
    // console.log(name, points);
}
countPoints("ryan", 1, 2, 3);

let count = true;
const keepSwimming = (ocean: string) => {
    while (false) {
        console.log(`Swimming through the ${ocean}`);
    }
};

function combine(a: unknown, b: unknown) {
    if (typeof a === "number" && b === "number") return a + b;
    return 0;
}

export {};
