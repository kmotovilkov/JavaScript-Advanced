function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;


    Object.defineProperty(this,
        "fullName", {
            set(value) {
                let arrName = value.split(" ");
                if (arrName.length !== 2) {
                    return;
                }
                this.firstName = arrName[0];
                this.lastName = arrName[1];
            },
            get() {
                return this.firstName + " " + this.lastName;
            }
        });
}


let person = new Person("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName);
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Nikola Tesla";
console.log(person.firstName)
console.log(person.lastName)
