

function createAccordion()
{
    $('#accordionDemo').accordion();
}
//createAccordion();

function addDate(){
    $('#txtDate').datepicker({
        maxDate:7,
        minDate:-7
    });
}

//addDate();

$(document).ready(
    function(){
    /* console.log('Hi All I am Ready'); */
        $('#btnCallMe').bind('click', validate);
}
);

function validate(){
    alert('Hi I am in Ready .. and binded to click event');
}

console.log('Hi all I am not ready');
