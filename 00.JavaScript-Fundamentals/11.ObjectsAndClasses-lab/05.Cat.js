function cat(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow= () =>{
                console.log(`${name}, age ${age} says Meow`);
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let data = current.split(" ");
       let  name = data[0];
        let age = data[1];
        let cat=new Cat(name,age);
        cat.meow();
    }
}

cat(['Mellow 2', 'Tom 5']);