// Show Name In Header 
var Fullname = localStorage.getItem('fname');
document.getElementById("head").textContent = "User Name:   " + Fullname;

// Clear Button
document.getElementById('blank').onclick = function () {
    document.getElementById('input').value = " ";
}
// Output Button
document.getElementById('clear').onclick = function () {
    document.getElementById('result').innerHTML = " ";
}

// Array of Cities
var cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Shiekupura", "Kashmir"];

// Print Cities
function printcities() {
    document.getElementById('result').innerHTML = " ";
    let number = 1;
    for (let index = 0; index < cities.length; index++) {
        document.getElementById('result').innerHTML += number + ")" + cities[index] + "</br>";
        number++;
        console.log(cities[index]);
    }
}

//Add City Function
function addcity() {
    document.getElementById('result').innerHTML = " ";
    let city = document.getElementById("input").value;
    if (!city) {
        Toastify({
            text: "Please Enter Your City Name",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
            },
            onClick: function () { }
        }).showToast();
        return;
    }
    if (city.length < 3) {
        Toastify({
            text: "Please Enter Correct City Name",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
            },
            onClick: function () { }
        }).showToast();
        return;
    }

    let cityFirstLeter = city.slice(0, 1).toUpperCase();
    let cityAllLeter = city.slice(1).toLowerCase();
    let CityWordCaitalzie = cityFirstLeter + cityAllLeter;

    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === CityWordCaitalzie) {
            cityFound = true;
            document.getElementById('result').innerHTML = "<span class='text-success'>" + CityWordCaitalzie + "</span> is already exist in list";
            Toastify({
                text: CityWordCaitalzie + " is already exist in list",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
                },
                onClick: function () { }
            }).showToast();
            return;
        }
    }
    if (cityFound == false) {
        cities.push(CityWordCaitalzie);
        document.getElementById('result').innerHTML = "<span class='text-success'>" + CityWordCaitalzie + "</span> has been successfully added into list";
        Toastify({
            text: CityWordCaitalzie + " has been successfully added into list",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
            },
            onClick: function () { }
        }).showToast();
        return;
    }
}