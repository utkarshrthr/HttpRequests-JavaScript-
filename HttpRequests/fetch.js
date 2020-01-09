//  FETCH api -> check browser support

const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = function(){
	fetch("https://reqres.in/api/user?page=2") // by-deafult it will send a 'GET' request to specified url, and it also uses 'Promise'
	.then(function (response) {
		console.log(response.body);
		return response.json();	// this method itself returns a 'Promise'
	})
	.then(function (responseData) {
		console.log(responseData); // this block is for the 'Promise' returned by the '.json' method
	})
	.catch(function (error) {
		console.log(error)
	})
}

const sendData = function(){
	var data = {
		"email":"abc@def.ghi",
		"password": "ag12$%d"
	};
	fetch("https://reqres.in/api/register", {
		method:"POST",
		body:data,
		headers:{
			'Content-Type':'application/json'
		}
	})
	.then(function (response) {
		console.log(response.body);
		if(response.status == 404) {
			//response.error = new Error("Some error occurred"); // we can not add anything to respponse at this point
			return response.json().then(function(errData) {
				const err =  new Error("Some error occurred");
				err.data = errData;
				throw err;
			})
		}
	})
	.catch(function (error) {
		console.log(error)
	})
}

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);