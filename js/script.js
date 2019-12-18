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

  //Script for range-labels
  // define a lookup for what text should be displayed for each value in your range
var rangeValues =
{
    "1000": "You've selected option 1!",
    "5000": "...and now option 2!",
    "10000": "...stackoverflow rocks for 3!",
    "15000": "...and a custom label 4!",
    "20000": "You've selected option 1!"
};

$(function () {

    // on page load, set the text of the label based the value of the range
    $('#rangeText').text(rangeValues[$('#rangeInput').val()]);

    // setup an event handler to set the text when the range value is dragged (see event for input) or changed (see event for change)
    $('#rangeInput').on('input change', function () {
        $('#rangeText').text(rangeValues[$(this).val()]);
    });

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