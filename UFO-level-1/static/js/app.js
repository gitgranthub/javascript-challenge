// from data.js 

var tableData = data;

// Get a reference to the table body -r
var tbody = d3.select(".tb");

// // Loop Through `data` and console.log each ufo report object
data.forEach(function(ufoReports) {
    console.log(ufoReports);
  });

// // Use d3 to update each cell's text with
// // ufo report values (Date, City, State, Country, Shape, Duration, Comments) -a
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

// Create event handlers 
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {


  // Clear table before populating with Filtered Data
  tbody.html("");

  // Select the input date get the raw HTML nodes
  var inputElement = d3.select("#datetime");
  // Get the value property of the input date, state, shape
  var inputValue = inputElement.property("value");
  // console.log input value
  console.log(inputValue);
  // Filter Data with datetime equal to input value
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  // console.log filter values
  console.log(filteredData);


  filteredData.forEach(function(filterReports) {

  console.log(filterReports);
  // Append one table row `tr` for each UFO Sighting object
  var row = tbody.append("tr");
  // Use `Object.entries` to console.log each UFO Sighting value
  Object.entries(filterReports).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
  });
});
});

// Select the form

var form = d3.select("#form");
var returnForm = from.selectAll(null)
.on("keypress", function() {
  if(d3.event.keyCode === 13){
  console.log("you pressed enter!")
  // Clear table before populating with Filtered Data
  tbody.html("");

  // Select the input date get the raw HTML nodes
  var inputElement = d3.select("#datetime");
  // Get the value property of the input date, state, shape
  var inputValue = inputElement.property("value");
  // console.log input value
  console.log(inputValue);
  // Filter Data with datetime equal to input value
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  // console.log filter values
  console.log(filteredData);


  filteredData.forEach(function(filterReports) {

    console.log(filterReports);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(filterReports).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    }
  }
  })
});

  
  



// // Complete the event handler function for the form -n
// function runEnter() {
  

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   // Log/Test filter result
//   console.log(`The date choosen is ${inputValue}`);


//   // Get a reference to the table body -r
//   var tbody = d3.select(".tb");

//   var fData = data.filter(data => data.datetime === inputValue); // -t
//   // Get a reference to the table body
//   var filteredData = fData;

//   console.log(`The filtered data is: ${filteredData}`);
//   console.log(data);


//   filteredData.forEach(function(filterReports) {
//     console.log(filterReports);
//     var row = tbody.append("tr");
//     Object.entries(filterReports).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the ufo report object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
// }