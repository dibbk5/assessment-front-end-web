console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted');
}

function compliment(e) {
	e.preventDefault();

	alert('Wow, you are smart!')
}

let form = document.querySelector('#contact');
let pic = document.querySelector('#rubberduck');

form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', compliment)