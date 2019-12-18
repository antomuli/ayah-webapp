$(document).ready(function() {
  //Opacity to 1 on clicking checkboxes
  $("label#checked"):active {opacity:1;}
  $("#checked"):visited {opacity:1;}
  //Show househelp form upon clicking househelpForm button
  $(".househelpForm" || "find").click(function() {
    $(".househelpSubmitForm").show();
  });

  //Show household form upon clicking employerForm button
  $(".employerForm" || "hire").click(function() {
    $(".householdSubmitForm").show();
  });

  //Show registration form opon clicking signupbutton
  $(".signupbutton").click(function() {
    $(".registrationform").show();
  });

  //Show text file below tlc and private policy links

  //Script for range-labels
  // define a lookup for what text should be displayed for each value in your range
  var rangeValues = {
    "1000": "You've selected option 1!",
    "5000": "...and now option 2!",
    "10000": "...stackoverflow rocks for 3!",
    "15000": "...and a custom label 4!",
    "20000": "You've selected option 1!"
  };

  $(function() {
    // on page load, set the text of the label based the value of the range
    $("#rangeText").text(rangeValues[$("#rangeInput").val()]);

    // setup an event handler to set the text when the range value is dragged (see event for input) or changed (see event for change)
    $("#rangeInput").on("input change", function() {
      $("#rangeText").text(rangeValues[$(this).val()]);
    });
  });
  // Househelp form data
  var househelp = $(".househelpSubmitForm form");

  var fullName = $('input[name="fullname"]', househelp).val();
  var dateOfBirth = $('input[name="dateOfBirth"]', househelp).val();
  var county = $("select :selected", househelp).val();
  var maritalStatus = $('input[name="maritalStatus"]', househelp).val();
  var workingEnvironment = $('input[name="environment"]', househelp).val();
  var skills = $('input[name="skills"]', househelp).val();
  var education = $("select :selected", househelp).val();

  //Household form data
  var household = $(".householdSubmitForm form");

  var fullName = $('input[name="fullname"]', household).val();
  var county = $("select :selected", household).val();
  var maritalStatus = $('input[name="maritalStatus"]', household).val();
  var totalNumberOfFamilyMembers = $('input[type="number"]', household).val();
  var children = $(".children", household).val();
  var preference = $('input[name="stay"]', household).val();
  var skills = $('input[name="skills"]', household).val();
  var education = $("select :selected", household).val();
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}
