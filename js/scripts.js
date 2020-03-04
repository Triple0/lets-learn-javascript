
// Using an event listener to invoke addition of items below a form
//var form = document.getElementById("info-page");

// form.addEventListener( 'submit', function( event ) { //the id of the button should be named submit
//   // STOP the submission (event!)
//   event.preventDefault(); 

//Get values from your ids used in your html forms
// var name = document.getElementById("name").value;
// var id = document.getElementById("id").value;
// var age = document.getElementById("age").value;
// var dessert = document.getElementById("dessert").value;

//Read your data into a array container
// var staffArray = [name, id, age, dessert];

//Display your data
/**var resultElement = document.getElementById( 'record_display' );
resultElement.innerHTML= staffArray;
resultElement.appendChild(resultElement.innerHTML);// Show the result in our element.
} ); */// End of eventListener.


function addNew() {
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var bookings = document.getElementById("bookings").value;
  var employee_number = document.getElementById("employee_number").value;

  var staffArray = [name, address, phone, bookings, employee_number];


  var tableBody = document.getElementById('addMoreRecords');// Assigns my target location
  var newRow = document.createElement('tr'); //creating a new <tr> for my data
  
  //Using a loop to assigne each value into each td tag
  for (var c = 0; c < staffArray.length; c++){
    var td = document.createElement('td'); //Creating a new td data for each value
    td.innerHTML = staffArray[c]; //Assigning each value into each new td created above
    newRow.appendChild(td); //Adding it to my row
   
  }
  tableBody.appendChild(newRow); //display my new row with populated <td> tags

  // Resetting my values on my form to nil
  name = document.getElementById("name").value = '';
  address = document.getElementById("address").value = '';
  phone = document.getElementById("phone").value = '';
  bookings = document.getElementById("bookings").value = '';
  employee_number = document.getElementById("employee_number").value = '';
  
}