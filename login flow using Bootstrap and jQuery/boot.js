if (typeof(Storage) !== "undefined") {
	localStorage.setItem("username","rahul");
	localStorage.setItem("password","rahul123");
	function loginFlow() {
	   var storeUsername=localStorage.getItem("username");
	   var storePassword=localStorage.getItem("password");
	   var user=document.getElementById("username").value;
	   var pass=document.getElementById("password").value;
	   if (user==storeUsername && pass==storePassword) {
	   	window.location="./testimganimation.html"
	   }
	}
}