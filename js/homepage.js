$(document).ready(function() {
    if ($('#aopsun').length > 0 ) {
        contactScript('forcontact');
    }
});

function send_form() {
    var config = {
     apiKey: "AIzaSyDKYC0RhUFLWDeWCL5kGo7Weoi9wNGMEUw",
     authDomain: "personal-site-bae72.firebaseapp.com",
     databaseURL: "https://personal-site-bae72.firebaseio.com",
     projectId: "personal-site-bae72",
     storageBucket: "personal-site-bae72.appspot.com",
     messagingSenderId: "762392894866"}
    firebase.initializeApp(config);
    var b = firebase.database().ref("messages");
    var c = $("#name").val();
     
