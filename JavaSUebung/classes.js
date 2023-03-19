// Classes
class Person {

    constructor(firstname,lastname,gender, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.age = age;
    }

    sleep() {
        console.log(`${this.firstname} is sleeping`)
    }

    eat() {
        console.log(`${this.firstname} is eating`)
    }

    get fullName(){
        return this.firstname + " " + this.lastname
    }

    set fName(fName){
        this.firstname = fName;
    }

    toString(){
        return `Firstname: ${this.firstname} Lastname: ${this.lastname} Gender:  ${this.gender} Age:  ${this.age}`
    }


}

class SoftwareEngineer extends Person{

    constructor(firstname,lastname,gender, age, programmingLanguages) {
        super(firstname,lastname,gender,age);
        this.programmingLanguages = programmingLanguages;
    }

    code(){
        console.log(`${this.fullName} is coding with ${this.programmingLanguages}`)
    }

}

export {
    Person,
    SoftwareEngineer
};