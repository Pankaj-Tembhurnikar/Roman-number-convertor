 // Your web app's Firebase configuration
  var firebaseConfig = {
     apiKey: "AIzaSyAybDWvyKYsgS0uyRZFXeAGvgDzeSS-ajE",
    authDomain: "roman-2c5ef.firebaseapp.com",
    projectId: "roman-2c5ef",
    storageBucket: "roman-2c5ef.appspot.com",
    messagingSenderId: "831739214400",
    appId: "1:831739214400:web:1ac4de68a1970035303da5",
    measurementId: "G-D8RJBMXBDS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Refernece contactInfo collections
let contactInfo = firebase.database().ref("Roman"+makeid(10));

// Listen for a submit
document.querySelector(".roman-form").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  //   Get input Values
  let message = document.querySelector(".data").value;
  let number = document.querySelector(".number").value;
  console.log(message);
//saveContactInfo(message);
  writeUserData(message,number);
  document.querySelector(".roman-form").reset();
}
// Save infos to Firebase
function saveContactInfo(message) {
  var db = firebase.database();
db.ref("Roman/Roman").set(message);
}
function writeUserData(message,number) {
  firebase.database().ref('Roman'+makeid(10)).set({
    Roman: message,
	number: number
  });
}
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}