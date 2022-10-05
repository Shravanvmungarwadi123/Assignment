let vehicle = {
    vehicleid: 01,
    brand: 'Lexus',
    model: '2022',
    variant: 'one year',
    specifications:{
        firstGear: function(){
            console.log('vehicle is in First Gear')
            speedOfVehicle = 10;
            console.log(`speed of vehicle is ${speedOfVehicle}`)
        },
        secondGear: function(){
            console.log('vehicle is in Second Gear');
            speedOfVehicle = 30;
            console.log(`speed of vehicle is ${speedOfVehicle}`);
        },
        speedOfVehicle : 100,
        changeGear: function(){
            return(this.firstGear(),this.secondGear())
        }
    }
};
const details = (vehicle) => {
}
console.log(JSON.stringify(vehicle));
details();