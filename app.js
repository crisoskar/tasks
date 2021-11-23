// user input form
const form = document.querySelector('form')
form.addEventListener('submit', addTask)

//add task function
function addTask(event){
    //get task value from form input
    const task = document.querySelector('#task').value
    // get element from DOM
    const tasklist = document.querySelector('ul');
    // create element to DOM
    const li = document.createElement('li')
    li.className = 'collection-item'
    // add text to element
    const text = document.createTextNode(task)
    li.appendChild(text)
    // add li to tasklist
    tasklist.appendChild(li)
    // clear form input value
    document.querySelector('#task').value = ''

    event.preventDefault()

}

