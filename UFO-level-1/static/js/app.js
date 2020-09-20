var data = data;

// Get a reference to the table body -g
var tbody = d3.select(".tb");


// // Function that loads the table initially on site load **
// // ufo report values (Date, City, State, Country, Shape, Duration, Comments) -c

function initLoad() {
  // Prevent the page from refreshing
  //d3.event.preventDefault();
  
  data.forEach(function(ufoReports) {
    console.log(ufoReports);
    var row = tbody.append("tr");
    Object.entries(ufoReports).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}


// Create event handlers 
// Select the button
var button = d3.select("#filter-btn");
button.on("click", runEnter);

// New by EJW
var formEnter = d3.select("#form");
formEnter.on("submit", runEnter);

// Reset Form **** BUTTON CODE
var button2 = d3.select("#reset-btn");
button2.on("click", resetEnter);


// Filtering By Date and Clicking Filter Button
// Modified by EJW - named function and prevent default
function runEnter() {
  // Added by EJW
  d3.event.preventDefault();

  // Clear table before populating with Filtered Data
  tbody.html("");

  // Select the input date get the raw HTML nodes
  var inputElement = d3.select("#datetime");
  // Get the value property of the input date, state, shape
  var inputValue = inputElement.property("value");
  // console.log input value
  console.log(inputValue);
  
  // Create Multiple Search Factors
  // Filter Data with datetime equal to input value
  var filteredDates = data.filter(data => data.datetime === inputValue);
  // console.log filter values
  console.log(filteredDates);

  filteredDates.forEach(function(filteredDates) {

    console.log(filteredDates);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(filteredDates).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
  });
};


function resetEnter() {
  // Clear table before populating with Filtered Data
  tbody.html("");

  data.forEach(function(ufoReports) {
    console.log(ufoReports);
    var row = tbody.append("tr");
    Object.entries(ufoReports).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
// Load initial data to page
initLoad();
