// from data.js 

var tableData = data;

// Get a reference to the table body -r
var tbody = d3.select("tbody");

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

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
//button.on("click", deleteRows, runEnter);
//form.on("submit", deleteRows, runEnter);

button.on("click", function(d) {
  deleteRows(d);
  runEnter(d);
});

form.on("submit", function(d) {
  deleteRows(d);
  runEnter(d);
});

// Delete rows function
function deleteRows() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Clear table
  d3.selectAll(".tb").remove();
}


// Complete the event handler function for the form -n
function runEnter() {
  

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  
  // from data.js -g

  // var tableData = data;

  // Get a reference to the table body -r
  var tbody = d3.select("tbody");
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Log/Test filter result
  console.log(`The date choosen is ${inputValue}`);


  // Get a reference to the table body -r
  var tbody = d3.select("tbody");

  var fData = data.filter(data => data.datetime === inputValue); // -t
  // Get a reference to the table body
  var filteredData = fData;

  var tbody = d3.select("tbody");

  console.log(`The filtered data is: ${filteredData}`);
  console.log(data);

  filteredData.forEach(function(filterReports) {
    console.log(filterReports);
    var row = tbody.append("tr");
    Object.entries(filterReports).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
