const changeTheme = document.querySelector('.change-theme');
const body = document.querySelector('body');
const addTaskBtn = document.querySelector('.add-task-btn');
const allTasksCount = document.querySelector('.all-tasks-count');
const doneTasksCount = document.querySelector('.done-tasks-count');
const changeSettings = document.querySelector('.change-settings');
const settingsPanel = document.querySelector('.show-settings');
const sowTasksCount = document.querySelector('.show-tasks-count');
const main = document.querySelector('main');
const addTaskText = document.querySelector('.add-task-text');
const showAllTasksCount = document.querySelector('.all-tasks-count');
const controlPanel = document.querySelector('.control-panel ul');

changeTheme.addEventListener('click', changeThemeToDoList);
changeSettings.addEventListener('click', changeTasksSettings);

showTasksCount()
showDoneTasksCount()
let checkTheme;
let openOrCloseSettings;
let openOrCloseChangeSection;


function showTasksCount() {
    let count = main.querySelectorAll('.task').length;
    if(count === 0) {
        // settingsPanel.style.border = 'none';
        return showAllTasksCount.innerHTML = 'Task list is Empty';
    }
    else {
        // settingsPanel.style.border = '1px solid gray';
        return showAllTasksCount.innerHTML = `All Tasks Count: ${count}`;
    }
}

function showDoneTasksCount() {
    let allTasks = main.querySelectorAll('.task');
    let Count = 0;
    allTasks.forEach((elem) => {
        if(elem.style.backgroundColor === 'rgb(97, 255, 97)') {
            Count++;
        }
    })
    return Count === 0?doneTasksCount.innerHTML = '':doneTasksCount.innerHTML = `Done tasks count: ${Count}`;
}

function changeThemeToDoList() {
    if(checkTheme) {
        this.src = 'images/sun.png';
        body.style.backgroundColor = 'rgb(26, 26, 26)';
        body.style.transition = 'all 1s';
        allTasksCount.style.color = 'white';
        allTasksCount.style.transition = 'all 1s';
        doneTasksCount.style.color = 'white';
        doneTasksCount.style.transition = 'all 1s';
        controlPanel.querySelectorAll('p').forEach(elem => {
            elem.style.color = 'white';
        })
        controlPanel.querySelectorAll('button').forEach(elem => {
            elem.style.color = 'white';
        })
        main.querySelectorAll('.task').forEach(elem => {
            elem.querySelector('.task-text p').style.color = 'white';
        })
        checkTheme = false;
        showTasksCount()
    }
    else {
        body.style.backgroundColor = 'white'; //rgb(225, 223, 223)
        this.src = 'images/moon.png';
        body.style.transition = 'all 1s';
        addTaskBtn.style.cursor = 'pointer'; 
        allTasksCount.style.color = 'rgb(26, 26, 26)';
        allTasksCount.style.transition = 'all 1s';
        doneTasksCount.style.color = 'rgb(26, 26, 26)';
        doneTasksCount.style.transition = 'all 1s';
        controlPanel.querySelectorAll('p').forEach(elem => {
            elem.style.color = 'rgb(26, 26, 26)';
        })
        controlPanel.querySelectorAll('button').forEach(elem => {
            elem.style.color = 'rgb(26, 26, 26)';
        })
        main.querySelectorAll('.task').forEach(elem => {
            elem.querySelector('.task-text p').style.color = 'rgb(90, 90, 90)';
        })
        showTasksCount()
        checkTheme = true;
    }
};

function changeTasksSettings() {
    if(openOrCloseSettings) {
        settingsPanel.style.height = '30px';
        settingsPanel.style.opacity = '1';
        settingsPanel.style.transition = 'all 0.9s';
        settingsPanel.style.boxShadow = 'none';
        sowTasksCount.style.borderBottom = 'none';
        openOrCloseSettings = false;
        showTasksCount();
        settingsPanel.style.border = 'none'; 
        controlPanel.style.display = 'none';
    }
    else {
        settingsPanel.style.height = '190px';
        settingsPanel.style.opacity = '1';
        settingsPanel.style.transition = 'all 0.9s';
        settingsPanel.style.boxShadow = '0px 0px 15px rgba(128, 128, 128, 0.495)';
        sowTasksCount.style.borderBottom = '1px solid rgba(255, 255, 255, 0.077)';

        setTimeout(() => {
            controlPanel.style.display = 'block';
        }, '500');
        openOrCloseSettings = true;
        showTasksCount();
        settingsPanel.style.border = '1px solid rgb(90, 90, 90)';
    }  
}

addTaskBtn.addEventListener('click', addOneTask);
addTaskText.addEventListener("keypress", function(ev) {
    if(ev.key === 'Enter') {
        if(addTaskText.value.trim() === '') {
            alert('Please add text');
            addTaskText.value = '';
        }
        else {
            addOneTask();
        }
    }
})

function addOneTask() {
    let oneTask = new Task();
    let oneTaskDate = new Date();
    if(addTaskText.value.trim() === '') {
        addTaskText.value = '';
        alert('Please add text');
    }
    else {
        if(body.style.backgroundColor === 'white') {
            oneTask.taskText.style.color = 'rgb(90, 90, 90)';
        }
        let date = `Create ${oneTaskDate.toLocaleDateString()}: ${oneTaskDate.toLocaleTimeString()}:`;
        main.append(oneTask.createTask(addTaskText.value, date));
        addTaskText.value = '';
        showTasksCount()
    }
    oneTask.deleteTaskBtn.addEventListener('click', deleteThisTask);
    oneTask.changeTaskBtn.addEventListener('click', changeThisTask);
    oneTask.doneTaskBtn.addEventListener('click', doneThisTask);
};

function deleteThisTask() {
    this.closest('.task').style.opacity = '0';
    this.closest('.task').style.transition = 'opacity 0.9s';
    this.closest('.task').remove();
    showTasksCount();
    showDoneTasksCount()
}

function changeThisTask() {
    if(!openOrCloseChangeSection) {
        this.closest('.task').querySelector('.task-change').style.height = '100px';
        this.closest('.task').querySelector('.task-change').style.opacity = '1';
        this.closest('.task').querySelector('.task-change').style.transition = 'all 0.9s';
        setTimeout(() => {
            this.closest('.task').querySelector('.add-change-text').style.display = 'block';
            this.closest('.task').querySelector('.add-change-text-btn').style.display = 'block';
        }, '300');
        openOrCloseChangeSection = true;
        this.closest('.task').querySelector('.add-change-text-btn').addEventListener('click', changeText);
    }
    else {
        this.closest('.task').querySelector('.task-change').style.height = '0px';
        this.closest('.task').querySelector('.task-change').style.opacity = '0';
        this.closest('.task').querySelector('.task-change').style.transition = 'all 0.9s';
        this.closest('.task').querySelector('.add-change-text').style.display = 'none';
        this.closest('.task').querySelector('.add-change-text-btn').style.display = 'none';
        this.closest('.task').querySelector('.add-change-text').value = '';
        openOrCloseChangeSection = false;
    }
};

function changeText() {
    let oneTaskDate = new Date();
    if(this.closest('.task').querySelector('.add-change-text').value.trim() === '') {
        alert('Please add text');
        this.closest('.task').querySelector('.add-change-text').value = '';
    }
    else {
        let date = `Change: ${oneTaskDate.toLocaleDateString()}: ${oneTaskDate.toLocaleTimeString()}:`;
        this.closest('.task').querySelector('.change-date').innerHTML = date;
        this.closest('.task').querySelector('.task-text p').innerHTML = this.closest('.task').querySelector('.add-change-text').value;
        this.closest('.task').querySelector('.add-change-text').value = '';
        this.closest('.task').querySelector('.task-change').style.height = '0px';
        this.closest('.task').querySelector('.task-change').style.opacity = '0';
        this.closest('.task').querySelector('.task-change').style.transition = 'all 0.9s';
        this.closest('.task').querySelector('.add-change-text').style.display = 'none';
        this.closest('.task').querySelector('.add-change-text-btn').style.display = 'none';
        openOrCloseChangeSection = !openOrCloseChangeSection;
    }
};

function doneThisTask() {
    let oneTaskDoneDate = new Date();
    this.closest('.task').style.transition = 'all 1s';
    this.closest('.task').style.borderColor = 'green';
    this.closest('.task').style.backgroundColor = 'rgb(97, 255, 97)';
    this.closest('.task').querySelector('.task-text').style.transition = 'all 1s';
    this.closest('.task').querySelector('.task-text').style.backgroundColor = 'white';
    this.closest('.task-btns').style.backgroundColor = 'white';
    this.closest('.task-btns').style.transition = 'all 1s';
    this.closest('.task-btns').querySelector('.task-done-btn').style.display = 'none';
    this.closest('.task-btns').querySelector('.task-change-btn').style.display = 'none';
    this.closest('.task-btns').querySelector('.task-delete-btn').style.marginTop = '25px';
    this.closest('.task').querySelector('.task-text p').style.color = 'green';
    this.closest('.task').querySelector('.task-change').style.height = '0px';
    this.closest('.task').querySelector('.task-change').style.opacity = '0';
    this.closest('.task').querySelector('.task-change').style.transition = 'all 0.9s';
    this.closest('.task').querySelector('.add-change-text').style.display = 'none';
    this.closest('.task').querySelector('.add-change-text-btn').style.display = 'none';
    let date = `Done: ${oneTaskDoneDate.toLocaleDateString()}: ${oneTaskDoneDate.toLocaleTimeString()}:`;
    this.closest('.task').querySelector('.done-date').innerHTML = date;
    showDoneTasksCount();
    this.closest('.task').style.boxShadow = '0px 0px 15px rgba(0, 255, 8, 0.495)'
    openOrCloseChangeSection = false;
}
