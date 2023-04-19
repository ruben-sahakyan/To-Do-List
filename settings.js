const deleteAllTasksBtn = document.querySelector('.delete-all-tasks');
const deleteAllDoneTasksBtn = document.querySelector('.delete-only-done-tasks');
const showOnlyDoneTasksBtn = document.querySelector('.show-done-tasks');
const showAllTasksBtn = document.querySelector('.show-all-tasks');
const showAllNoDoneTasksBtn = document.querySelector('.show-no-done-tasks');

deleteAllTasksBtn.addEventListener('click', deleteAllTasks);
deleteAllDoneTasksBtn.addEventListener('click', deleteAllDoneTasks);
showOnlyDoneTasksBtn.addEventListener('click', showOnlyDoneTasks);
showAllTasksBtn.addEventListener('click', showAllTasks);
showAllNoDoneTasksBtn.addEventListener('click', showAllNoDoneTasks);

function showAllNoDoneTasks() {
    this.closest('main').querySelectorAll('.task').forEach((elem) => {
        elem.style.display = 'block';
        if(elem.style.backgroundColor === 'rgb(97, 255, 97)') {
            elem.style.display = 'none';
        }
    })
}

function showAllTasks() {
    this.closest('main').querySelectorAll('.task').forEach((elem) => {
        elem.style.display = 'block';
    })
}

function deleteAllTasks() {
    this.closest('main').querySelectorAll('.task').forEach((elem) => {
        elem.remove();
    });
    showDoneTasksCount();
    showTasksCount();
}

function deleteAllDoneTasks() {
    this.closest('main').querySelectorAll('.task').forEach((elem) => {
        if(elem.style.backgroundColor === 'rgb(97, 255, 97)') {
            elem.remove();
        }
    });
    showDoneTasksCount();
    showTasksCount();
}

function showOnlyDoneTasks() {
    this.closest('main').querySelectorAll('.task').forEach((elem) => {
        elem.style.display = 'block';
        if(elem.style.backgroundColor !== 'rgb(97, 255, 97)') {
            elem.style.display = 'none';
        }
    })
}