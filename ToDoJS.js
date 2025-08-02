const enterButton = document.getElementById('enter-button');
        const taskInput = document.getElementById('task');
        const timeInput = document.getElementById('task-time');
        const list = document.getElementById('listof');

        // --- Add Task Logic ---
        function addTask() {
            const taskText = taskInput.value;
            const timeValue = timeInput.value;

            if (taskText.trim() === '') {
                alert("Please enter a task.");
                return;
            }

            const newtask = document.createElement('li');
            
            const taskContentDiv = document.createElement('div');
            taskContentDiv.className = 'task-content';

            const taskTextSpan = document.createElement('span');
            taskTextSpan.className = 'task-text';
            taskTextSpan.textContent = taskText;
            taskContentDiv.appendChild(taskTextSpan);

            if (timeValue) {
                const timestampSpan = document.createElement('span');
                timestampSpan.className = 'task-time';
                const formattedTime = new Date(timeValue).toLocaleString();
                timestampSpan.textContent = formattedTime;
                taskContentDiv.appendChild(timestampSpan);
            }

            const doneButton = document.createElement('button');
            doneButton.className = 'done-button';
            doneButton.textContent = 'Done';

            newtask.appendChild(taskContentDiv);
            newtask.appendChild(doneButton);
            list.appendChild(newtask);

            taskInput.value = '';
            timeInput.value = '';
        }

        enterButton.addEventListener('click', addTask);
        taskInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });

        // --- Delete Task Logic (using Event Delegation) ---
        list.addEventListener('click', function(event) {
            if (event.target.classList.contains('done-button')) {
                const listItemToRemove = event.target.parentElement;
                listItemToRemove.remove();
            }
        });