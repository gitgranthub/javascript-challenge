// from data.js
var tableData = data;

// YOUR CODE HERE!
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
