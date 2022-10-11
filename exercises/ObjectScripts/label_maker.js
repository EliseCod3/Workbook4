

let info = {
    name: "Ray Bell",
    address: "295 Mha Dr",
    city: "Powder Springs",
    state: "Ga",
    zip: 40136
};

function printContact(info) {
    console.log(info.name);
    console.log(info.address);
    console.log(info.city + ", " + info.state + " " + info.zip);
}
printContact(info);