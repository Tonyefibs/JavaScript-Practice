var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lix = document.querySelectorAll("ul li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick = function(e){
		li.remove();
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lix.forEach(function(item) {
  item.onclick = function(e) {
     this.classList.toggle("done");
    
  }
});

lix.forEach(function(item){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	item.appendChild(btn);
	btn.onclick = function(e){
		item.remove();
	}

});





