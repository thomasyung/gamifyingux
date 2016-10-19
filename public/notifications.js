// Add notifications.js script to any page that has the notification icon

var notificationsBtn = document.getElementById('notifications');
notificationsBtn.addEventListener('click', function(event){
  location.href = '/notifications';
});
var data_badge_cnt = 0;
firebase.auth().onAuthStateChanged(function(user){
  if (user){
    // default is to show no badge
    notificationsBtn.innerHTML = '<i class="material-icons">notifications</i>';
    // if there are notifications, keep track of how many
    firebase.database().ref('notifications/'+user.uid).on('child_added', function(){
      data_badge_cnt++;
      // Show notification icon with badge
      notificationsBtn.innerHTML = '<i class="material-icons mdl-badge mdl-badge--overlap" data-badge="'+data_badge_cnt+'">notifications</i>';
    });
  }
});