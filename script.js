var wrapperEle = document.body.querySelector(".wrapper");

var prompter = prompt("enter a number")

if("a number"==prompter){
 wrapperEle.innerHTML="Statement is true";
}else{
 wrapperEle.innerHTML="Statement is false";
}

var prompter = prompt("enter an operator")

if("a number"==prompter){
 wrapperEle.innerHTML="Statement is true";
}else{
 wrapperEle.innerHTML="Statement is false";
}

var prompter = prompt("enter a second number")

if("a number"==prompter){
 wrapperEle.innerHTML="Statement is true";
}else{
 wrapperEle.innerHTML="Statement is false";
}

if("cat"!=prompter&&"dog"!=prompter){
 wrapperEle.innerHTML="Statement is false";
}