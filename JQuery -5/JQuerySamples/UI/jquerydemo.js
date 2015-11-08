
 /* var mks = document.getElementById('lblMake');
mks.innerHTML = "Make :" ; */

function loadMake (){

    var make = $('#lblMake');
   make.text("Enter Make:");
    make.style.color="red";
    make.style.fontSize="25px";
};

loadMake();
getElemById