// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let targetPlanet=document.getElementById("missionTarget")
  targetPlanet.innerHTML=`<h2>Mission Destination</h2>
               <ol>
                   <li>Name:${name} </li>
                   <li>Diameter:${diameter} </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth:${distance} </li>
                   <li>Number of Moons:${moons} </li>
               </ol>
               <img src=${imageUrl}> `
  
}
  
function validateInput(testInput) {
  //should take in string as value and return 1 of 3 answers:
  if (testInput === "") {
    return "Empty";
  }
  if (isNaN(testInput) === true) {
    return "Not a Number";
  } 
  if (isNaN(testInput) === false) {
    return "Is a Number";
  }
}
  
function formSubmission(document ,list, pilot, copilot, fuelLevel, cargoLevel) {
  if(validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel)==="Empty"){
    alert("Please fill al the fields!");
  } else if (validateInput(pilot)==="Is a Number" ||validateInput(copilot)==="Is a Number"){
    alert("Make sure to enter valid name information for pilot/copilot"); 
  } else if (validateInput(fuelLevel)==="Not a Number"||validateInput(cargoLevel)==="Not a Number") {
    alert("Make sure to enter valid number input for fuel level and cargo level");  
  }

  let launchStatus = document.getElementById("launchStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");


  //update fuel status with color change and messages
  if (fuelLevel < 10000){
    list.style.visibility = 'visible';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
    fuelStatus.innerHTML = 'Fuel Level too low for launch';
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
    //updated cargo mass input warning message along with color
  } else if (cargoLevel > 10000) {
    list.style.visibility = 'visible';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'rgb(199, 37, 78)';
    cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
    //if ready to launch change message along with color
  } else if (cargoLevel < 10000 && fuelLevel > 10000){
    list.style.visibility = 'visible';
    launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    launchStatus.style.color = '#419F6A';
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }
}

//fetch using URL provided and then load json data
async function myFetch() {
  let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json()
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let planetIndex = Math.floor(Math.random() * planets.length);
  return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
