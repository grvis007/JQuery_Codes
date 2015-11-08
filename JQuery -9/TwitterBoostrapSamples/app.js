


$(document).ready(function(){

    //hidepages();
    //showseledPage();
    $('#home, #profile, #messages').bind('click', loadpages )

    getWeatherReport();
    /*$.getJSON("http://private-a73e-aquentuxsociety.apiary-mock.com/members",function(data) {
        $.each(data,function(data){

            $("ul").append("<li>id: "+this['id']+"</li><li>Gender :"+this['gender']+"</li><li>title: "+this['title']+"</li><li>firstName: "+this['firstName']+"</li><br />");
        });
    });
*/

});

var hidepages = function(){
    $('#homePage, #profilePage, #messagesPage').hide();
    //$('#profilePage,#messagesPage').hide();
};

var loadpages = function(){

  //console.log($(this));
   var selectedPage = $(this).attr('id');
    console.log(selectedPage);
    showseledPage(selectedPage);

};


var showseledPage  = function (pagename){
    hidepages();
    switch (pagename) {

        case 'home':
            $('#homePage').show();
            break;
        case 'profile':
            $('#profilePage').show();
            break;
        case 'messages':
            $('#messagesPage').show();
            break;
        default :
            $('#homePage').show();
            break;
    }
};

var getWeatherReport = function () {

    var url = "http://api.openweathermap.org/data/2.5/weather?q=Chicago";

    $.ajax(
        {

            url: url,
            method: "GET" // POST, PUT, DELETE, GET
        }
    )
        .success(function (response) {

            console.log(response);
            $('#hydweatherReport').text(response.weather[0].description);
            $('#hydweatherReportforHumidity').text(response.base);
            $('#countryweather').text(response.sys.country);

        })

        .error(function (response) {

            console.log(response);

        });


};

var members = function () {

    var url = "http://private-a73e-aquentuxsociety.apiary-mock.com/members";

    $.ajax(
        {

            url: url,
            method: "GET" // POST, PUT, DELETE, GET
        }
    )
        .success(function (response) {

            for(var i=0;i<=532;i++){
            console.log(response[0].id);}
            //$('#members1').text(response[0].id);
            //$('#hydweatherReportforHumidity').text(response.base);
            //$('#countryweather').text(response.sys.country);

        })

        .error(function (response) {

            console.log(response);

        });


};


