const allTabs = document.getElementsByClassName("tab");
const previousBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("next_btn");
const mother_form = document.getElementById("mother_form_container");
let skillArray = [];
var schoolArray = [];
var workArray = [];
var jobArray = [];

var currentTab = 0;

function showTab(n) {
  console.log(" n  passed into", n);

  allTabs[n].style.display = "block";

  if (n == 0) {
    previousBtn.style.display = "none";
  } else {
    previousBtn.style.display = "flex";
  }
  if (n == allTabs.length - 1) {
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
};

function nextPrev(n) {
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  allTabs[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
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
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

// Nav bar script
function toggleMenu() {
  if (
    document.getElementById("mob_menu").style.transform != "translateX(0vw)"
  ) {
    document.getElementById("mob_menu").style.transform = "translateX(0vw)";
  } else if (
    document.getElementById("mob_menu").style.transform === "translateX(0vw)"
  ) {
    document.getElementById("mob_menu").style.transform = "translateX(90vw)";
  }
}

// Add More details functions /////////////////////////////////////////////

const work_details_node = document.createElement("div");
work_details_node.id = "form2out";
function createWorks() {
  workArray.push({
    start_date: document.getElementById("start_date_id").value,
    end_date: document.getElementById("end_date_id").value,
    employer: document.getElementById("employer_id").value,
    job_title: document.getElementById("job_title_id").value,
    country: document.getElementById("country_id_form_2").value,
    city: document.getElementById("city_id_form_2").value,
    current_work: document.getElementById("work_here_status").value,
  });
  const elements = document.getElementsByClassName("form_2_card_cousins");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  workArray.map((item, index) => {
    const work_details_nodeIn = document.createElement("div");
    work_details_nodeIn.className = "form_2_card_cousins";

    const markup = `
    
    <div class="form_2_added_details_card">
      <div class="added_details_left">
        <h4>Work History ${index + 1}</h4>
        <div class="added_details_desc">
          <p><span>Job Title:</span> ${item.job_title}</p>
          <p><span>Employer:</span>  ${item.employer}</p>
          <p><span>City:</span> ${item.city} </p>
          <p><span>Country:</span> ${item.country}</p>
          <p> <span>Start Date/End Date: </span> ${item.start_date}/${
      item.end_date
    } </p>
          
        </div>
      </div>
      <div class="added_details_right">
        <button  id='added_details_form_2_click' class="added_details_edit_btn_form_2">Edit <i class="fa-solid fa-pen-to-square"></i></button>
      </div>
    </div>
    `;
    work_details_node.append(work_details_nodeIn);
    work_details_nodeIn.innerHTML = markup;
    document.getElementById("form_2_add_detail").append(work_details_node);
  });
  //set inputs to empty string
  document.getElementById("job_title_id").value = " ";
  document.getElementById("employer_id").value = " ";
  document.getElementById("city_id_form_2").value = " ";
  document.getElementById("country_id_form_2").value = " ";
  document.getElementById("start_date_id").value = " ";
  document.getElementById("end_date_id").value = " ";
  document.getElementById("work_here_status").value = " ";

  document.getElementById("form_2_add_detail").style.display = "block";
}

//form 3/// FOR JOB DESCRIPTION///////////////////////////
const jobDescContainer = document.getElementById("job_desc_div");

function createJobDescr() {
  jobArray.push({
    description: document.getElementById("job_description_input_id").value,
  });
  const elements = document.getElementsByClassName("job_para");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  jobArray.map((item) => {
    const node = document.createElement("p");
    node.className = "job_para";
    const textnode = item.description;
    node.innerHTML = textnode;
    document.getElementById("job_desc_div").append(node);
    document.getElementById("job_description_input_id").value = " ";
    document.getElementById("job_desc_div_container").style.display = "block";
  });

}

// form 4 /////////// FOR EDUCATION/////////////////////////
const school_details_node = document.createElement("div");

function createSchoolData() {
  schoolArray.push({
    school_name: document.getElementById("school_name_id").value,
    field_study: document.getElementById("field_study_id").value,
    degree: document.getElementById("degree_type_id").value,
    city: document.getElementById("city_id_form_4").value,
    country: document.getElementById("country_id_form_4").value,
    start_date: document.getElementById("start_date_form_4_id").value,
    end_date: document.getElementById("end_date_form_4_id").value,
    current_school: document.getElementById("current_school").value,
  });
  const element4 = document.getElementsByClassName("form_4_card_cousins");
  while (element4.length > 0) {
    element4[0].parentNode.removeChild(element4[0]);
  }
  schoolArray.map((item, index) => {
    const school_details_nodeIn = document.createElement("div");
    school_details_nodeIn.className = "form_4_card_cousins";
    const markup = `
      <div class="form_2_added_details_card">
        <div class="added_details_left">
          <h4>Education ${index + 1} </h4>
          <div class="added_details_desc">
            <p><span>School name:</span> ${item.school_name}</p>
            <p><span>Field of study:</span>  ${item.field_study}</p>
            <p><span>Degree:</span> ${item.degree} </p>
            <p><span>City:</span> ${item.city}</p>
            <p><span>Country:</span> ${item.country}</p>
            <p> <span>Start Date/End Date: </span> ${item.start_date}/${
      item.end_date
    }</p>
            
          </div>
        </div>
        <div class="added_details_right">
          <button  id='added_details_form_4_click' class="added_details_edit_btn_form_2">Edit <i class="fa-solid fa-pen-to-square"></i></button>
        </div>
      </div>
      `;
    school_details_node.append(school_details_nodeIn);
    school_details_nodeIn.innerHTML = markup;
    document.getElementById("form_4_add_details").append(school_details_node);

    //set inputs to empty string
    document.getElementById("school_name_id").value = " ";
    document.getElementById("field_study_id").value = " ";
    document.getElementById("degree_type_id").value = " ";
    document.getElementById("city_id_form_4").value = " ";
    document.getElementById("country_id_form_4").value = " ";
    document.getElementById("start_date_form_4_id").value = " ";
    document.getElementById("end_date_form_4_id").value = " ";
    document.getElementById("current_school").value = " ";

    document.getElementById("form_4_add_details").style.display = "block";
  });

}

// form 5 /////////// FOR skill/////////////////////////

var skill_lists = document.getElementById("skill_list_id");
const skill = document.createElement("ul");
skill.id = "skillUlId";
function createSkillsData() {
  skillArray.push({ skill: document.getElementById("skills_cert_id").value });
  const skillLi = document.createElement("li");
  skillLi.className = "skill_list";
  skillLi.id = "skillId" + Math.floor(Math.random() * 100);
  skillLi.onclick = function (e) {
    document.getElementById(this.id).remove();
  };
  skillArray.map((item, index) => {
    const newSkill = `
      <p>${item.skill.substring(0, 20)}</p>
      <button type="button"  id='remove${index}' class="added_details_edit_btn_form_3" ">Remove <i class="fa-solid fa-pen-to-square"></i></button>
      `;
    skill.append(skillLi);
    skillLi.innerHTML = newSkill;
    skill_lists.append(skill);
    document.getElementById("skills_cert_id").value = " ";
  });

  document.getElementById("skills_cert_div_container").style.display = "block";

}
