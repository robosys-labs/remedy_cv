

  const allTabs = document.getElementsByClassName("tab");
  const previousBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('next_btn');
  const mother_form= document.getElementById('mother_form_container')





var currentTab = 0; 

function showTab (n) {
    console.log(" n  passed into", n);

  allTabs[n].style.display = "block";
  
  if (n == 0) {
    previousBtn.style.display = "none";
  } else {
    previousBtn.style.display = "flex";
  }
  if (n == (allTabs.length - 1)) {
    nextBtn.innerHTML = "Submit";
  } else {
    nextBtn.innerHTML = "Next";
  }
  
}
showTab(currentTab); 
const validateForm = () => {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    console.log(y, "is here");
    console.log(valid);
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].placeholder='Sorry! you have not Filled This';
        y[i].className += " invalid";
  
        
        // and set the current valid status to false
        valid = false;
  
      }
    }
    // If the valid status is true, mark the step as finished and valid:
  //   if (valid) {
  //     document.getElementsByClassName("step")[currentTab].className += " finish";
  //   }
    return valid; // return the valid status
  }

function  nextPrev (n) {
 console.log("initial n ", n);
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  allTabs[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  console.log("added n ", n);
  // if you have reached the end of the form...
  if (currentTab >= allTabs.length) {
    // ... the form gets submitted:
    mother_form.submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
  
}






function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}






// Nav bar script
function toggleMenu() {
  console.log((document.getElementById("mob_menu").style.transform))
  if (document.getElementById("mob_menu").style.transform != "translateX(0vw)"){
      document.getElementById("mob_menu").style.transform = "translateX(0vw)"
  }
  else if(document.getElementById("mob_menu").style.transform === "translateX(0vw)"){
      document.getElementById("mob_menu").style.transform = "translateX(90vw)"
  }
}