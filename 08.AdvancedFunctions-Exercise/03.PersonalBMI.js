function solve(name, age, weight, heighCM) {
    const output = {
        name,
        personalInfo: {
            age,
            weight,
            height: heighCM
        }
    };

    const heightM = heighCM / 100;
    const bmi = Math.round(weight / (heightM ** 2));
    let status = "";
    output["BMI"] = bmi;

    if (bmi < 18.5) {
        status = "underweight";
    } else if (bmi < 25) {
        status = "normal";
    } else if (bmi < 30) {
        status = "overweight";
    } else {
        status = "obese";
        output.recommendation = "admission required";
    }

    output["status"] = status;
    return output;
}

console.log(solve("Peter", 29, 75, 182));
console.log(solve("Honey Boo Boo", 9, 57, 137));