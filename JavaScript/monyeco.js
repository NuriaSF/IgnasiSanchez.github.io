var hidden=true;

function toggleText() {

  let myElements = document.querySelectorAll(".txt1");
  if(hidden){
    hidden = false;
    for (let i = 0; i < myElements.length; i++) {
      myElements[i].style.textIndent = "0%";
      myElements[i].style.whiteSpace = "normal";
      myElements[i].style.overflow = "visible";
    }
    fade_in()
  }
  else {
    hidden = true;
    for (let i = 0; i < myElements.length; i++) {
      myElements[i].style.textIndent = "200%";
      myElements[i].style.whiteSpace = "nowrap";
      myElements[i].style.overflow = "hidden";
    }
    fade_in()
  };
};

/*  Text del monyeco */
function fade_out() {
	let cobi2 = document.getElementById("cobi2");
	let cobi3 = document.getElementById("cobi3");
	cobi2.style.visibility = "hidden";
	cobi3.style.visibility = "hidden";
	console.log("Out")
}

function fade_in() {
	let cobi2 = document.getElementById("cobi2");
	let cobi3 = document.getElementById("cobi3");
	if(hidden){
		cobi2.style.visibility = "visible";
		cobi3.style.visibility = "hidden";
	}else{
		cobi2.style.visibility = "hidden";
		cobi3.style.visibility = "visible";
	}
	console.log("In")
}

