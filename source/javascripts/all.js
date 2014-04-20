//= require_tree .

$(document).ready(function() {
  $('#fullpage').fullpage({
    menu: '#menu',
    anchors: ['page-about', 'page-video', 'page-trainings', 'page-coaches', 'page-clients', 'page-history', 'page-contacts'],
    loopHorizontal: false,
    onLeave: function(index, direction){
      if (index == 1) {
        console.log("From About;")
      }
    }
  });
  $(".coaches-inner .coach").hover(function(){coachesOn(this)}, function(){coachesOut()}).click(function(){coachesOn(this)});
});