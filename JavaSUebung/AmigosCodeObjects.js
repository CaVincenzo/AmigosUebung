const person = {
    firstName: "Enzo",
    age: 28,
    isFemale: false,
    balance: 23232,
    dob: new Date(1995,3,1).toJSON(),
    // address:{
    //     city: "Karlsruhe",
    //     plz: 76187
    // },
    toString: function () {
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe: true

};

//person.lastName = "Calamita";
person["lastName"] = "Calamita";

//delete person.deleteMe;
delete person["deleteMe"];

// Name: Enzo Age: 28
console.log(person.toString())
//console.log(person)

// gibt mir alle Werte aus dem Object raus
for(const p in person){
    console.log(person[p])
}

console.log(Object.keys(person)); // alle Properties aus einen Object
console.log(Object.values(person)); // alle Values aus einen Object

console.log()

// const firstName = person.firstName;
// const age = person.age;
// const balance = person.balance;

// bessere Syntax
const {
    firstName,
    age,
    balance,
   // address: {city: town} // city ore Rename with : town
} = person;

console.log("Name lautet: "+ firstName," alter = " + age + " Balance =" + balance );

// Spread Operator on Objects

const adress = {
    city: "London",
    plz: 76187
}

const objectfusion = {
    ...person,
    address: {...adress}
};

console.log(objectfusion)



// Enhanced Object Properties


const brandProp = "BRAND"
const calculator = (brand, prize) => ({
    [brandProp.toLowerCase()]: brand,
    prize,

    getDiscout(){
        return this.prize - (this.prize * .30)
    }
})

const casio = calculator("casio", 100)
console.log(casio)
console.log(casio.getDiscout())