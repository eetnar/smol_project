const inputBox = document.querySelector('#form')
const message = document.querySelector('.message')
const printMessages = document.querySelector('.print-messages')
const clearButton = document.querySelector('.clear')

const skills = [
    {
        name: 'JavaScript',
        description: 'I made some stuff'
    }, {
        name: 'NodeJS',
        description: 'A backend webapp too'
    }
]

const populateSkills = function(arrayOfSkillObjects) {
    const liElement = document.createElement('li')
    const skillElement = document.createTextNode(arrayOfSkillObjects[arrayOfSkillObjects.length - 1].name)
    liElement.appendChild(skillElement)
    // liElement.appendChild()
    printMessages.appendChild(liElement)
    // printMessages.append(arrayOfSkillObjects[arrayOfSkillObjects.length - 1].name)
}

const addSkill = function(arrayOfSkillObjects, newSkill) {
    arrayOfSkillObjects.push({
        name: newSkill,
        description: 'placeholder description'
    })
}

const clearSkills = function(arrayOfSkillObjects) {
    while (arrayOfSkillObjects.length > 0) {
        arrayOfSkillObjects.pop()
    }
}

inputBox.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('sup')

    if (message.value) {
        addSkill(skills, message.value)
        populateSkills(skills)
        // clearSkills(skills)
    }

    message.value = ''
})

clearButton.addEventListener('click', () => {
    // while (skills.length > 0) {
    //     skills.pop()
    // }

    clearSkills(skills)

    printMessages.innerText= ''
})
