var container = document.getElementById('container')
var inputEmail = document.getElementById('username');
var select = document.getElementById('workplace');
var form = document.getElementById('form');
var submit = document.getElementById('submit')
submit.addEventListener('click', () => {
  localStorage.setItem('name', inputEmail.value)
  localStorage.setItem('department', select.value)
})

let table = document.createElement('table');

table.innerHTML = `<tr>
<th>Username</th>
<th>Department</th>
<th>Date of Create</th>
<th>Date of Edit</th>
<th>Edit</th>
<th>Delete</th>
</tr>
<tr>
<td id = 'tdname'>${localStorage.getItem('name')}</td>
<td id = 'tdepartment'>${localStorage.getItem('department')}</td>
<td>${getFullDate()}</td>
<td id = 'dateOfEdit'>-</td>
<td><button id='edit'>EDIT</button></td>
<td><button id='delete'>Delete</button></td>
</tr>`

function getFullDate() {
  let date = new Date()
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
container.appendChild(table)
let rowName = document.getElementById('tdname')
let rowPlace = document.getElementById('tdepartment')
let dateOfEdit = document.getElementById('dateOfEdit')
let edit = document.getElementById('edit')
let deleteItem = document.getElementById('delete')

edit.addEventListener('click', () => {
  localStorage.setItem('name', inputEmail.value)
  localStorage.setItem('department', select.value)
  dateOfEdit.innerText = `${getFullDate()}`
  rowName.innerText = `${localStorage.getItem('name')}`
  rowPlace.innerText = `${localStorage.getItem('department')}`
})

deleteItem.addEventListener('click', () => {
  let confirmPanel = confirm("Are you sure to delete this item?")
  if (confirmPanel) {
    table.style.display = 'none'
    localStorage.clear()
  }
})

