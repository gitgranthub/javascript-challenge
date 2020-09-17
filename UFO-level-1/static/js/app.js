// from data.js -g

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
button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form -n
function runEnter() {
  

  // Prevent the page from refreshing
  d3.event.preventDefault();
  

  // Clear table
  var table = d3.select("#ufo-table");
  //var tbody = d3.select("#ufo-table");
  //or use :  var table = document.all.tableid;
  function DeleteRows() {
    var rowCount = ufo-table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
      ufo-table.deleteRow(i);
    }
  }

  
  
  
  //tbody.html("");
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Log/Test filter result
  console.log(`The date choosen is ${inputValue}`);

  var filteredData = data.filter(data => data.datetime === inputValue); // -t
  // Get a reference to the table body
  var filteredData = data;

  var tbody = d3.select("tbody");

  console.log(`The filtered data is: ${data}`);
  console.log(data);

  data.forEach(function(filterReports) {
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
