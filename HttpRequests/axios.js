/* https://github.com/axios/axios */

const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = function(){
	// 'axios' global object
	axios.get("https://reqres.in/api/user?page=2").then(function(response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
}

const getData = function(){
	// 'axios' global object
	var data = {
		"email":"abc@def.ghi",
		"password": "ag12$%d"
	};
	axios.post("https://reqres.in/api/user/register", data, { //explicitly adding 'headers'
		headers : {
			'Content-Type':'application/json'
		}
	})
	.then(function(response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);	// 'axios' automatically throws an error if the response contains 'status-code' regarding error, e.g. 400, 404, 500, etc.
	})
	// 'axios' converts the 'data' to be appended into a json object from a javascript objects	
	// 'axios' analyses data we are appending and set the 'content-type' header accordingly	
}

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);