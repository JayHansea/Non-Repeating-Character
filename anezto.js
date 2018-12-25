
let button = document.querySelector("button");

button.addEventListener("click", function(){

	let inputData = document.getElementById("inputone").value.toLowerCase();

	let inData = inputData.replace(/\s/g, '');
	
		for (var i = 0; i < inData.length; i++) {

			let iData = inData.charAt(i);
			
			if (inData.indexOf(iData) === inData.lastIndexOf(iData)) {
				document.getElementById('output').innerHTML = iData;
				break;
			} else {
				document.getElementById('output').innerHTML = "";
			}
		} 
});