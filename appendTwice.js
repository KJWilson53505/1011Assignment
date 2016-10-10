var usersInput=document.getElementById("input");
usersInput.addEventListener("input", function(){
  var value = usersInput.value;
	result1.innerHTML = value + value + value;
});
