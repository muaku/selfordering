// Get element
const txtEmail = document.getElementById("email")
const txtpassword = document.getElementById("password")
const loginBtn = document.getElementById("loginBtn")
const signupBtn = document.getElementById("signupBtn")
const fbloginBtn = document.getElementById("fbloginBtn")
const logoutBtn = document.getElementById("logoutBtn")

// TODO: MOVE FROM WHEN IN PRODUCTION MODE
const ENDPOINT_URL = "http://54.169.228.139:3000/graphiql"

// Add login event
loginBtn.addEventListener("click", e => {
	const email = txtEmail.value
	const password = txtpassword.value

	firebase.auth().signInWithEmailAndPassword(email, password)
		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  if (errorCode === 'auth/wrong-password') {
		    alert('Wrong password.');
		  } else {
		    alert(errorMessage);
		  }
		  console.log(error);
		})

})


// Add login with facebook
fbloginBtn.addEventListener("click", e => {

	// Start a sign in process for an unauthenticated user.
	var provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope("user_birthday")
	firebase.auth().signInWithRedirect(provider);

	// Sign in using a redirect.
	firebase.auth().getRedirectResult()
		.then(function(result) {
			console.log(result)

		  if (result.credential) {
		    // This gives you a Google Access Token.
		    var token = result.credential.accessToken;
		    console.log("token: ", token)
		  }
		  var user = result.user;
		  console.log(user)
		})
		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  
		  console.log(errorMessage)
		})

})


// Add sign up event on frontend
signupBtn.addEventListener("click", e => {
	const email = txtEmail.value
	const password = txtpassword.value

	firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  if (errorCode == 'auth/weak-password') {
		    alert('The password is too weak.');
		  } else {
		    alert(errorMessage);
		  }
		  console.log(error);
		});

})


// Add Log out event
logoutBtn.addEventListener("click", e => {
	firebase.auth().signOut()
		.catch(err => console.log(err))
})


// On auth state changed
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("User logged in")
    console.log(user)

    // When user login, request to get menus
    requestMenus()

  }else {
  	console.log("user not logged in")
  }
});


/*
	Test sending token
*/
var requestMenus = () => {
	// Get current user tokenId
	firebase.auth().currentUser.getToken( /* force refresh */ true)
		.then(tokenId => {
			console.log("tokenId: ", tokenId)
			// Request to server with this tokenId
			xmlRequest("POST", )

		})
		.catch(err => console.log(err))
}

//
var xmlRequest = function(method, url, body){
	var xhr = new XMLHttpRequest()
	xhr.responseType = 'json';
	xhr.open(method, url);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("TokenId", body)
	xhr.onload = function () {
	  console.log('data returned:', xhr.response);
	}
	xhr.send(JSON.stringify({
		mutation{
  			addMenu(data:{
			    restaurant_id:"5974b7f4b693010d07c2df5c"
			    name:"FER"
			    price:20000
			  }) {
			    id
			  }
			}
	}))
}























