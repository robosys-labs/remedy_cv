var packagePrice = document.getElementById("cv_package_id");
var clientMail = document.getElementById("email_id_pay");
function payParam() {
  var formData = {
    full_name: document.getElementById("full_name_id").value,
    phone_number: document.getElementById("phoneNumId").value,
    pages: document.getElementById("number_pages").value,
    package_id: document.getElementById("cv_package_id").value,
    email: document.getElementById("email_id_pay").value,
    cv_file: document.getElementById("cv_file").value,
  };
  // formData.append(cv_file, "cv_file");
  console.log(formData);
  ////// initiate paystack payment window
  // let handler = PaystackPop.setup({
  //   key: "pk_live_5f88577a67b8571a55efe2f3e62697cba524e03e", // Replace with your public key
  //   email: clientMail.value,
  //   amount: parseInt(packagePrice.value) * 100,
  //   ref: "rem" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
  //   // label: "Optional string that replaces customer email"
  //   onClose: function () {
  //     alert("Window closed.");
  //   },
  //   callback: function (response) {
  // formData.code = response.reference;
  // console.log(formData);
  // submit form to backend  //
  $.ajax({
    type: "POST",
    url: "https://staging.remedyportal.com/api/v1/cv",
    data: formData,
    success: function (data) {
      // Success Page
      console.log("file saved ", data);
      redirect_url = "https://cv.remedyportal.com/pages/success.html";
      location.href = redirect_url;
      // let message = "Payment complete! Reference: " + response.reference;
    },
    error: function (data) {
      console.log(data);
    },
    dataType: "json",
    contentType: "application/json",
  });

  //   },
  // });
  // handler.openIframe();
}
