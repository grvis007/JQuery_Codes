/**
 * Created by Harsha on 8/8/2015.
 */

/*
1.  select element by Id
     $(#id) ===> document.getElementById('id')

 2.  select element by name

     $('.cssClassName') ===> document.getElemenyByClass

  3. select element by Tag Name

       $('div') ===> document.getElementByTagName('tagName')

 */

function getElemById(){
    var make = $('#lblMake');
    make.text("Enter Make:");

    var txtBox = $('#txtMake');
    //txtBox.val('Honda');

    var make = $('#lblModel');
    make.text("Enter Model:");

    var txtBox = $('#txtModel');
    //txtBox.val('City');
}

getElemById();


function getElementsByClass(){

    var txtboxes = $('.txt-medium');
    for(var i = 0; i<txtboxes.length; i++ )
    {
        if(i == 0)
        {
            $(txtboxes[i]).val('Benz');
        }
        else {
            $(txtboxes[i]).val('c 3000');
        }
    }
}
getElementsByClass();


/* $.each(collection, function(index, value){}) */

function forEachDemo()
{
    var vehicles = [
        {name: "Honda", price:"$1000", dealer:"ABCD"},
        {name: "Benz", price:"$2000", dealer:"XYZ"},
        {name: "Audi", price:"$3000", dealer:"RTXC"},
        {name: "Suzuki", price:"$4000", dealer:"MNO"}
    ];

    $.each(vehicles, function(index, value)
        {
          console.log(value.name);
          console.log(value.price);
        }
    )

    $.each($('label'), function(index, value)
        {
            if(index == 0)
            {
               $(value).text(" Please Enter Make Details: ")
            }
            else
            {
                $(value).text("Please Enter Model Details: ")

            }
        }
    )

    $.each($('input'), function(index, value)
        {
            if(index == 0)
            {
                $(value).val("Audi");
            }
            else
            {
                $(value).val("A5");

            }
        }
    )

}
forEachDemo();
