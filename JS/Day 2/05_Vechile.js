const vehicle = {
    vehicleid: 1234,
    brand: "maruti",
    model: '2015',
    variant: 'one year',

    specification: {
        firstGear: function () {
            console.log('vehicle is in first gear...');
            maxSpeed = 30;
            console.log(`maxspeed is : ${maxSpeed}`);
        },
        secondGear: function () {
            console.log('vehicle is in second gear...');
            maxSpeed =60;
            console.log(`maxspeed is : ${maxSpeed}`);
        },
        maxSpeed: 90,
        changeGear: function () {
            return (this.firstGear(), this.secondGear());
        }
    }
};

const details = (vehicle) => {
    console.log(`vehicleid is : ${vehicle.vehicleid}`);
    console.log(`vehicle brand is : ${vehicle.brand}`);
    console.log(`vehicle model is : ${vehicle.model}`);
    console.log(`vehicle variant is : ${vehicle.variant}`);
    vehicle.specification.changeGear();
    console.log(vehicle.specification.maxSpeed);
}
details(vehicle);