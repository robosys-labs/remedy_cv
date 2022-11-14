const modal_close= document.getElementById('close_modal_1');
const modal_div =document.getElementById('form_modal_id');
const btn_collection = document.querySelectorAll('.get_started');



    
    
btn_collection.forEach(btn=>btn.addEventListener('click', e=>{
    // console.log('i am happy')
    console.log(modal_div.style.display, 'modal display')
    if (modal_div.style.display ==='none' || modal_div.style.display ===''){
        modal_div.style.display='flex'

    }else(
        modal_div.style.display='none'
    )

    
}))

modal_close.addEventListener('click',e=>{
    if (modal_div.style.display=='flex'){
      console.log('modal div is flex')
      modal_div.style.display='none'
    }else(
        // modal_div.style.display='flex'
        console.log('.....')
    )
})
     
    


function toggleMenu() {
    console.log((document.getElementById("mob_menu").style.transform))
    if (document.getElementById("mob_menu").style.transform != "translateX(0vw)"){
        document.getElementById("mob_menu").style.transform = "translateX(0vw)"
    }
    else if(document.getElementById("mob_menu").style.transform === "translateX(0vw)"){
        document.getElementById("mob_menu").style.transform = "translateX(90vw)"
    }
}