const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://reqres.in/api/users?page=2") // .open method prepares the request to be sent, it takes to parameters, first is the type of request you want to sent, and second is the url to which the request is to be sent

	//xhr.responseType = "json";	// uncomment this line to avoid 'JSON.parse' in 'onload' method

	xhr.onload = function(){ // we need to configure the listener to read the response from the request
		console.log(xhr.response) // xhr.response is data in form of single string

		var data = JSON.parse(xhr.response);
		console.log(data);
		// we can avoid the above step of parsing as json by configuring response-type in our request
	}
	xhr.send(); //this will send/execute the request
}

/* XMLHttpRequest is not limited to fetching XML only, but json can also be fetched */
/*
	var xhr = new XMLHttpRequest();
	xhr.open();
	xhr.onload();
	xhr.response;
	xhr.status;
	xhr.responseType = "json";
	xhr.send(data[:optional])
	xhr.onerror()
	xhr.setRequestHeader()
	xhr.onerror()
*/


const postData = function(){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://reqres.in/api/register") 
	xhr.responseType = "json";
	
	xhr.setRequestHeader('Content-Type', "application/json");	// if we are sending some data with request we need to define the 'content-type' in 'headers'

	xhr.onload = function() { 
		console.log(xhr.response);
		console.log(xhr.status); // status of code from response, e.g. 404, 500 etc
	}
	
	// catching errors 
	xhr.onerror = function(err) {
		console.log(err)
	}

	var data = {
		"email":"abc@def.ghi",
		"password": "ag12$%d"
	}
	xhr.send(JSON.stringify(data)); // to send data in post request, we need to convert that data from javascript object to JSON object and pass it as a parameter in '.send' method
}

// wrapping XmlHttpRequest in a 'Promise'
const getDataPromise = function() {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "https://reqres.in/api/register") 
		xhr.responseType = "json";
		xhr.setRequestHeader('Content-Type', "application/json");
		xhr.onload = function() { 
			console.log(xhr.response);
			if(xhr.status==400){
				reject(xhr.response)
			}
			else {
				resolve(xhr.response)
			}
		}
		xhr.onerror = function(err) {
			console.log(err)
		}
		var data = {
			"email":"abc@def.ghi",
			"password": "ag12$%d"
		};
		xhr.send(JSON.stringify(data));
	})
};

getDataPromise().then(function(res) {
	console.log(res)
})
.catch(function(err) {
	console.log(err)
})

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);