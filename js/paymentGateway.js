var packagePrice = document.getElementById("cv_package_id").value
var clientMail = document.getElementById("email_id_pay").value

        ////// initiate paystack payment window

  let handler = PaystackPop.setup({
    key: '', // Replace with your public key
    email: clientMail,
    amount: parseInt(packagePrice) * 100,
    ref: 'rem'+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){

    redirect_url = '../pages/success/success.html';
  location.href = redirect_url;
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

