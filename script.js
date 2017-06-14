var user = {};
var post = [];

var logIn = function() {
	if(user.name){
		clickBox.classList.add('hidden');
		button.classList.remove('hidden');
	}else {
	 user.name = window.prompt('iveskite varda');
	 user.lastname = window.prompt('iveskite pavarde');
	 logIn();
	 
	}
	 
	 
}
var clickBox = document.querySelector('#login');

clickBox.addEventListener('click', function(){
	logIn();
});


var button = document.querySelector('#post');
button.addEventListener('click', function(){
	WritePost();
});


var WritePost = function() {
	if (user.name) {
		post.push(window.prompt('ivestite posta'));
		var postDiv = document.querySelector('#postai');
			postDiv.innerHTML = postDiv.innerHTML + '<p> jusu postas: ' + post[post.length -1]+'</p>';

//  post[post.length -1] paima paskutini masyvo posta
	
} else {
	alert('paspauskite login ir prisijunkite');
}
	
}



