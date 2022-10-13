var packagePrice = document.getElementById("cv_package_id");
var clientMail = document.getElementById("email_id_pay");
function payParam() {
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
    job_description: jobArray,
  };

  ////// initiate paystack payment window
  let handler = PaystackPop.setup({
    key: "", // Replace with your public key
    email: clientMail.value,
    amount: parseInt(packagePrice.value) * 100,
    ref: "rem" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function () {
      alert("Window closed.");
    },
    callback: function (response) {
      if (response.status === 200) {
        // submit form to backend  //
        $.ajax({
          type: "POST",
          url: "https://staging.remedyportal.com/api/v1/cv",
          data: formData,
          success: function () {
            // Success Page
            redirect_url = "../pages/success/success.html";
            location.href = redirect_url;
            let message = "Payment complete! Reference: " + response.reference;
          },
          error: function (data) {
            console.log(data);
          },
          dataType: "json",
          contentType: "application/json",
        });
      } else {
        console.log("There was a problem completing payment");
      }
    },
  });
  handler.openIframe();
}
