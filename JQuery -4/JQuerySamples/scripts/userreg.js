
$(document).ready(
    function() {
        $('#btnSubmit').bind('click', getPersonDetails);
        $('#txtDOBDate').datepicker();

        $('#txtZip').bind('keypress', restrictZipCodeSize )

    });

function restrictZipCodeSize()
{
    if($(this).val().length == 5  )
    {
        //alert('Hey ur crossing max length');
        return false;
    }

}

function getPersonDetails(){
    var personaDetails = {
        address :{}
    };

    personaDetails.firstName = $('#txtFName').val();
    personaDetails.lastName = $('#txtLName').val();
    personaDetails.dob = $('#txtDOBDate').val();
    personaDetails.address.city = $('#txtCity').val();
    personaDetails.address.state = $('#myState').val();
    personaDetails.address.zip = $('#txtZip').val();

    validatePerson(personaDetails);

}

function validatePerson (person)
{
    if(person.firstName == "")
    {
        $('#lblFirstNameError').text("Please Enter First Name");
        $('#txtFName').css('backgroundColor','red');
        $('#lblFirstNameError').css('color','red');
        $('#lblFirstNameError').show();
    }
    else { $('#lblFirstNameError'). hide();}

    /*if(person.firstName == "")
    {
        $('#lblFirstNameError').show();

    }*/



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

    if(person.address.city == "")
    {
        $('#lblCityError').text("Please Enter city");
        $('#lblCityError').css('color','red');
        $('#lblCityError').show();
    }
    else { $('#lblCityError'). hide();}

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

}