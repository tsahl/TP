document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Ajouter une tâche
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Ajouter les boutons "Compléter" et "Supprimer"
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("task-buttons");

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.classList.add("complete-btn");
        completeBtn.addEventListener("click", function() {
            taskItem.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });

        buttonsDiv.appendChild(completeBtn);
        buttonsDiv.appendChild(deleteBtn);
        taskItem.appendChild(buttonsDiv);
        taskList.appendChild(taskItem);

        taskInput.value = ""; // Réinitialiser le champ input
    });
});
