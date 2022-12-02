//Header All querySelector
const Header = document.querySelector('.Header');
const TasksCount = document.querySelector('.Count');
const Input = document.querySelector('.input');
const btnAdd = document.querySelector('.btn_add');
const btnDelete = document.querySelector('.btn_del');

//Main querySelector
const Main = document.querySelector('main');

// Tasks count
let Count = 0
// Tasks count text
let Count_text = Header.querySelector('p');
Count_text.innerHTML = 'Empty Task List:';

// Add Task
btnAdd.addEventListener('click', function(event) {
    event.preventDefault();

    // One task HTML
    const OneTask = `<div class="One_task">
                    <div class="task_text">
                    <p>${Input.value}</p>
                    </div>
                    <button class="one_task_done" data-action="done" type="submit">Done</button>
                    <button class="one_task_del" data-action="delete" type="submit" >Delete</button>
                    </div>`;

    if(Input.value == '') {
        alert('Please add text')}

    else{
        if(String(Input.value).length > 30) {
            alert('max length text')
            Input.value = '';
        }
        else {
            Main.insertAdjacentHTML('afterbegin', OneTask);
        //clear input text
        Input.value = '';
        //add Count
        Count++;
        //Task Count text
        Count_text.innerHTML = `Tasks Count: ${Count}`;
        }
    }
});

//Delete All tasks
btnDelete.addEventListener('click', function(event) {
    event.preventDefault();
    if(Main.innerHTML == '') {
        alert('Empty Tasks List');
    }
    // Clear All tasks list
    else {
        Main.innerHTML = '';
    }
    //Tasks count empty
    Count_text.innerHTML = 'Empty Task List:';
    //Tasks count = 0
    Count = 0;

});

Main.addEventListener('click', function(event) {
    event.preventDefault();
    if(event.target.dataset.action === 'delete') {
        const deleteOneTask = event.target.closest('.One_task');
        deleteOneTask.remove();
        Count--;
        if(Count === 0) {
            Count_text.innerHTML = 'Empty Task List:';
        }
        else {
            Count_text.innerHTML = `Tasks Count: ${Count}`;
        }
    }
    else if(event.target.dataset.action === 'done') {
        const doneOneTask = event.target.closest('.One_task');
        let text = doneOneTask.querySelector('p').innerHTML;
        doneOneTask.remove();
        Main.innerHTML += `<div class="One_task" style="border: 2px solid rgb(60, 179, 5);">
                                <div class="task_text">
                                <p>${text}</p>
                                </div>
                                <button  class="one_task_del" data-action="delete" type="submit" >Delete</button>
                                </div>`;
    }
})