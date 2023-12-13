let cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2018
    }
];

delete cars[0];

cars.push(
    {
        make: "Honda",
        model: "Civic",
        year: 2020
    }
)

cars[1].model = "Accord";

console.log(cars);