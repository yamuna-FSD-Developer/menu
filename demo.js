
document.addEventListener('DOMContentLoaded', function () {
const myForm = document.getElementById('form');
const table = document.getElementById('dataTable');

myForm.addEventListener('submit', function (event) {
event.preventDefault();


const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const address = document.getElementById('address').value;
const pincode = document.getElementById('pincode').value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const foodOptions = document.querySelectorAll('input[name="food"]:checked');
const selectedFoods = Array.from(foodOptions).map(option => option.value);
const state = document.getElementById('state').value;
const country = document.getElementById('country').value;


const newRow = table.insertRow(-1);
const cells = [
  newRow.insertCell(0),
  newRow.insertCell(1),
  newRow.insertCell(2),
  newRow.insertCell(3),
  newRow.insertCell(4),
  newRow.insertCell(5),
  newRow.insertCell(6),
  newRow.insertCell(7)
];


cells[0].textContent = firstName;
cells[1].textContent = lastName;
cells[2].textContent = address;
cells[3].textContent = pincode;
cells[4].textContent = gender;
cells[5].textContent = selectedFoods.join(', ');
cells[6].textContent = state;
cells[7].textContent = country;


form.reset();
});
});