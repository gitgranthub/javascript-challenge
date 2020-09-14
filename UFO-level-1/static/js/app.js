// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function(ufoReports) {
    console.log(ufoReports);
  });

// // Step 3:  Use `Object.entries` to console.log each ufo report value
// data.forEach(function(ufoReports) {
//     console.log(ufoReports);
//     var row = tbody.append("tr");
  
//     Object.entries(ufoReports).forEach(function([key, value]) {
//       console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per ufo report value (Date, City, State, Country, Shape, Duration, Comments)
// data.forEach(function(ufoReports) {
//     console.log(ufoReports);
//     var row = tbody.append("tr");
  
//     Object.entries(ufoReports).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the weather report object
//       var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // ufo report values (Date, City, State, Country, Shape, Duration, Comments)
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

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(`The date choosen is ${inputValue}`);
//   console.log(tableData);
//   console.log(tableData.datetime);
//   console.log(tableData.city);
//   console.log(tableData.state);
//   console.log(tableData.country);
//   console.log(tableData.shape);
//   console.log(tableData.durationMinutes);
//   console.log(tableData.comments);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(`The filtered data is: ${filteredData}`);
  console.log(filteredData);
};
