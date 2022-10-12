const uploadFileDiv = document.getElementById('upload_area_id')
const sendEmailFileDiv = document.getElementById('send_via_email_id')
const deviceInputRadio = document.getElementById('device_input_id')
const emailInputRadio = document.getElementById('email_input_id')

// sendEmailFileDiv.style.display = "none"
function showUpload (n){
        if(( deviceInputRadio.checked) && uploadFileDiv.style.display != "block" && n != 2){
            uploadFileDiv.style.display = "block"
            sendEmailFileDiv.style.display = "none"
        }
    else if(( emailInputRadio.checked) && sendEmailFileDiv.style.display != "block" && n != 1){
        uploadFileDiv.style.display = "none"
        sendEmailFileDiv.style.display = "block"
    }
    console.log(n);
    console.log(sendEmailFileDiv.style.display)

}



function toggleMenu() {
    console.log((document.getElementById("mob_menu").style.transform))
    if (document.getElementById("mob_menu").style.transform != "translateX(0vw)"){
        document.getElementById("mob_menu").style.transform = "translateX(0vw)"
    }
    else if(document.getElementById("mob_menu").style.transform === "translateX(0vw)"){
        document.getElementById("mob_menu").style.transform = "translateX(90vw)"
    }
}
var formData =[{
    
}]