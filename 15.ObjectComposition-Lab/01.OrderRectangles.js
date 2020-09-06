function solve(data) {
    const recPrototype = {
        area() {
            return this.height * this.width;
        }, compareTo(otherRec) {
            const currentRecArrea = this.area();
            const otherRecArea = otherRec.area();
            return otherRecArea - currentRecArrea || otherRec.width - this.width;
        }

    };

    function createRec(width, height) {
        const result = Object.create(recPrototype);
        result.width = width;
        result.height = height;
        return result;
    }

    return data.reduce(function (acc, [width, height]) {
        return acc.concat(createRec(width, height));
    }, []).sort((a, b) => {
        return a.compareTo(b);
    });
}

const data = [[10, 5], [5, 12]];
console.log(solve(data));
