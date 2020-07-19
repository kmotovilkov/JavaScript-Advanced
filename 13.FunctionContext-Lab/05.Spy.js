function Spy(object, methodName) {
    const spy = {count: 0};
    const method = object[methodName];
    if (!method) {
        throw new Error("No such method!");
    }
    object[methodName] = function (...args) {
        this.count++;
        return method.apply(object, args);
    }.bind(spy);
    return spy;
}


let obj = {
    method: () => "invoked"
}
let spy = Spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy) // { count: 3 }
