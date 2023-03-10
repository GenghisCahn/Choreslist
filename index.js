const addBtn = document.getElementById('add-btn')
const removeBtn = document.getElementById('remove-btn')
const choreInput = document.getElementById('chore-input')
const choresEl = document.getElementById('chores-el')



let chores = []

addBtn.addEventListener('click', function(){ 
    if(choreInput.value.trim() && !chores.includes(choreInput.value)){
        chores.push(choreInput.value)
        renderChores()
    }
    choreInput.value = ""
})

removeBtn.addEventListener('click', function(){
    choresEl.innerHTML = ""
    chores = []
})


function renderChores(){
     let choresHtml = ""
    
    for (const chore of chores){
        choresHtml += `
    <div class="chore-container">
        <p>${chore}</p>
        <button class="complete-chore-btn">complete</button>
    </div>
    `
    }
    
    choresEl.innerHTML = choresHtml
    
    completeChore()
}


function completeChore(){
    const completeChoreBtns = document.querySelectorAll('.complete-chore-btn')
    
    for (let btn of completeChoreBtns){
        btn.addEventListener('click', function(){
            btn.parentElement.remove()
            chores.pop()
            if(!chores.length){
                document.getElementById('gif-container').classList.remove('hidden')
            }
        })
    }
}

document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('gif-container').classList.add('hidden')
})






