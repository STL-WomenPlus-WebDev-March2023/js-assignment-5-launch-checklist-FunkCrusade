// added event listener for the form and preventDefault() method 
// to handle the case where user info is not correct and form shouldnt be submitted 

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let pilot = document.getElementById("pilotName");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems")
    formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
  //used document methods to access the user input value to complete 
  //my conditional statements in the formSubmission
  })


  let listedPlanets;
  //used the .then method to create a promoise to invoke the API results from the myFetch 
  //and also invoke the randomplanet function with planet info listed to display
  let listedPlanetsResponse = myFetch()
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
  }).then(function () {
    // called pickPlanet() to access random planet and addDest() 
    //to get the values of each key and display info
    //not two seperate
    let planet = pickPlanet(listedPlanets)
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)

  })
}); 
