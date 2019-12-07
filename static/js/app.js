// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = document.getElementById('ufo-table');

// Clears all rows excpet the first one in the table
function clearTable() {
    console.log('clearing table');


    tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
}

// Populates the table with data
function populateTable(data) {
    console.log('populating data');


    data.forEach(function (item) {
        // Create row and all the td elements
        tbody = table.getElementsByTagName('tbody')[0];
        var row = tbody.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        // Set the innerHTML
        cell1.innerHTML = item.datetime;
        cell2.innerHTML = item.city;
        cell3.innerHTML = item.state;
        cell4.innerHTML = item.country;
        cell5.innerHTML = item.shape;
        cell6.innerHTML = item.durationMinutes;
        cell7.innerHTML = item.comments;
    });
}

// Update the Table
populateTable(tableData);
console.log('table populated');

// Listen for clicks on filter button
document.getElementById('filter-btn').addEventListener('click', function() {
    // Clear Table
    clearTable();
  
    // Filter data by date
    var filterDate = document.getElementById('datetime').value;
    console.log('filtering on ' + filterDate);
  
    if (filterDate.length === 0) {
      // User clearing the selection
      console.log('clearing the table to original data');
      populateTable(tableData);
    } else {
      // User entered a date
      var filtered = tableData.filter(function(item) {
        return item.datetime === filterDate;
      });
  
      // Repopulate table
      populateTable(filtered);
    }
  });