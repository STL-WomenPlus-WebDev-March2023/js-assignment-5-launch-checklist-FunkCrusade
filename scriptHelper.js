// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget=document.getElementById("missionTarget")
  missionTarget.innerHTML=`<h2>Mission Destination</h2>
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
    //should take in string as value and return 3 answers
    if (testInput === ""||testInput === 0) {
      return "Empty";
    }
    if (isNan(testInput) === true) {
      return "Not a number";
    } 
    if (testInput.type === Number) {
      return "Is a number";
    }
  }
  
  function formSubmission(document ,list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel)==="Empty"){
      alert("Please fill al the fields") 
      return
     }
     if (validateInput(pilot)==="Is a Number" ||validateInput(copilot)==="Is a Number"){
      alert("Make sure to enter valid name information for pilot/copilot") 
      return 
     } 
     if (validateInput(fuelLevel)==="Not a Number"||validateInput(cargoLevel)==="Not a Number") {
      alert("Make sure to enter valid number input for fuel level and cargo level")
      return   
     } 

    list = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

//update fuel status with color change and messages
if (fuelLevel.value < 10000){
  list.style.visibility = "visable";
  launchStatus.innerHTML = "Shuttle is not ready for launch";
  launchStatus.style.color = "red";
  fuelStatus.innerHTML = "There is not enough fuel for the journey";
  pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`
  copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch.`

  //updated cargo mass input warning message along with color
} else if (cargoLevel.value >10000) {
  list.style.visibility = "visable";
  cargoStatus.innerHTML = "Too much mass for shuttle to take off"
  launchStatus.innerHTML = "Shuttle is not ready for launch."
  launchStatus.style.color = "#C7254E"
  pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`
  copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch.`
  //if ready to launch change message along with color
} else if (cargoLevel < 10000 && fuelLevel > 10000){
  list.style.visibility = "visable";
  launchStatus.innerHTML = "Shuttle is ready for launch!";
  launchStatus.style.color = "#419F6A";
  pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`
  copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch.`
}
  }

  //fetch using URL provided and then load json data
  async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
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
