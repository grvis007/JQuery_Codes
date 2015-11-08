/*** Created by Gaurav on 8/21/2015.**/

$(document).ready(function(){
    $('#btnSubmit').bind('click', getPersonDetails);
    showselectedPage();
    $('#home, #about, #contact,#register,#btnSubmit,#login').bind('click', loadpages )
    $('#inputzip').bind('blur', restrictZipCodeSize );

});
function addDate(){
    $('#inputdob').datepicker({
        maxDate:7,
        minDate:-7
    });
}
function restrictZipCodeSize()
{
    if($(this).val().length == 5)
    {
        //alert('Hey ur crossing max length');
        return false;
    }
}

var hidepages = function(){
    $('#homePage, #aboutPage, #contactPage,#registerPage,#submitPage,#signinpage').hide();
    //$('#profilePage,#messagesPage').hide();
};

var loadpages = function(){

    //console.log($(this));
    var selectedPage = $(this).attr('id');// $(this) helps in getting all the prroperties of the pages but .attr(id)helps in getting only id
    console.log(selectedPage);
    showselectedPage(selectedPage);
};


var showselectedPage  = function (pagename){
    hidepages();
    switch (pagename) {

        case 'home':
            $('#homePage').show();
            break;
        case 'about':
            $('#aboutPage').show();
            break;
        case 'contact':
            $('#contactPage').show();
            break;
        case 'register':
            $('#registerPage').show();
            break;
        case 'btnSubmit':
            $('#submitPage').show();
            break;
        case 'login':
            $('#signinpage').show();
            break;
        default :
            $('#homePage').show();
            break;
    }

};

function getPersonDetails()
{
    var personaDetails = {
        address :{}
    };

    personaDetails.firstName = $('#inputfname').val();
    personaDetails.lastName = $('#inputlname').val();
    personaDetails.dob = $('#inputdob').val();
    personaDetails.address.country = $('#inputcountry').val();
    personaDetails.address.state = $('#inputstate').val();
    personaDetails.address.zip = $('#inputzip').val();

    validatePerson(personaDetails);
    ajaxcall();
};

function ajaxcall()
{
    $.ajax({
        url: "",
        //cache: false,
        beforeSend: function(){
            $('#bgimage').show().delay(5000).fadeOut();
            $('#submitMsg').hide();
        },
        complete: function(){
            $('#submitMsg').show();
            $('#bgimage').hide();
        },
        success: function(html){
            $('.info').append(html);
        }
    });
}
function validatePerson (person)
{
    if(person.firstName == "")
    {
        $('#lblFirstNameError').text("Please Enter First Name");
       // $('#lblFirstNameError').css('backgroundColor','red');
        $('#lblFirstNameError').css('color','red');
        $('#lblFirstNameError').show();
    }
    else { $('#lblFirstNameError'). hide();}

    if(person.lastName == "")
    {
        $('#lblLastNameError').text("Please Enter Last Name");
        $('#lblLastNameError').css('color','red');
        $('#lblLastNameError').show();
    }
    else { $('#lblLastNameError'). hide();}

    if(person.dob == "")
    {
        $('#lblDOBError').text("Please Enter DOB");
        $('#lblDOBError').css('color','red');
        $('#lblDOBError').show();
    }
    else { $('#lblDOBError'). hide();}

    if(person.address.country == "")
    {
        $('#lblCountryError').text("Please Enter Country");
        $('#lblCountryError').css('color','red');
        $('#lblCountryError').show();
    }
    else { $('#lblCountryError'). hide();}

    if(person.address.state == "")
    {
        $('#lblStateError').text("Please Enter State");
        $('#lblStateError').css('color','red');
        $('#lblStateError').show();
    }
    else { $('#lblStateError'). hide();}

    if(person.address.zip == "")
    {
        $('#lblZipError').text("Please Enter zip");
        $('#lblZipError').css('color','red');
        $('#lblZipError').show();
    }
    else { $('#lblZipError'). hide();}

};









