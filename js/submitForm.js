function submitCreate() {
    audio.play();
  var formData = {
    first_name: document.getElementById("first_name_id").value,
    last_name: document.getElementById("last_name_id").value,
    phone_number: document.getElementById("phone_number_id").value,
    pages: 3,
    package_id: document.getElementById("cv_package_id").value,
    email: document.getElementById("email_id").value,
    cv_education: schoolArray,
    cv_work_history: workArray,
    cv_skill_certification: skillArray,
    job_description: jobArray
  };
  console.log(formData);



        ////// initiate paystack payment window
  handler.openIframe();

  let handler = PaystackPop.setup({
    key: ' ', // Replace with your public key
    email: "oshojoseph2@gmail.com",
    amount: 1000 * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();

  // submit form to backend


//   $.ajax({
//     type: "POST",
//     url: "https://staging.remedyportal.com/api/v1/cv",
//     data: formData,
//     success: function () {
//         console.log("we move to payment")
//     },
    // dataType: "json",
    // contentType : "application/json"
//   });
}