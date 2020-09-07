function result() {
    let n1, n2, result;

    function init(n1Sel, n2Sel, resultSel) {
        n1 = $(n1Sel);
        n2 = $(n2Sel);
        result = $(resultSel);
    }

    function add() {
        action((a, b) => a + b);
    }

    function subtract() {
        action((a, b) => a - b);
    }

    function action(operation) {
        let val1 = Number(n1.val());
        let val2 = Number(n2.val());
        result.val(operation(val1, val2));
    }

    let model = {init, add, subtract};
    return model;
}