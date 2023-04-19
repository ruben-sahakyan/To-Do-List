class Task {
    constructor() {
        this.doneImgSymbol = 'images/done.png';
        this.changeImgSymbol = 'images/change.png';
        this.deleteImgSymbol = 'images/delete.png';
        this.task = document.createElement('div');
        this.task.className = 'task';
        this.baseTask = document.createElement('div');
        this.baseTask.className = 'one-task';
        this.task.append(this.baseTask);
        this.taskTextSection = document.createElement('section');
        this.taskTextSection.className = 'task-text';
        this.taskText = document.createElement('p');
        this.taskText.innerHTML;

        this.taskTextSection.append(this.taskText);
        this.baseTask.append(this.taskTextSection);
        this.taskBtns = document.createElement('section');
        this.taskBtns.className = 'task-btns';
        this.doneTaskBtn = document.createElement('img');
        this.doneTaskBtn.src = this.doneImgSymbol;
        this.doneTaskBtn.title = 'done task';
        this.doneTaskBtn.className = 'one-task-btn task-done-btn';
        this.changeTaskBtn = document.createElement('img');
        this.changeTaskBtn.src = this.changeImgSymbol;
        this.changeTaskBtn.title = 'change this task';
        this.changeTaskBtn.className = 'one-task-btn task-change-btn';
        this.deleteTaskBtn = document.createElement('img');
        this.deleteTaskBtn.src = this.deleteImgSymbol;
        this.deleteTaskBtn.title = 'delete this task';
        this.deleteTaskBtn.className = 'one-task-btn task-delete-btn';
        this.taskBtns.append(this.doneTaskBtn);
        this.taskBtns.append(this.changeTaskBtn);
        this.taskBtns.append(this.deleteTaskBtn);
        this.baseTask.append(this.taskBtns);

        this.changeTaskSection = document.createElement('section');
        this.changeTaskSection.className = 'task-change';
        this.taskChangeText = document.createElement('input');
        this.taskChangeText.className = 'add-change-text';
        this.taskChangeText.placeholder = 'Add text';
        this.changeThisTaskBtn = document.createElement('button');
        this.changeThisTaskBtn.className = 'add-change-text-btn';
        this.changeThisTaskBtn.innerHTML = 'Add Change';
        this.changeTaskSection.append(this.taskChangeText);
        this.changeTaskSection.append(this.changeThisTaskBtn);
        this.task.append(this.changeTaskSection);

        this.taskDate = document.createElement('div');
        this.taskDate.className = 'one-task-date';
        this.createDate = document.createElement('p');
        this.createDate.className = 'create-date';
        this.changeDate = document.createElement('p');
        this.changeDate.className = 'change-date';
        this.doneDate = document.createElement('p');
        this.doneDate.className = 'done-date';

        this.taskDate.append(this.createDate);
        this.taskDate.append(this.changeDate);
        this.taskDate.append(this.doneDate);
        this.task.append(this.taskDate);
    }
    createTask(text, date) {
        this.createDate.innerHTML = date;
        this.taskText.innerHTML = text;
        return this.task;
    }
}
