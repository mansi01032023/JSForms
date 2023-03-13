function bmi() {
    // taking the input as age and weight
    let age = document.getElementById("main__inputAge").value;
    let weight = document.getElementById("main__inputWeight").value;
    //applying the conditions on given age and weight
    if (age == '' || weight == '') {
        document.getElementById("result").innerHTML = "Invalid input";
    } else if (age > 100 || age < 0) {
        document.getElementById("result").innerHTML = "Invalid input";
    } else if (weight > 200 || weight < 0) {
        document.getElementById("result").innerHTML = "Invalid input";
    } else if (age >= 5 && age <= 7) {
        if (weight >= 15 && weight <= 20) {
            document.getElementById("result").innerHTML = "Fit";
        } else if (weight < 15) {
            document.getElementById("result").innerHTML = "Underweight";
        } else if (weight > 20) {
            document.getElementById("result").innerHTML = "Overweight";
        }
    } else if (age >= 8 && age <= 10) {
        if (weight >= 21 && weight <= 25) {
            document.getElementById("result").innerHTML = "Fit";
        } else if (weight < 21) {
            document.getElementById("result").innerHTML = "Underweight";
        } else if (weight > 25) {
            document.getElementById("result").innerHTML = "Overweight";
        }
    } else if (age >= 11 && age <= 15) {
        if (weight >= 26 && weight <= 30) {
            document.getElementById("result").innerHTML = "Fit";
        } else if (weight < 26) {
            document.getElementById("result").innerHTML = "Underweight";
        } else if (weight > 30) {
            document.getElementById("result").innerHTML = "Overweight";
        }
    } else if (age >= 16 && age <= 20) {
        if (weight >= 31 && weight <= 40) {
            document.getElementById("result").innerHTML = "Fit";
        } else if (weight < 31) {
            document.getElementById("result").innerHTML = "Underweight";
        } else if (weight > 40) {
            document.getElementById("result").innerHTML = "Overweight";
        }
    }
}