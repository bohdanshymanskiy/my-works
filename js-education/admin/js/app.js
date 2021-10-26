const container = document.getElementById('container')
const submit = document.getElementById('submit')
const table = document.createElement('table')
const inputName = document.getElementById('username');
const select = document.getElementById('workplace');
let activeItem;

function setData(data = []) {
  try {
    localStorage.setItem('allUsers', JSON.stringify(data))
  } catch (e) {
    alert(e.message)
  }
}
function getData() {
  try {
    return JSON.parse(localStorage.getItem('allUsers'))
  } catch (e) {
    alert(e.message)
  }
}
function addEntry() {
   let dataOfUsers = getData() || [];
  if(activeItem) {
    if (inputName.value === '' || select.value === 'Work Department') {
    alert('Please fill all forms')
  } else {
    dataOfUsers[activeItem].userName = inputName.value;
    dataOfUsers[activeItem].department = select.value;
    dataOfUsers[activeItem].editDate = new Date().toUTCString();
    activeItem = null;
    }
  } else {
  if (inputName.value === '' || select.value === 'Work Department') {
    alert('Please fill all forms')
  } else {
    let user = {
      'userName': inputName.value,
      'department': select.value,
      'dateOfCreate': new Date().toUTCString(),
      'editDate': '-'
    };
    dataOfUsers.push(user);
    }
  }
  setData(dataOfUsers)
  setTable()
};

function setTable() {
  let users = getData() || []

  if (users.length == 0) {
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

    for (let i = 0; i < users.length; i++) {
      let addRow = document.createElement('tr');
      addRow.setAttribute('data-id', i)
      addRow.innerHTML = `
      <td id = 'rowName'>${users[i].userName}</td>
    <td id = 'rowDepartment'>${users[i].department}</td>
    <td>${users[i].dateOfCreate}</td>
    <td id='dateOfEdit'>${users[i].editDate}</td>
    <td><button type='button' id='edit'>EDIT</button></td>
    <td><button type='button' id='delete'>Delete</button></td>`
      table.appendChild(addRow);
    }
    container.appendChild(table);
    table.style.display = 'inline-block'
  }

  let editItem = document.querySelectorAll('#edit')
  for (let edit of editItem) {
    edit.addEventListener('click', getEditItemId)
    function getEditItemId(e){
      activeItem = e.target.parentNode.parentNode.dataset.id
      inputName.value = users[activeItem].userName
      select.value = users[activeItem].department
      }
  }
  let deleteItem = document.querySelectorAll('#delete')
  deleteItem.forEach(item => item.onclick = (e) => {
    let areYouSure = confirm('Are you sure to delete this user info?')
    if (areYouSure) {
      let el = e.target.parentNode.parentNode.dataset.id
      users = users.filter(item => item !== users[el])
      setData(users)
      setTable()
    }
  })
}
submit.addEventListener('click', addEntry)
setTable()