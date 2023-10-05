const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h2 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
//usuwanie
const renoveTask = (e) => {
e.target.parentNode.remove();
taskNumber.textContent = listItems.length;
}
//dodawanie zadania
const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === '') return; 
  const task = document.createElement('li');
  task.className = 'task';
  task.textContent = titleTask;
  task.innerHTML = titleTask + "<button>Usuń</button>";
  ul.appendChild(task);
  input.value = '';
  taskNumber.textContent = listItems.length;
  task.querySelector('button').addEventListener("click", renoveTask);
}
form.addEventListener('submit', addTask);
