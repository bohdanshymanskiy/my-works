var container = document.getElementById('container')
var form = document.getElementById('form');
var submit = document.getElementById('submit')
var table = document.createElement('table')
let dateOfEdit = document.getElementById('dateOfEdit')
let deleteItem = document.getElementById('delete')

submit.addEventListener('click', addEntry)
function addEntry() {
  var dataOfUsers = JSON.parse(localStorage.getItem('allUsers'));
  if (dataOfUsers == null) dataOfUsers = [];
  var inputName = document.getElementById('username').value;
  var select = document.getElementById('workplace').value;
  if (inputName === '' || select === 'Work Department') {
    alert('Please fill all forms')
  } else {
    var user = {
      'userName': inputName,
      'department': select,
      'dateOfCreate': new Date().toUTCString(),
      'editDate': '-'
    };

    localStorage.setItem('user', JSON.stringify(user));
    dataOfUsers.push(user);
    localStorage.setItem('allUsers', JSON.stringify(dataOfUsers));
  }
};

submit.addEventListener('click', setTable)

function setTable() {
  var data = JSON.parse(localStorage.getItem('allUsers'))

  if (data.length == 0) {
    table.style.display = 'none'
  } else {
    table.innerHTML = `<tr>
    <th>Username</th>
    <th>Department</th>
    <th>Date of Create</th>
    <th>Date of Edit</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>`

    for (let i of data) {
      let addRow = document.createElement('tr');
      addRow.innerHTML = `
      <td id = 'rowName'>${i.userName}</td>
    <td id = 'rowDepartment'>${i.department}</td>
    <td>${i.dateOfCreate}</td>
    <td id='dateOfEdit'>${i.editDate}</td>
    <td><button type='button' id='edit'>EDIT</button></td>
    <td><button type='button' id='delete'>Delete</button></td>`
      table.appendChild(addRow);
    }
    container.appendChild(table);
    table.style.display = 'inline-block'
  }
}


document.addEventListener('click', function (e) {
  if (e.target && e.target.id == 'edit') {
    var el = e.target.parentNode.parentNode
    let arrayOfTags = document.querySelectorAll('tr')
    let index = 0;
    for (let i = 0; i < arrayOfTags.length; i++) {
      if (arrayOfTags[i] === el) {
        index = i
      }
    }
    index -= 1

    let correctData = JSON.parse(localStorage.getItem('allUsers'))

    submit.addEventListener('click', editTable, { once: true })
    function editTable() {
      submit.removeEventListener('click', setTable)
      submit.removeEventListener('click', addEntry)
      correctData[index].userName = document.getElementById('username').value;
      correctData[index].department = document.getElementById('workplace').value;
      correctData[index].editDate = new Date().toUTCString();
      localStorage.setItem('allUsers', JSON.stringify(correctData));
    }
    submit.addEventListener('click', () => setTable())
  }
  submit.addEventListener('click', addEntry)
  submit.addEventListener('click', setTable)
});

document.addEventListener('click', function (e) {
  if (e.target && e.target.id == 'delete') {
    let areYouSure = confirm('Are you sure to delete this user info?')
    if (areYouSure) {
      var el = e.target.parentNode.parentNode
      let arrayOfTags = document.querySelectorAll('tr')
      let index = 0;
      for (let i = 0; i < arrayOfTags.length; i++) {
        if (arrayOfTags[i] === el) {
          index = i
        }
      }
      index -= 1

      let correctData = JSON.parse(localStorage.getItem('allUsers'))

      var newData = correctData.filter(item => item !== correctData[index]);

      localStorage.setItem('allUsers', JSON.stringify(newData));
      setTable()
    }
  }
})

localStorage.clear()