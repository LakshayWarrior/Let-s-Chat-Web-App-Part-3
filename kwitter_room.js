
    var firebaseConfig = {
      apiKey: "AIzaSyB-OLmceV2Fhr5MhgzuOUSvpVSZNd_pJrs",
      authDomain: "let-s-chat-web-app-4dada.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-4dada-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-4dada",
      storageBucket: "let-s-chat-web-app-4dada.appspot.com",
      messagingSenderId: "191901016277",
      appId: "1:191901016277:web:046117f27b13b98fc8c25c"
    };
    
    firebase = initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("Room names - " + room_name);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomnames(this.id)'>#"+room_name+"<div><hr>";
      document.getElementById("output").innerHTML+= row;;
      //End code
      });});}
getData();
function redirectToRoomnames(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_page.html";
}

function login(){
      localStorage.addItem("user_name");
}