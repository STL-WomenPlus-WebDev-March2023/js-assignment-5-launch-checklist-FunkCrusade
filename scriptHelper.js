// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document,name,diameter,star,distance,moons,imageUrl) {
    const div = document.getElementById("missionTarget");
    div.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
     <li>Name: ${name}</li>
     <li>Diameter: ${diameter}</li>
     <li>Star: ${star}</li>
     <li>Distance from Earth: ${distance}</li>
     <li>Number of Moons: ${moons}</li>
     </ol>
    <img src="${imageUrl}"/>
    `;
  }
  
  function validateInput(testInput) {
    //should take in string as value and return 3 answers
    if (testInput === ""||testInput === 0) {
      return "Empty";
    } else if (isNaN(testInput)) {
      return "Not a number";
    } else if (testInput.type === Number) {
      return "Is a number";
    }
  }
  
  function formSubmission(document ,list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");

    list = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
  
  
    // validate user input with alert
    if (
      validateInput(pilot) === "Empty" ||
      validateInput(copilot) === "Empty" ||
      validateInput(fuelLevel) === "Empty" ||
      validateInput(cargoLevel) === "Empty"
    ) {
      alert("All fields are required!");

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a number" || 
    validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number" ){
      alert("Make sure to enter valid information for each feild")
    } else {
      list.style.visibility = "visable";
      pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`
      copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch.`
}

if (fuelLevel.value <= 9999){
  list.style.visibility = "visable";
  launchStatus.innerHTML = "Shuttle is not ready for launch";
  launchStatus.style.color = "red";
  fuelStatus.innerHTML = "There is not enough fuel for the journey";
}
  }

  
  async function myFetch() {
    const planetsReturned = await fetch(
      "https://handlers.education.launchcode.org/static/planets.json"
    ).then(function (response) {
      return response.json();
    });

    return planetsReturned;
  }
  
  function pickPlanet(planets) {
  }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
