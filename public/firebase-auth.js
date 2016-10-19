$(function() {
  
  var uid;
  
  var connectedRef = firebase.database().ref('.info/connected');
  connectedRef.on('value', function(snap) {
    if (snap.val() === true) {
      if (uid) {
        firebase.database().ref('users/'+uid+'/online').set(true);
      }
    }
  });
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var photoUrl;
      if (user.photoURL){
        photoUrl = user.photoURL;
      } else {
        photoUrl = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';
      }
      uid = user.uid;
      $('#profile-name').text(user.displayName);
      $('.profile-photo').html('<img src="' + photoUrl + '"/>');
      if (location.pathname != '/chat'){
        firebase.database().ref('users/'+uid+'/chatting_with').set('');
      }
      firebase.database().ref('users/'+uid+'/online').onDisconnect().set(false);
      firebase.database().ref('users/'+uid+'/last_online').onDisconnect().set(firebase.database.ServerValue.TIMESTAMP);
    } else {
      location.href = "/";
    }
  });
  
  $(document).on('click','#signout',function(){
    firebase.auth().signOut().then(function() {
      location.href = "/";
    }, function(error) {
      // An error happened.
    });
  });
  
});

