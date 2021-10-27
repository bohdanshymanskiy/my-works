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
    return JSON.parse(localStorage.getItem('allUsers')) || []
  } catch (e) {
    alert(e.message)
  }
}
function addEntry() {
  let dataOfUsers = getData();
  if (inputName.value === '' || select.value === 'Work Department') {
    alert('Please fill all forms')
  } else {
    if (activeItem || activeItem === 0) {
      dataOfUsers[activeItem].userName = inputName.value;
      dataOfUsers[activeItem].department = select.value;
      dataOfUsers[activeItem].editDate = new Date().toUTCString();
      activeItem = null;
    } else {
      const user = {
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
}
function setTable() {
  let users = getData()

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
      const addRow = document.createElement('tr');
      addRow.dataset.id = i
      addRow.innerHTML = `
    <td>${users[i].userName}</td>
    <td>${users[i].department}</td>
    <td>${users[i].dateOfCreate}</td>
    <td>${users[i].editDate}</td>
    <td><button type='button' id='edit'>EDIT</button></td>
    <td><button type='button' id='delete'>Delete</button></td>`
      table.appendChild(addRow);
    }
    container.appendChild(table);
    table.style.display = 'inline-block'
  }

  const editItem = document.querySelectorAll('#edit')
  for (let edit of editItem) {
    edit.addEventListener('click', getEditItemId)
    function getEditItemId(e) {
      activeItem = +e.target.parentNode.parentNode.dataset.id
      inputName.value = users[activeItem].userName
      select.value = users[activeItem].department
    }
  }
  const deleteItem = document.querySelectorAll('#delete')
  deleteItem.forEach(item => {
    item.addEventListener('click', (e) => {
      const areYouSure = confirm('Are you sure to delete this user info?')
      if (areYouSure) {
        const el = +e.target.parentNode.parentNode.dataset.id
        users.splice(el, 1)
        setData(users)
        setTable()
      }
    })
  })
}
submit.addEventListener('click', addEntry)
setTable()
