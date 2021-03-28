'use strict'

const allBtn = document.querySelectorAll('.btn')
const input = document.querySelector('.todo-list__input')
const btnAppendNewTask = document.querySelector('.todo-list__btn--append')
const taskBox = document.querySelector('.todo-list__task-box')

btnAppendNewTask.addEventListener('click', () => {
    document.querySelector('.todo-list__not-item').style.display = 'none'
    const newTask = document.createElement('div')
    newTask.classList.add('.todo-list__item')
    newTask.innerHTML = `<div class="todo-list__item">
                            <div class="todo-list__content">${input.value}</div>
                            <button class="todo-list__btn--close btn">delete</button>
                        </div>`
    taskBox.append(newTask)
    input.value = ''

    const deleteTask = document.querySelectorAll('.todo-list__btn--close')
    deleteTask.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove()
        })
    })

})