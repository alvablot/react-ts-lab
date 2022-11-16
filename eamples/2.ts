async function fetchData(path: string): Promise<unknown> {
    const response = await fetch(path);
    return await response.json();
}

type Person = {
    id: string;
    name: string;
};

function isPerson(person: any): person is Person {
    return "id" in person && "name" in person;
}

async function fetchPerson(id: string): Promise<Person | null> {
    const person = await fetchData("/users/5");
    if (person && isPerson(person)) {
        return person;
    }
    return null;
}
