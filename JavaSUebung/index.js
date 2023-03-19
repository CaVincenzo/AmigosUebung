
import {Person,SoftwareEngineer} from "./classes.js";


const enzo = new Person("Enzo","Calamita","Männlich", 28)

const sarah = new Person("Sarah","Deutsch","Weiblich", 27)

const bob = new SoftwareEngineer("Bob","Baumeister","Männlich",30,"Java,C++")

// Properties
console.log(enzo.firstname)
console.log(enzo.gender)
console.log(enzo.age)
console.log(enzo.fullName)

console.log()

enzo.fName = "Vincenzo"

// funktionen, methoden

enzo.sleep()
enzo.eat()
console.log(enzo.toString())


console.log(bob.toString())
bob.code()

