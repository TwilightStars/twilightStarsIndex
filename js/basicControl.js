function changeColor(){
	var Target = window.event.srcElement;
	/*if (Target.className == "chapterInsideButton") {
		Target.style.background = "#2E9AFE";
	}*/
	if (Target.className == "topControlButton") {
		var colorStyle = document.getElementById("headTitle").style.background;
		Target.style.background = colorStyle;
		Target.style.color = "white";
	}
}

function colorBack(){
	var Target = window.event.srcElement;
	/*if (Target.className == "chapterInsideButton"){
		Target.style.background = "transparent";
	}*/
	if (Target.className == "topControlButton") {
		var colorStyle = document.getElementById("headTitle").style.background;
		Target.style.background = "transparent";
		Target.style.color = colorStyle;
	}	
}

function changeBorder(){
	var Target = window.event.srcElement.parentNode;
	if (window.event.srcElement.className != "bookName") {
		Target.style.border = "2px solid #2E9AFE";
		//window.event.srcElement.style.color = "#2E9AFE";
	}
}

function borderBack(){
	var Target = window.event.srcElement.parentNode;
	if (window.event.srcElement.className != "bookName") {
		Target.style.border = "2px solid black";
		//window.event.srcElement.style.color = "black";
	}
}

function scrollControl_click(){
	document.getElementById("Container").scrollTop = 0;
}