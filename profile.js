function favColor(e) {
    e.preventDefault();

    alert('My favorite color is red.')
}

function favPlace(e) {
    e.preventDefault();

    alert('My favorite place is Lake Powell.')
}

function favRitual(e) {
    e.preventDefault();

    alert('My favorite ritual is sleeping in on Saturdays.')
}

let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

colorBtn.addEventListener('click', favColor)
placeBtn.addEventListener('click', favPlace)
ritualBtn.addEventListener('click', favRitual)