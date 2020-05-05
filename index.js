// navbar hamburger menu scripting
var toggle = 0;
document.querySelector(".hamb").addEventListener("click", function(){
    toggle++;
    if(toggle%2 == 1){
    document.querySelector('.navitem').style.display = "block";
    document.querySelector('.navitem1').style.display = "block"; 
    document.querySelector('.navitem2').style.display = "block";
    document.querySelector('.navitem3').style.display = "block";
    document.querySelector('.navitem4').style.display = "block";
    document.querySelector('.navitem5').style.display = "block";
    }
    if(toggle%2 == 0){
    document.querySelector('.navitem').style.display = "none";
    document.querySelector('.navitem1').style.display = "none";
    document.querySelector('.navitem2').style.display = "none";
    document.querySelector('.navitem3').style.display = "none";
    document.querySelector('.navitem4').style.display = "none";
    document.querySelector('.navitem5').style.display = "none";

    }
    

    
});