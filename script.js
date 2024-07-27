document.addEventListener('DOMContentLoaded',() =>{
    const task = document.getElementById('task');
    const add_task = document.getElementById('add-task');
    const task_list = document.getElementById('list');
    
    function addTask(){
        const taskText = task.value.trim();
        if (taskText === '') return;

        const task_item = document.createElement('li');
        task_item.className = 'task-item';

        const task_checkbox = document.createElement('input');
        task_checkbox.type = 'checkbox';
        task_checkbox.addEventListener('change',() =>{
            task_item.classList.toggle('completed')
        });

        const task_label = document.createElement('span');
        task_label.className = 'task-text';
        task_label.textContent = taskText;

        const delete_button = document.createElement('button');
        delete_button.textContent = 'Delete';
        delete_button.className = 'delete-task'
        delete_button.addEventListener('click', () => {
            task_list.removeChild(task_item);
        });

        const task_actions = document.createElement('div');
        task_actions.className = 'task-actions';
        task_actions.appendChild(delete_button);

        task_item.appendChild(task_checkbox);
        task_item.appendChild(task_label);
        task_item.appendChild(task_actions);

        task_list.appendChild(task_item);
        task.value = '';
    }

    add_task.addEventListener('click',addTask);
    task.addEventListener('keypress',(e) => {
        if(e.key === 'Enter'){
            addTask();
        }
    });

    task_list.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (e.target.className === 'task-text') {
            const task_item = e.target.closest('.task-item');
            if (task_item) {
                task_item.classList.toggle('completed');
            }
        }
    });
});