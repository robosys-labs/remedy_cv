
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
          <p><span>Job Title:</span> <span id='titleId${index}'>${item.job_title}</span></p>
          <p><span>Employer:</span> <span id='employerId${index}'>${item.employer}</span> </p>
          <p ><span>City:</span> <span id='cityId${index}'>${item.city} </span></p>
          <p ><span>Country:</span><span id='countryId${index}'> ${item.country}</span></p>
          <p> <span>Start Date/End Date: </span> <span id='startDateId${index}'> ${item.start_date}</span><span id='endDateId${index}'>${
            item.end_date
          }</span> </p>
          
        </div>
      </div>
      <div class="added_details_right">
        <button 
        type="button" id='editBtn${index}' class="added_details_edit_btn_form_2"
        onclick="editWork(this.id)">Edit <i class="fa-solid fa-pen-to-square"></i></button>
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




function editWork (clicked_id){
  document.getElementById('next_btn').classList.add('hide_work_btn')
  document.getElementById('work_xperience_status_id').classList.add('hide_work_btn')
  document.getElementById('workSaveBtn').style.display = "block"

let splitBtnInd= clicked_id.match(/\d+/g)
for (let i = 0; i < workArray.length; i++) {
  // const element = workArray[i];
  if (i == splitBtnInd[0]) {

document.getElementById('job_title_id').value =  document.getElementById(`titleId${splitBtnInd[0]}`).innerHTML
document.getElementById('employer_id').value =  document.getElementById(`employerId${splitBtnInd[0]}`).innerHTML
document.getElementById('city_id_form_2').value =  document.getElementById(`cityId${splitBtnInd[0]}`).innerHTML
document.getElementById('country_id_form_2').value =  document.getElementById(`countryId${splitBtnInd[0]}`).innerHTML
document.getElementById('start_date_id').value = document.getElementById(`startDateId${splitBtnInd[0]}`).innerHTML
document.getElementById('end_date_id').value = document.getElementById(`endDateId${splitBtnInd[0]}`).innerHTML
// document.getElementById('').value =  document.getElementById(`work_here_status${splitBtnInd[0]}`).innerHTML 


if (splitBtnInd[0] > -1) { // only splice array when item is found
  workArray.splice(splitBtnInd[0], 1);// 2nd parameter means remove one item only
  console.log( workArray.splice(splitBtnInd[0], 1));
}

}
}
}



function saveWorkEdit(){
  document.getElementById('workSaveBtn').style.display= "none"
  document.getElementById('next_btn').style.display= "block"
  document.getElementById('work_xperience_status_id').style.display= "flex"
  console.log(workArray)
  createWorks()
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

function editDesc(){
  // set the container to none
  const elements = document.getElementsByClassName("job_para");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  const descriptions = jobArray.map((x) => x.description);
  const lastDesc = descriptions.pop();
    
  // Create result 
  result = descriptions.join(' ') +" "+ lastDesc;
  console.log(result);
   document.getElementById("job_description_input_id").value= result
   jobArray=[]

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
            <p><span>School name:</span> <span id='schoolNameId${index}'>${item.school_name}</span> </p>
            <p><span>Field of study:</span> <span id='fieldNameId${index}'>${item.field_study}</span> </p>
            <p><span>Degree:</span> <span id='degreeId${index}'>${item.degree}</span> </p>
            <p><span>City:</span> <span id='cityNameId${index}' >${item.city}</span></p>
            <p><span>Country:</span> <span id='countryNameId${index}'> ${item.country}</span></p>
            <p>
             <span>Start Date/End Date: </span> 
             <span id='schoolStartDate${index}'>${item.start_date}</span>
             / <span id='schoolEndDate${index}'>${item.end_date }</span>
              </p>
            
          </div>
        </div>
        <div class="added_details_right">
          <button type='button' onClick='editEducation(this.id)'  id='added_details_form_4_click${index}' class="added_details_edit_btn_form_2">Edit <i class="fa-solid fa-pen-to-square"></i></button>
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


function editEducation (eduClickedId) {


  console.log(eduClickedId)

  document.getElementById('schoolSaveBtn').style.display= "block";
  document.getElementById('next_btn').style.display= "none";
//match numbers in the id, make an array of them and assign to variable
    let eduEditBtnInd= eduClickedId.match(/\d+/g);
    console.log(eduEditBtnInd);
    document.getElementById(`schoolStartDate${eduEditBtnInd[1]}`).innerHTML
for (let i = 0; i < schoolArray.length; i++) {
  
  if (i == eduEditBtnInd[1]) {

document.getElementById('school_name_id').value =  document.getElementById(`schoolNameId${eduEditBtnInd[1]}`).innerHTML
document.getElementById('degree_type_id').value =  document.getElementById(`fieldNameId${eduEditBtnInd[1]}`).innerHTML
document.getElementById('city_id_form_4').value =  document.getElementById(`cityNameId${eduEditBtnInd[1]}`).innerHTML
document.getElementById('country_id_form_4').value =  document.getElementById(`countryNameId${eduEditBtnInd[1]}`).innerHTML
document.getElementById('start_date_form_4_id').value = document.getElementById(`schoolStartDate${eduEditBtnInd[1]}`).innerHTML
document.getElementById('end_date_form_4_id').value = document.getElementById(`schoolEndDate${eduEditBtnInd[1]}`).innerHTML


}

}
if (eduEditBtnInd[1] > -1) { // only splice array when item is found
  schoolArray.splice(eduEditBtnInd[1], 1);// 2nd parameter means remove one item only
}
}



function schoolEditSave(){
  document.getElementById('schoolSaveBtn').style.display= "none"
  document.getElementById('next_btn').style.display= "block"
  document.getElementById('schoolStatusExpId').style.display= "flex"
  createSchoolData()
  console.log();
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
