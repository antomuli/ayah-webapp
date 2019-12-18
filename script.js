$(document).ready(function(event){
  $(event).preventDefault();

  $("#househelpform").click(function() {
    $(".househelpSubmitForm").show();
  });

  $("#employerform").click(function(){
    $("#employerSubmitForm").show();
  });
});