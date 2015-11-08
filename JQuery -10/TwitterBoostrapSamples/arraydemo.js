

//var json = require('package.json');
var  make = ["Audi", "Benz", "BMW" ];

var makeInfo = {"Make" : [{Name:"AUDI", Price: 100 }, {Name:"Benz", Price:200}]}

$('#btnDisplayMake').click(function(){

    //$('#lblShowMakeInfo').text(make.valueOf());
    $('#lblShowMakeInfo').text(make.toString());
});


$('#btnDisplayMakeInfo').click(function(){
   $('#lblShowMakeJsonInfo').text(makeInfo.Make.valueOf());
  //
});

$('#btnSearch').click(function(){

    $('#lblDisplaySearchResult').text(getMembersDetails());
});

var getMembersDetails = function () {


    var url = "http://private-a73e-aquentuxsociety.apiary-mock.com/members";

    $.ajax(
        {
            url: 'http://private-a73e-aquentuxsociety.apiary-mock.com/members',
            method: "GET",
            dataType: 'json',
            async: false// POST, PUT, DELETE, GET
        }
    )
        .success(function (response) {
            console.log(response);

            var searchInput = $('#txtSearch').val();

            for(var i=0; i<response.length; i++)
            {
                if(response.gender[i].JSON.parse() ==  searchInput)
                    return  response[i].id  + 'Yes It is Available' ;


            }
            return searchInput + 'Not Available';


        })

        .error(function (response) {

            console.log(response);

        });


};
