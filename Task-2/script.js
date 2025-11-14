const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const completedList = document.getElementById('completed-list');
const toggleBtn = document.getElementById('toggle-completed');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});

// Toggle collapse for completed tasks
toggleBtn.addEventListener('click', () => {
  completedList.classList.toggle('hidden');
  toggleBtn.textContent = completedList.classList.contains('hidden') ? 'Show' : 'Hide';
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.className = 'done-radio';

  const span = document.createElement('span');
  span.textContent = taskText;
  span.className = 'task-text';

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  // Mark task as done
  radio.addEventListener('click', () => {
    li.classList.add('completed');
    radio.disabled = true;
    moveToCompleted(li);
  });

  // Remove task
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(radio);
  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
}

function moveToCompleted(taskItem) {
  const clone = taskItem.cloneNode(true);
  clone.querySelector('.remove-btn').addEventListener('click', () => clone.remove());
  clone.querySelector('.done-radio').remove(); // remove radio from completed
  completedList.appendChild(clone);
  taskItem.remove();
}