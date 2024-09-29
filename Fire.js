const firebaseConfig = {
    apiKey: "AIzaSyAXM7hQlkbeMXK-hPTalKwwIVb0mWh8TIc",
    authDomain: "club-o-vent.firebaseapp.com",
    databaseURL: "https://club-o-vent-default-rtdb.firebaseio.com",
    projectId: "club-o-vent",
    storageBucket: "club-o-vent.appspot.com",
    messagingSenderId: "296487160986",
    appId: "1:296487160986:web:e869dea4372f93f1862323",
    measurementId: "G-DF9S8KVGB8"
  };

  firebase.initializeApp(firebaseConfig);
    
  var CluboventDB  = firebase.database().ref('ClubOventDB');
  document.getElementById('loginForm').addEventListener('Login',submitForm);

  function  submitForm(e){
  e.preventDefault();

  var email= getElementVal('email');
  var password = getElementVal('password');

  saveMessages(email,password);

  }

  const saveMessages=(email,password) => {
    var newClubovent = CluboventDB.push();

    newClubovent.set({
        email: email,
        password: password,
    });
  };

  

  const getElementVal =(id) =>{
    return document.getElementById(id).value;
  }






  

  
