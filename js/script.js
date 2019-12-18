$(document).ready(function () {

  //Show househelp form upon clicking househelpForm button
  $(".househelpForm" || "find").click(function(){
    $(".househelpSubmitForm").show();
  });

   //Show household form upon clicking employerForm button
   $(".employerForm"||"hire").click(function(){
    $(".householdSubmitForm").show();
  });

  //Show registration form opon clicking signupbutton
  $(".signupbutton").click(function(){
    $(".registrationform").show();
  });

  // Househelp form data
  var househelp = $(".househelpSubmitForm form")

  var fullName = $('input[name="fullname"]', househelp).val()
  var dateOfBirth = $('input[name="dateOfBirth"]', househelp).val()
  var county = $("select :selected", househelp).val()
  var maritalStatus = $('input[name="maritalStatus"]', househelp).val()
  var workingEnvironment = $('input[name="environment"]', househelp).val()
  var skills = $('input[name="skills"]', househelp).val()
  var education = $("select :selected", househelp).val()


  //Household form data
  var household = $(".householdSubmitForm form")

  var fullName = $('input[name="fullname"]', household).val()
  var county = $("select :selected", household).val()
  var maritalStatus = $('input[name="maritalStatus"]', household).val()
  var totalNumberOfFamilyMembers = $('input[type="number"]', household).val()
  var children = $('.children', household).val()
  var preference = $('input[name="stay"]', household).val()
  var skills = $('input[name="skills"]', household).val()
  var education = $("select :selected", household).val()
})