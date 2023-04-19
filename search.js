const searchTask = document.querySelector('.search-input');


searchTask.addEventListener('keyup', showsearchtasks);


function showsearchtasks() {
    this.closest('main').querySelectorAll('.task').forEach(elem => {
        if(elem.querySelector('.task-text p').innerText.search(searchTask.value)) {
            elem.style.display = 'none';
        }
        else {
            elem.style.display = 'block';
        }
    });
};